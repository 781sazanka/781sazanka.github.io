# 電子オルゴール
## 部品
### 一個で一個
- [LED ¥15 (10個入り)](https://akizukidenshi.com/catalog/g/gI-12691/)
- [タクトスイッチ ¥10](https://akizukidenshi.com/catalog/g/gP-03647/)
- [スピーカ ¥50](https://akizukidenshi.com/catalog/g/gP-10129/)
- [ATTiny85 ¥200](https://akizukidenshi.com/catalog/g/gI-09573/)
- [ブレッドボード ¥130](https://akizukidenshi.com/catalog/g/gP-05155/)
- [電池 ¥40 (5個入り)](https://akizukidenshi.com/catalog/g/gB-05694/)

### 一個で複数個
- [Arduino UNO ¥3630](https://akizukidenshi.com/catalog/g/gM-07385/)
- [スズメッキ線 ¥230](https://akizukidenshi.com/catalog/g/gP-02220/)
- [単芯導線 ¥620](https://akizukidenshi.com/catalog/g/gP-08996/)
- PC

## プログラムの書き込み
1. Arduino IDEをPCにインストールして各種設定をする
	1. [arduino.cc](https://www.arduino.cc/en/software)からPCに合ったArduino IDEをダウンロード
	1. Arduino IDEの`ファイル>設定`を開いて(`Ctrl+,`)
		- `より詳細な情報を表示する>書き込み`にチェックを入れる
		- `追加のボードマネージャのURL`に`http://drazzy.com/package_drazzy.com_index.json`をコピペ
	1. `ツール>ボード>ボードマネージャ...`でATTinyCoreを検索してインストール
1. Arduino UNOをArduino ISP化する
	1. Arduino IDEの `ファイル>スケッチ例>Arduino ISP>Arduino ISP` を選択
	1. Arduino UNOをPCに繋いで左上`→`ボタンを押す
	1. Arduino UNOは繋いだままでOK
1. **Arduino UNOとATTiny85を結線**
	- 困ったら[ATTiny 5seriesのデータシートの日本語訳](https://avr.jp/user/DS/PDF/tiny45.pdf)を参照すると良い
	- データシート2枚目にATTiny85のピンの図がある
	- ATTiny85はブレッドボード中央に刺してジャンパ線でArduino UNOと以下の通り結線
		- UNO	t85
		- ===	===
		- 10	PB5
		- 11	PB0
		- 12	PB1
		- 13	PB2
		- 5V	VCC
		- GND	GND
1. avrdudeとcfgファイルのパスを取得
	- `ファイル>スケッチ例>Basic>Blink`を開く
	- `ツール>ボード>ATTinyCore>ATTiny 25/45/85 (No Bootloader)`を選択
	- `ツール>ポート>~~(Arduino UNO)`を選択
		- `~~`部分がポートを表す文字列
		- Windowsだと`COM1`とか
		- Macだと`/dev/tty.usbmodem1234`とか
		- あとで使うのでここで見れることを覚えておく
	- `ツール>書き込み装置>Arduino as ISP`を選択
	- `スケッチ>書き込み装置を使って書き込む`
	- 出てきたログの一番上に`~/avrdude`と`~/avrdude.cfg`で終わる行があるのでそのパスをコピー
	- 適当なテキストファイルにペーストして保存しておく
1. ATTiny85の設定
	- ターミナルを開いて(`Win+X I`)
		```
		<~~/avrdude> -C <~~/avrdude.cfg> -v -p t85 -c avrisp -P <ポート> -b 19200 -U lfuse:w:0xf1:m -U hfuse:w:0xdf:m -U efuse:w:0xfe:m
		```
		を実行
		- `< ~~ >`部分はそれぞれメモしたパスとポートに書き換える
1. **電子オルゴール本体のプログラムを書き込む**
	- 用意したスケッチを開いて`スケッチ>書き込み装置を使って書き込む`

- 以降プログラムを書き換える際は太字の項のみでOK
	
