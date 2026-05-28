import json
import os

# スクリプト自身が置かれているフォルダのパスを取得
base_dir = os.path.dirname(os.path.abspath(__file__))
input_file = os.path.join(base_dir, "aquatic_database.json")
output_file = os.path.join(base_dir, "missing_images_list.txt")

def main():
    try:
        # JSONデータの読み込み
        with open(input_file, "r", encoding="utf-8") as f:
            data = json.load(f)
            
        missing_list = []
        
        for item in data:
            img1 = item.get("image1")
            img2 = item.get("image2")
            img3 = item.get("image3")
            
            # 3つとも None または 空文字 の場合を判定
            if not img1 and not img2 and not img3:
                missing_list.append(item.get("name", "名前不明"))

        # 結果の出力
        if missing_list:
            print(f"画像が1枚もない生物が {len(missing_list)} 件見つかりました。")
            with open(output_file, "w", encoding="utf-8") as f:
                for name in missing_list:
                    f.write(name + "\n")
                    print(f"- {name}")
            print(f"\n確認用の一覧を 'missing_images_list.txt' に保存しました。")
        else:
            print("素晴らしい！すべての生物に少なくとも1枚以上の画像が設定されています。")

    except FileNotFoundError:
        print(f"【エラー】ファイルが見つかりません。")
        print(f"以下の場所に '{input_file}' を置いてください。")
    except json.JSONDecodeError:
        print("【エラー】JSONファイルの形式に問題があります。")
    except Exception as e:
        print(f"【予期せぬエラー】: {e}")

    # ★ 画面がすぐに閉じないように、Enterキー入力を待つ
    print("\n" + "="*40)
    input("確認が終わったら、Enterキーを押して画面を閉じてください...")

if __name__ == "__main__":
    main()