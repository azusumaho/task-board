# CLAUDE.md

このファイルは、このリポジトリで作業する Claude Code 向けのガイドです。

## プロジェクト概要

task-board: タスク管理ボードアプリケーション。タスクの追加・完了切り替え・削除ができ、データはブラウザの localStorage に保存される。

## デプロイ先

https://azusumaho.github.io/task-board/

- GitHub Pages で公開。`main` へのプッシュで GitHub Actions(`.github/workflows/deploy.yml`)が自動デプロイする。
- Vite の `base` を `/task-board/` に設定している(`vite.config.js`)。変更しないこと。

## 技術スタック

- React 18(関数コンポーネント + Hooks)
- Vite 5(`@vitejs/plugin-react`)
- JavaScript(JSX)。TypeScript は未使用
- スタイルは素の CSS(`src/App.css`)
- 状態管理は `useState` / `useEffect` のみ。永続化は `localStorage`(キー: `task-board:tasks`)
- テストフレームワークは未導入

## 開発コマンド

- `npm install`: 依存関係のインストール
- `npm run dev`: 開発サーバー起動(http://localhost:5173/task-board/)
- `npm run build`: 本番ビルド(`dist/` に出力)
- `npm run preview`: ビルド結果の確認

## Git運用ルール

- **コードを変更するたびに、GitHub にプッシュすること。**
  - 変更 → `git add` → `git commit` → `git push` を、作業の区切りごと(最低でも変更ごと)に行う。
  - 変更をローカルに溜め込まない。
- コミットは意味のある小さな単位で行い、メッセージは変更内容が分かるよう簡潔に書く(日本語可)。
- `main` ブランチに直接コミットしてプッシュする。
- 強制プッシュ(`--force`)、履歴の書き換えは、明示的な指示がない限り行わない。
- シークレット(APIキー、`.env` など)はコミットしない。

## コーディング方針

- 変更は依頼された範囲にとどめ、不要なリファクタリングを混ぜない。
- 既存のコードスタイル・命名規則に合わせる。
- 説明や画面表示はすべて日本語にする。

## コンポーネントの命名規約

- コンポーネント名・ファイル名は PascalCase にする(例: `TaskList.jsx`)。拡張子は JSX を含むファイルのみ `.jsx`、それ以外は `.js`。
- 1ファイル1コンポーネントとし、`export default function コンポーネント名()` の関数宣言で定義する。
- コンポーネント専用のスタイルは同名の CSS ファイルに置く(例: `TaskList.css`)。現状の全体スタイルは `App.css`。
- 状態は `[値, set値]` の組で命名する(例: `tasks` / `setTasks`、`text` / `setText`)。
- イベントハンドラは動詞から始める(例: `addTask`, `toggleTask`, `deleteTask`)。props で渡す場合は `onAddTask` のように `on` を付ける。
- 定数は UPPER_SNAKE_CASE(例: `STORAGE_KEY`)、それ以外の変数・関数は camelCase にする。
- CSS クラス名は小文字のケバブケース(例: `task-list`, `add-form`)。状態を表すものは `done` のように修飾クラスを付ける。
