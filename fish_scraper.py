import requests
import json
import time
import csv
import sys

# 1. CSVからリスト読み込み
fish_list = []
output_filename = "aquatic_database.json" # 出力ファイル名を少し変更しました
encodings = ["utf-8-sig", "shift_jis", "cp932", "utf-8"]
file_loaded = False

for enc in encodings:
    try:
        with open("fish_names.csv", "r", encoding=enc) as f:
            reader = csv.reader(f)
            for row in reader:
                if row and row[0].strip():
                    fish_list.append(row[0].strip())
        file_loaded = True
        break
    except UnicodeDecodeError:
        continue
    except FileNotFoundError:
        print("エラー: 'fish_names.csv' が見つかりません。")
        sys.exit()

if not file_loaded or not fish_list:
    print("エラー: 'fish_names.csv' から魚の名前を読み込めませんでした。")
    sys.exit()

print(f"『fish_names.csv』から {len(fish_list)} 件の生物名を読み込みました。")
print("スマート検索（全生物対応・Web検索再現版）を開始します...\n")

headers = {
    "User-Agent": "AquaticDatabaseBuilder/3.0"
}
results = []

for fish_name in fish_list:
    print(f"検索中: {fish_name: <15} -> ", end="", flush=True)
    
    fish_data = {
        "name": fish_name,
        "order_name": None,
        "family_name": None,
        "genus_name": None,
        "image1": None,
        "image2": None,
        "image3": None
    }
    
    # 【変更点】
    # taxon_id の縛りを完全に撤廃しました。
    # Web検索と同じ結果を返す「autocomplete」APIを引き続き使用し、
    # rank=species で「種」に限定する機能は残しています。
    search_url = f"https://api.inaturalist.org/v1/taxa/autocomplete?q={fish_name}&locale=ja&rank=species"
    
    try:
        search_res = requests.get(search_url, headers=headers)
        
        if search_res.status_code == 200:
            search_data = search_res.json()
            
            if not search_data['results']:
                print("✕ 該当する生物が見つかりませんでした (スキップ)")
            else:
                # Webサイトで1番上に来る結果を無条件で取得
                target_taxon = search_data['results'][0]
                taxon_id = target_taxon['id']
                actual_name = target_taxon.get('preferred_common_name', target_taxon.get('name', ''))
                
                # 念のための表記揺れチェック
                if fish_name not in actual_name and actual_name not in fish_name:
                     print(f"△ 違う生物の可能性あり (API回答: {actual_name}) - 念のため取得します")
                
                time.sleep(0.5) # API制限回避
                
                # 詳細データ取得（画像と分類情報）
                detail_url = f"https://api.inaturalist.org/v1/taxa/{taxon_id}?locale=ja"
                detail_res = requests.get(detail_url, headers=headers)
                
                if detail_res.status_code == 200:
                    detail_data = detail_res.json()
                    taxon = detail_data['results'][0]
                    
                    # 目・科・属の取得
                    if 'ancestors' in taxon and taxon['ancestors']:
                        for ancestor in taxon['ancestors']:
                            rank = ancestor.get('rank')
                            rank_name = ancestor.get('preferred_common_name', ancestor.get('name'))
                            
                            if rank == 'order':
                                fish_data['order_name'] = rank_name
                            elif rank == 'family':
                                fish_data['family_name'] = rank_name
                            elif rank == 'genus':
                                fish_data['genus_name'] = rank_name

                    if taxon.get('rank') == 'genus' and not fish_data['genus_name']:
                        fish_data['genus_name'] = taxon.get('preferred_common_name', taxon.get('name'))
                    
                    # 画像取得
                    if 'taxon_photos' in taxon and taxon['taxon_photos']:
                        photos = taxon['taxon_photos']
                        found_count = min(3, len(photos))
                        
                        print(f"〇 成功! [{fish_data['order_name']}/{fish_data['family_name']}/{fish_data['genus_name']}] (確定名: {actual_name})")
                        
                        for i in range(found_count):
                            photo_info = photos[i]['photo']
                            if 'medium_url' in photo_info and photo_info['medium_url']:
                                img_url = photo_info['medium_url']
                            else:
                                img_url = photo_info['url'].replace('square', 'medium')
                                
                            fish_data[f"image{i+1}"] = img_url
                        
                        results.append(fish_data)
                    else:
                        print(f"✕ 画像なし (スキップ) (確定名: {actual_name})")
                else:
                    print(f"✕ 詳細取得エラー (スキップ)")
        else:
            print(f"✕ 検索エラー (スキップ)")
            
    except Exception as e:
        print(f"✕ 通信エラー: {e} (スキップ)")

    time.sleep(0.5)

# ファイル出力
with open(output_filename, "w", encoding="utf-8") as f:
    json.dump(results, f, ensure_ascii=False, indent=4)

print(f"\nすべての処理が完了しました！")
print(f"作成されたファイル: '{output_filename}' (全 {len(results)} 種収録)")
input("\nエンターキーを押すとウィンドウを閉じます...")