# gulp-esm

ES Modulesを使ったGulp環境アセットです。

## 環境説明

## 初回インストール

1. Node をインストールしてください。
   - `.node-version` に記載されている Node バージョンを使用してください。
     - nodenv や nvm を利用していただくことを推奨します。
1. Nodeパッケージのインストールしてください。
   ```sh
   npm install
   ```

## 開発用ビルド

```sh
npm run dev
```

を実行すると、開発のためのビルドが実行されます。  
実行中は`src`以下の変更が随時`dist`に反映され`http://localhost:3000`によって配信されるようになります。

## 本番用ビルド

```sh
npm run build
```

を実行すると、本番のためのビルドが実行されます。

## その他

### 整形, Lint

`js`, `scss`, `pug`は`prettier`を使った整形を行っています
下記のようなコマンドが保存のたびに実行されて`prettier`がかかるよう、お使いのエディタを設定して下さい。

```sh
npm run prettier --write <ファイルパス>
```

整形、Lint 関連のコマンド

- `npm run lint:scss` ・・・Stylelint
- `npm run format:scss` ・・・Stylelintの整形
- `npm run lint:js` ・・・ESLint
- `npm run format:js` ・・・ESLintの整形
- `npm run format` ・・・prettier を使った整形
