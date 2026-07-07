# mierun LP

板金加工業のための AI 外観検査「mierun(ミエルン)」のランディングページ。

Cloudflare Pages でホスト、`mierun.jp` で公開。

---

## 構成

```
mierun-lp/
├── site/               ← Cloudflare Pages の公開ディレクトリ
│   ├── index.html      LPエントリー(Stitched版)
│   ├── sections/       セクションごとの JSX
│   ├── styles/         トークン CSS
│   ├── assets/         画像・3Dモデル (GLB)
│   ├── tweaks_panel.jsx  Tweaks UIコンポーネント
│   └── _headers        Cloudflare Pages ヘッダー設定
├── docs/               ハンドオフ資料など
├── explorations/       過去のデザイン探索版(参考用)
├── README.md
└── .gitignore
```

## 技術スタック

- **静的HTML + React (18.3.1)** — CDN読み込み、Babel Standaloneでブラウザ内トランスパイル
- **model-viewer 3.5.0** — 標準サイズ筐体の3D表示 (GLB)
- **Google Fonts** — Zen Kaku Gothic New / Inter

ビルドプロセスなし。`site/index.html` を直接開けば動作します。

## ローカル確認

```bash
cd site
# 適当な静的サーバーで起動
python3 -m http.server 8000
# → http://localhost:8000
```

または Node の `npx serve site` 等でもOK。

`file://` で直接開くと CORS でJSX読み込みが失敗するので、必ずローカルサーバー経由で開くこと。

## Cloudflare Pages デプロイ

1. Cloudflare ダッシュボード → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
2. リポジトリ `hiromitnk/mierun-lp` を選択
3. ビルド設定:
   - **Framework preset**: `None`
   - **Build command**: (空欄)
   - **Build output directory**: `site`
   - **Root directory**: (空欄 = リポジトリルート)
4. **Save and Deploy** → 数十秒でデプロイ完了、`*.pages.dev` の仮URL 発行

## カスタムドメイン (mierun.jp)

### 前提

- ドメインは お名前.com で取得済み
- Cloudflare にサイト追加 → お名前.com 側でネームサーバーを Cloudflare のものに変更 (DNS移管)

### 手順

1. **Cloudflare にサイト追加**
   - Cloudflare ダッシュボード → **Add a site** → `mierun.jp` を入力 → Free プラン選択
   - Cloudflare 指定のネームサーバー2本 (例: `xxx.ns.cloudflare.com`) が表示される

2. **お名前.com でネームサーバー変更**
   - お名前.com Navi → ドメイン設定 → ネームサーバーの変更
   - 「その他のネームサーバーを使う」を選択、Cloudflare指定の2本を登録
   - 反映まで 数時間〜最大72時間

3. **Cloudflare Pages でカスタムドメイン紐付け**
   - Pages プロジェクト → **Custom domains** → **Set up a custom domain**
   - `mierun.jp` を追加 → 自動で DNS CNAME レコード追加 & SSL証明書発行
   - 必要なら `www.mierun.jp` も追加してリダイレクト設定

4. **HTTPS/SSL の確認**
   - Cloudflare → SSL/TLS → 暗号化モードは **Full** 推奨(Pages側が自動でHTTPS化するので)

## 更新フロー

- `main` ブランチに push → Cloudflare Pages が自動で本番デプロイ
- PR を作成 → プレビューURL自動発行 (`*.pages.dev` のブランチ別サブドメイン)

## ライセンス

社内・クライアント向けプロダクトのソース。無断転載禁止。

© Will Group Co., Ltd.
