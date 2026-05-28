import json
import requests
import re
import time
from bs4 import BeautifulSoup

INPUT_JSON = "aquatic_database.json"
OUTPUT_JSON = "aquatic_database_updated.json"
TREE_URL = "https://zukan.com/fish/tree_index"

def main():
    print("【1】 図鑑のツリー情報からIDリストを取得中...")
    headers = {'User-Agent': 'Mozilla/5.0'}
    
    try:
        tree_response = requests.get(TREE_URL, headers=headers)
        tree_response.encoding = tree_response.apparent_encoding
        tree_html = tree_response.text
    except Exception as e:
        print(f"ツリー情報の取得に失敗しました: {e}")
        return

    # 正規表現で javascript の d.add(..., "生物名", "./internalXXXX", ...) から抽出
    d_add_pattern = re.compile(r'd\.add\(\s*\d+,\s*\d+,\s*"([^"]+)",\s*"([^"]+)"')
    matches = d_add_pattern.findall(tree_html)

    name_to_id = {}
    for name, link in matches:
        # "./internal1763" のような文字列から先頭の "./" を削除
        fish_id = link.replace("./", "")
        name_to_id[name] = fish_id

    print(f"  -> {len(name_to_id)}種のリンク情報をリスト化しました。\n")

    print("【2】 JSONファイルを読み込み中...")
    with open(INPUT_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)

    print(f"【3】 各生物の解説・分布データの取得を開始します（全{len(data)}件）\n")
    
    for i, item in enumerate(data):
        fish_name = item["name"]
        
        # 初期値として空文字を入れておく
        item["description"] = ""
        item["area"] = ""

        print(f"[{i+1}/{len(data)}] {fish_name} ", end="")

        if fish_name in name_to_id:
            fish_id = name_to_id[fish_name]
            detail_url = f"https://zukan.com/fish/{fish_id}"
            
            try:
                res = requests.get(detail_url, headers=headers)
                res.encoding = res.apparent_encoding
                soup = BeautifulSoup(res.text, 'html.parser')
                
                # テーブルから <th> と <td> を探す
                ths = soup.find_all('th')
                desc_found, area_found = False, False
                
                for th in ths:
                    th_text = th.get_text(strip=True)
                    if th_text in ["特徴", "形態・特徴", "分布"]:
                        td = th.find_next_sibling('td')
                        if td:
                            # テキスト内の不要な改行をスペースに変換して1文に整形
                            td_text = td.get_text(strip=True).replace('\n', ' ').replace('\r', '')
                            
                            if th_text in ["特徴", "形態・特徴"]:
                                item["description"] = td_text
                                desc_found = True
                            elif th_text == "分布":
                                item["area"] = td_text
                                area_found = True
                
                # 取得結果のログ出力
                if desc_found and area_found:
                    print("-> 〇 取得成功")
                elif desc_found or area_found:
                    print("-> △ 一部取得")
                else:
                    print("-> ✕ 該当行なし")
                    
            except Exception as e:
                print(f"-> エラー発生: {e}")
                
            # 相手先サーバーに負荷をかけないよう、必ず1秒待機する（重要）
            time.sleep(0.1)
            
        else:
            print("-> ✕ ツリーに完全一致なし（スキップ）")

    # JSONへ書き出し
    print(f"\n【4】 処理完了。 '{OUTPUT_JSON}' として保存します...")
    with open(OUTPUT_JSON, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
        
    print("すべての作業が完了しました！")

if __name__ == "__main__":
    main()