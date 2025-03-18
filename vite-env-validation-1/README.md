# [Vite で環境変数をバリデーションする / 動作確認](https://zenn.dev/rendob/articles/vite-env-validation#動作確認)

[src/env/validation.ts](src/env/validation.ts) に定義した環境変数のバリデーションを、開発サーバ起動時・ビルド時に実行します。\
バリデーション済みの環境変数はアプリ内で使用できます。

## 動作確認環境

- node 22.14.0

## Quick Start

1. インストール

```sh
npm ci
```

2. 開発サーバ起動 または ビルド

```sh
# 開発サーバ起動
npx vite
# ビルド
npx vite build
```

- .env ファイルに環境変数が正しく設定されていれば成功します。
- .env ファイルの環境変数が正しくないと上記コマンドが失敗するため、環境変数の設定ミスを早期発見できます。
