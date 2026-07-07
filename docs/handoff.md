# Handoff: mierun LP(板金加工業向け AI外観検査ソリューション)

## Overview

「ミエルン(mierun)」は、板金加工業を主なターゲットにした AI外観検査ソリューションのプロダクトサイト/LP です。
本ハンドオフは、このLPの **最終デザイン(High-fidelity)** を実装に落とすためのドキュメント+ソースバンドルです。

主なゴール:

- DXPO 出展告知 → 課題提起 → プロダクト機能 → ハードウェア(筐体) → Before/After → 導入フロー → FAQ → 問い合わせ CTA、までの 1ページ完結 LP。
- 「良品サンプル1枚から始まる」「治具・専門知識不要」「エッジ動作(クラウド不要)」の3点を中心メッセージとして強調する。
- ブランドアクセントの **オレンジ #FE5E32** と **ダークブルー #203954**(ロゴ準拠)で「現場で本当に使える」産業系プロダクト感を出しつつ、UIは現代的・親しみやすい印象に。

---

## About the Design Files

このバンドルに入っている `.html` / `.jsx` / `.css` ファイルは、**実装の最終リファレンスとなる "デザインモック"** です。
本番コードとしてそのままデプロイすることは想定していません。React+Babel をブラウザ内でトランスパイルしている開発専用のプロトタイプ形態のため、

- 既存のコードベースが React/Next.js なら、そこに **コンポーネントとして移植** する。
- 既存環境がない・新規構築なら、**Next.js + CSS Modules または styled-components**(あるいは Tailwind + tokens)で実装するのが推奨。
- バックエンドが別フレームワーク(Vue/Nuxt, Astro, SvelteKit など)の場合も、JSX のマークアップ構造とインライン style を素直に移植すれば再現可能なように書いてあります。

目的は **「このHTMLを動かす」のではなく、このHTMLが描いている見た目・挙動を、対象コードベースの流儀で再現する** ことです。

---

## Fidelity

**High-fidelity (hifi)** です。

- 全カラー、フォントサイズ、行間、シャドウ、角丸、余白はすべて確定値です。実装時はピクセル精度で再現してください。
- レスポンシブ対応は **`.lp-frame` のラッパー縮小** に依存しているため、本番実装ではブレイクポイントごとに正式なレスポンシブを書く必要があります(下の Responsive Behavior 参照)。
- アイコン・装飾SVGは全て インライン SVG で描いており、書き直しは不要なはず。ただし `assets/enclosure-line.png` だけは外部画像です。

---

## Files

```
design_handoff_mierun_lp/
├── README.md                    ← このファイル
├── mierun LP Stitched.html      ← LPのエントリポイント。全セクションを順番に組み合わせる
├── styles/
│   └── tokens.css               ← デザイントークン(色・タイポ・影など)+ btn-primary 等の共通スタイル
├── tweaks_panel.jsx             ← デザイン Tweak UI(本番実装では不要 / 削除可)
├── assets/
│   └── enclosure-line.png       ← 標準サイズ筐体(300mm)の線画(ハードウェアセクション内)
└── sections/
    ├── Common.jsx               ← MierunLogo / InspectionPreview / SectionHead / SiteHeader / SiteFooter
    ├── Heroes.jsx               ← HeroA / HeroB / HeroC(本番採用は HeroC)
    ├── EventBanner.jsx          ← DXPO出展告知バナー(EventBannerDxpo)
    ├── Problems.jsx             ← VOICES FROM THE FIELD(ProblemsA を採用)
    ├── Features.jsx             ← PRODUCT FEATURES(FeaturesA を採用)
    ├── Enclosure.jsx            ← ハードウェア・筐体詳細(EnclosureSection)
    ├── Benefits.jsx             ← BEFORE / AFTER 比較(BenefitsA を採用)
    ├── Flow.jsx                 ← WORKFLOW 4ステップ(FlowB を採用)
    └── FaqCta.jsx               ← FAQ + CTA + Footer(FaqSection / CtaB を採用)
```

`HeroA/B/C` のように複数バリアントが入っているファイルがありますが、**実際にレンダーされているのは Stitched.html 内で参照されている関数だけ** です。未使用バリアントは破棄して構いません。

---

## Screens / Views

LPは1ページ縦スクロールで、以下のセクションを上から順に並べます。
それぞれ `<div className="sec-base">`(白背景)と `<div className="sec-alt">`(クリーム濃いめ背景)を交互に挟んで「ゼブラ」を作っています。

| # | Section ID | コンポーネント | 背景 | 主な役割 |
|---|---|---|---|---|
| 1 | `#top` | `<HeroC />` | sec-base(白) | サイト全体のヘッダー + ヒーロー |
| 2 | `#event` | `<EventBannerDxpo />` | (オレンジ #FE5E32 固定) | DXPO 出展告知バナー |
| 3 | `#problems` | `<ProblemsA />` | sec-alt(クリーム) | 現場の声 3件 |
| 4 | `#features` | `<FeaturesA />` | sec-base | プロダクト主要 5機能 |
| 5 | `#enclosure` | `<EnclosureSection />` | sec-alt | 専用筐体(ハードウェア)2サイズ |
| 6 | `#benefits` | `<BenefitsA />` | sec-base | Before / After 比較 5行 |
| 7 | `#flow` | `<FlowB />` | sec-base | 導入から運用まで 4ステップ |
| 8 | `#faq` | `<FaqSection />` | sec-base | FAQ アコーディオン 6件 |
| 9 | `#contact` | `<CtaB />` | sec-alt | 問い合わせ CTA(DXPO情報併載) |
| 10 | (footer) | `<SiteFooter />` | (ダークネイビー固定) | サイトフッター |

### 1. Hero(`HeroC` — Heroes.jsx 内)

「間違い探しメタファ」をビジュアルで表現。中央寄せレイアウト。

- 上部 chip:「板金加工業のための AI外観検査」(白背景 + 緑ドット #B8CE52)
- `<h1 className="hero-c-title">`:
  - PC: 「AIの目で、簡単に、しっかり検品。」を **1行** で(`white-space: nowrap`)
  - SP(≤640px): 「AIの目で / 簡単に、 / しっかり検品。」と **3行** に改行(`tokens.css` 内の `.hero-c-title` 制御を参照)
  - 「簡単に、しっかり検品。」部分はオレンジ #FE5E32、その下に SVG の波線下線(PCのみ表示)
  - フォントサイズ: 64px(PC) / 44px(SP) / 36px(≤380px)
- リード文: 22px / line-height 1.85 /「良品サンプルと比較する**「間違い探し方式」**。だから、設定は良品1枚だけでOK。」
- Before/After 2画面比較(REFERENCE — 良品 / TARGET — 検査対象):
  - 左右に `<InspectionPreview status="ok|ng" />` を 240px 高で配置
  - 中央に丸ボタン状の COMPARE アイコン(オレンジ円 + 白矢印)
- ボタン2連:
  - `<button class="btn-primary">無料デモを予約する →</button>`(オレンジ・凸シャドウ)
  - `<button class="btn-dark">資料をダウンロード</button>`(ネイビー・凸シャドウ)
  - 共に幅 100%、最大幅 340px、中央寄せ

### 2. DXPO Event Banner(`EventBannerDxpo` — EventBanner.jsx)

オレンジ全面背景の出展告知バナー。Hero直下に置いて目立たせる。

- 背景: `#FE5E32` + 斜め45度ストライプ patrern(opacity 0.18)+ 右下ドット pattern
- 中央の白カード:
  - 左: 日付ブロック `8/18 Tue — 8/19 Wed`(64px Inter ボールド、ネイビー)
  - 中央: `DXPO TOKYO '26 SUMMER` (eyebrow) → 「製造イノベーションDXPO に出展します。」 → 詳細表(PLACE/HOURS/DEMO 各 19〜20px)
  - 右: 96px の角丸オレンジ正方形 CTA(`→` アイコン)+「来場登録は公式サイトへ →」
- 下部: 「事前来場登録で当日スムーズに入場 (有人受付は5,000円)」(白文字、時計アイコン)
- カード全体は `<a>` で囲まれており(現状リンク先 ダミー)、本番では DXPO 公式 URL を入れる

### 3. Problems(`ProblemsA` — Problems.jsx)

「VOICES FROM THE FIELD」(中央寄せヘッド)+ 3カードグリッド。

- カード: 白背景 + 角丸 20px + 左に番号 01〜03
- 各カードの構成:
  - 角丸スピーチバブル(クリーム背景)で現場のセリフを引用
  - 下に「製造部 検査リーダー / 50代」のような肩書

### 4. Features(`FeaturesA` — Features.jsx)

5機能を 2大 + 3小 のカード構成で並べる。

- ヘッダー: 「PRODUCT FEATURES / 良品サンプル1枚から始まる、AI外観検査「ミエルン」。」(中央寄せ)
- 上段(2大カード):
  - **FEATURE 01**: 「良品1枚で即日導入」+ `kind='one'` の SVG ビジュアル
  - **FEATURE 02**: 「NG箇所をBBOXで可視化」+ `<InspectionPreview status="ng" />` 埋め込み
- 下段(3小カード):
  - **FEATURE 03**: 「検査品質を標準化」+ `kind='std'`(4人のアイコン + SAME RESULT)
  - **FEATURE 04**: 「エッジ動作型(クラウド不要)」+ `kind='edge'`(雲に × 印)
  - **FEATURE 05**: 「品番別・自動レポート」+ `kind='report'`(週次バー棒グラフ)
- 小カードのSVGは `preserveAspectRatio="xMidYMax meet"` + `<g transform="translate(0 30)">` で **下寄せ + 内側30pxシフト** することで、左上の「FEATURE 0X」ラベルとの被りを回避している(重要)
- カード本体: 白 + 角丸 20px + うっすらネイビー影 / large=220px / 通常=160px の上部ビジュアルエリア

### 5. Enclosure / 専用筐体(`EnclosureSection` — Enclosure.jsx) **【新規セクション】**

ハードウェア紹介セクション。テクニカルドローイング(設計図)風のビジュアルで2サイズの筐体を見せる。

- ヘッダー: 「HARDWARE — ENCLOSURE / 2サイズから選べる、専用筐体。」(中央寄せ)
- 2カード並列(STANDARD / LARGE):

  **STANDARD(標準サイズ)** ← DXPO デモ機はこちら
  - 寸法: **300 × 300 × 430 mm**
  - 図面: `assets/enclosure-line.png`(ユーザー提供の線画 / `mix-blend-mode: multiply` で方眼紙背景になじませる)
  - 用途: 縦横3〜30cmの板金加工品(プレス・溶接・切断品など)
  - 特徴3点(箇条書き、オレンジ丸ドット):
    - カメラ・照明・撮影台 一体型
    - 電源を入れるだけで撮影環境が完成
    - ライン横にそのまま設置可能
  - **右上に「DXPOデモ機 / 実機体験可」のオレンジバッジ(脈動ドット付き)**
  - DRAWING NO. `MR-ENC-300` / SCALE `1:5`
  - カラーアクセント: オレンジ #FE5E32
  - カード輪郭: `1px solid rgba(254,94,50,0.25)` + オレンジ系の二段シャドウ

  **LARGE(大サイズ)**
  - 寸法: **1000 × 1000 × 1000 mm**
  - 図面: SVG で等角投影(アクソノメトリック)の立方体を描画(扉、ヒンジ、上面カメラマウントの輪郭付き)
  - 用途: 大型ワーク対応(標準に収まらないアセンブリ、大判パネル等)
  - 特徴3点:
    - 大型ワーク対応の広撮影面
    - 内部照明アレイで均一光源
    - 出入口を広く取った設計
  - DRAWING NO. `MR-ENC-1000` / SCALE `1:15`
  - カラーアクセント: ダークブルー #203954
  - カード輪郭: `1px solid #efefef` + ネイビー系シャドウ

- 図面エリアの共通仕様:
  - 背景: 方眼紙風(24pxピッチの薄ダークブルーグリッド `rgba(32,57,84,0.04)`)
  - 左に **高さ寸法線**(矢印キャップ + 上下バー、縦書きラベル)、下に **幅寸法線**(同様)を描画
  - 上部に `DRAWING NO.` / `SCALE` ラベル(10px Inter, 灰色)
  - 下部中央に `W 300 × D 300 × H 430 (mm)` のような完全寸法表記
- 下部のスペック補足表(4列グリッド):

  | Key | Value | Sub |
  |---|---|---|
  | POWER | AC100V / 単相 | 一般コンセントで稼働 |
  | LIGHTING | 内蔵LED | 均一拡散光・色温度固定 |
  | CAMERA | 産業用カメラ | 対象に応じて選定可 |
  | DELIVERY | 最短2週間 | PoCから本導入まで一気通貫 |

- 末尾に注記: 「※ カメラモジュール単体のご提供にも対応可能です。既存ラインへの組込みもご相談ください。」

### 6. Benefits(`BenefitsA` — Benefits.jsx)

Before/After の対照表。

- 大きな白カード内に 5行のテーブル状レイアウト
- ヘッダー行: `BEFORE: 属人化した検査 →(矢印) AFTER: 仕組みとしての検査`
- 各行 grid `1fr 80px 1fr`:
  - 左: 灰色 + line-through で「以前のやり方」
  - 中央: 矢印
  - 右: ネイビー強調で「ミエルン導入後」
- 行の背景は奇数/偶数で淡くゼブラ(#fcfcfc / #fff)

### 7. Flow(`FlowB` — Flow.jsx)

導入から運用までを4ステップで縦並列に。

- 各行 grid `80px 1fr 360px`:
  - 左: 80×80 のネイビー円(中に番号 01〜04)、白の8pxリングで「点」のように見せる
  - 中央: chip(タグ) + h3(ステップ名) + p(説明文 19px / 1.85 / `maxWidth` 制約なしで広く)
  - 右: 360px のビジュアル(ステップごとに `FlowStepViz` で SVG / InspectionPreview を切替)
- 左の円と円の間は、絶対配置の 2px 縦線でつないでいる(`background: #e8e8e8`)
- 各ステップのタイトル:
  - 01「専用筐体を設置」/ tag: ハードウェア
  - 02「良品画像を1枚アップロード」/ tag: セットアップ
  - 03「品番を選んで検査」/ tag: 日々の運用
  - 04「レポートで傾向を把握」/ tag: 振り返り

### 8. FAQ(`FaqSection` — FaqCta.jsx)

`<details>` ベースのアコーディオン6件。最大幅 880px の中央列。

- アイテム: 白カード + 1pxボーダー + 角丸 14px + パディング 28×32px
- `<summary>` 左に `Q.` (オレンジ Inter 800 / 20px)、右に `+` 開閉インジケータ
- `[open]` 時に内側に `A.` (ネイビー Inter 800 / 20px) + 説明文 19px / line-height 1.9
- 初期状態は1件目だけ open

### 9. CTA(`CtaB` — FaqCta.jsx 内)

最終CTAブロック。詳細はソース参照(画像系のオレンジパネル + DXPO 情報併載)。

### 10. Footer(`SiteFooter` — Common.jsx)

ダークネイビー #0E0A2E 背景、クリーム #FFF3D6 文字。
左にロゴ + サブコピー、右に Product / Support / Company の3列リンク。
最下行に `© 2026 Will Group Co., Ltd. All Rights Reserved.` + `mierun.jp`。

---

## Header(`SiteHeader` — Common.jsx)

各 Hero の中で最上部にレンダーされる。

- 高さ: 上下padding `20px 56px`
- 背景: `rgba(252,252,252,0.85)` + `backdrop-filter: blur(8px)`
- 下線: `1px solid #e8e8e8`
- 左: ロゴ(MierunLogo 26px)
- 右: ナビ4項目(特徴 / 導入フロー / 料金 / よくある質問)+ 末尾に「無料デモを予約」(btn-primary 小)
- ナビ a タグのホバーでオレンジに変色(`tokens.css` の `.mierun nav a:not(.btn-primary):hover` 参照)

---

## Interactions & Behavior

- **アンカー遷移**: ヘッダーの各リンクは `href="#features"` のようにセクションIDへ。`html { scroll-behavior: smooth }` でスムーズスクロール
- **CTAボタン hover**:
  - `.btn-primary`(オレンジ): `transform: translateY(-2px)` で軽く浮く
  - `.btn-dark`(ネイビー): 同様に浮く + 文字色は白固定
  - `.btn-ghost`(アウトライン): 色変化なし
- **FAQ アコーディオン**: 標準の `<details>/<summary>`。開閉アニメは現状なし(本番で `transition: height` や `details/summary content-visibility` 拡張を入れても良い)
- **波線下線(HeroC)**: 静的SVG path。アニメーションなし。SPでは非表示
- **DXPOバナー脈動ドット**: なし(Enclosureカードの「DXPOデモ機」バッジには `box-shadow` で halo を描いているが脈動はしていない。実装時にお好みで `@keyframes pulse` を入れても良い)
- **Tweaks Panel**: `tweaks_panel.jsx` は社内デザインツール用の UI で、**本番実装では完全に削除** すること。`MierunStitched` 内の `useTweaks` / `TWEAK_DEFAULTS` 周り含めて全部不要

---

## State Management

実質ステートレスなLPです。React state を使っているのは Tweaks パネル関連のみで、本番では撤去します。

唯一動的に組み立てる箇所:

- **問い合わせフォーム**(CtaB 内): 本番ではフォーム送信(POST or formspree/HubSpot連携など)を後から実装する想定
- **DXPO バナーのリンク先**(EventBannerDxpo の `<a>`): DXPO公式の事前来場登録URLに差し替え

---

## Design Tokens

`styles/tokens.css` に集約済み。実装ではこれを CSS Custom Properties か、Tailwind config の `theme.extend` などに移植してください。

### Colors

| Token | Value | 用途 |
|---|---|---|
| `--c-dark-blue` | `#203954` | ブランドプライマリ(見出し、ボタンdark、ロゴ準拠) |
| `--c-dark-blue-90` | `#2B4A6B` | ホバー時の明度違い |
| `--c-dark-blue-70` | `#4A6B8A` | 装飾用 |
| `--c-orange` (= `--c-ng`) | `#FE5E32` | アクセント(CTA、強調、エラー/NG表示) |
| `--c-orange-soft` | `#FF8866` | オレンジの淡色 |
| `--c-cream` | `#fcfcfc` | sec-base 背景(ほぼ白) |
| `--c-cream-deep` | `#f0f0f0` | sec-alt 背景 |
| `--c-cream-pure` | `#FFF3D6` | ダーク面の文字色(footer/CTA 内) |
| `--c-june` | `#B8CE52` | 補助アクセント(緑) |
| `--c-june-soft` | `#D4E089` | 緑の淡色 |
| `--c-logo-teal` | `#4FA8C2` | ロゴの目玉カラー |
| `--c-ink` | `#0E0A2E` | 本文(濃) |
| `--c-ink-70` | `#4A4664` | 本文(標準) |
| `--c-ink-50` | `#7B768F` | キャプション・補助テキスト |
| `--c-line` | `#e8e8e8` | 罫線 |
| `--c-line-soft` | `#efefef` | カード輪郭 |
| `--c-ok` | `#6FA830` | OK表示 |

### Typography

| Token | Value |
|---|---|
| `--ff-jp` | `'Zen Kaku Gothic New', system-ui, -apple-system, sans-serif` |
| `--ff-en` | `'Inter', system-ui, sans-serif` |

Google Fonts から `Zen Kaku Gothic New (400/500/700/900)` と `Inter (400/500/600/700/800)` を読み込み。

サイズスケール(LP内で実使用しているもの):

- Hero h1: 64px(PC) / 44px(SP) / 36px(narrow)
- 見出し h2: 36px(SectionHead)
- カード見出し h3: 大 24px / 小 19〜20px / Flow ステップ 26px
- 本文 p: 17〜20px / 行間 1.85〜1.9
- キャプション/エイブロー: 11〜13px / letter-spacing 0.14〜0.24em / Inter
- ボタン: 18px(`btn-primary`/`btn-dark`)/ ghost も同
- 数字(`.num`): Inter ボールド + `font-feature-settings: "tnum"`
- 英字(`.en`): Inter / letter-spacing 0.12em

### Spacing / Radius / Shadow

| Token | Value | 用途 |
|---|---|---|
| `--r-sm` | `6px` | 細かな chip など |
| `--r-md` | `12px` | 標準カード |
| `--r-lg` | `20px` | 大カード(Features/Enclosure) |
| `--r-xl` | `28px` | 特大 |
| `--r-pill` | `999px` | ボタン・chip |
| `--sh-card` | `0 2px 0 rgba(32,57,84,0.06), 0 12px 32px -8px rgba(32,57,84,0.12)` | 標準カード(凸影) |
| `--sh-pop` | `0 8px 0 rgba(32,57,84,0.08), 0 24px 48px -12px rgba(32,57,84,0.18)` | 強調カード |

セクション間の縦余白: `padding: 96px 56px` が基本。Hero は `64〜72px 56px`、EventBanner は `64px 56px`。

ボタンの凸影:
- `btn-primary` → `0 4px 0 #C6411E, 0 12px 24px -8px rgba(254,94,50,0.5)`
- `btn-dark` → `0 4px 0 #142538, 0 12px 24px -8px rgba(32,57,84,0.45)`

---

## Responsive Behavior

**現状のプロトタイプはレスポンシブが部分的にしか入っていません。**

- 各セクションは `width: 1280` のインライン style で固定設計
- それを包む `.lp-frame` が `width: 90vw; max-width: 1400px` で、内側を `.lp-frame .mierun { width: 100% !important; max-width: 100% !important; }` で強制 100% にすることで「ビューポート幅に追従して全体縮小」する仕掛け
- HeroC タイトルのみ、tokens.css 内に `@media (max-width: 640px)` / `@media (max-width: 380px)` でフォントサイズと改行制御がある

実装時には:

1. 1280px 想定のグリッドを **lg ブレイクポイント(1024〜1280px)を基準** に組む
2. **md (≤880px)** : Featuresの 2大カード / Benefits / Flow / Enclosure を **1カラム** に
3. **sm (≤640px)**:
   - Hero タイトル → 44px・3行改行
   - DXPO バナーの 3カラム(日付 / 詳細 / CTA)を **縦積み** に
   - Footer 4列 → 2列 → 1列
   - 各セクション padding を `64px 24px` 程度に

ブレイクポイント値は適宜調整して構いません(880 / 640 / 380 はあくまでプロトタイプ準拠)。

---

## Assets

| ファイル | 用途 | 出典 |
|---|---|---|
| `assets/enclosure-line.png` | Enclosure セクション 標準サイズ筐体の線画 | ユーザー提供(2026.06) |

その他のアイコン・装飾は全て **インラインSVG** で実装済み。実装時に lucide-react / heroicons などへ差し替えても問題ありません。
ロゴ(MierunLogo)も SVG なので、確定版ロゴ画像があれば差し替えてください。

---

## Implementation Notes(実装上の注意)

1. **インライン style と CSS の使い分け**
   - 構造的なスタイル(grid template、固定 padding、shadow)は **インライン style** で書いている
   - 共通スタイル(ボタン、chip、eyebrow、フォント、レスポンシブ調整)は **`tokens.css`** に切り出している
   - 本番ではこの構造を保ったまま、styled-components / CSS Modules / Tailwind に翻訳するのが素直

2. **Babel ブラウザトランスパイル → ビルド時トランスパイル**
   - プロトタイプは `<script type="text/babel">` でブラウザ側変換しているが、本番では Vite / Next.js でビルド時に処理してください

3. **`Object.assign(window, {...})` パターン**
   - 各 jsx の末尾で `Object.assign(window, { HeroC, ProblemsA, ... })` しているのはプロトタイプの都合(script タグごとにスコープが分離するので global へ吐く必要があった)。本番では普通に `export` してください

4. **Tweaks 関連を全消去**
   - `tweaks_panel.jsx` ファイル
   - `mierun LP Stitched.html` の `<TweaksPanel>` JSX とその下のサジェスト
   - `useTweaks` / `TWEAK_DEFAULTS` / `shade()` / `alpha()` ヘルパー
   - これらは全て不要。残すと開発専用の編集UIがエンドユーザーに見えてしまう

5. **キャッシュバスター**
   - HTML 内 `sections/Features.jsx?v=4` のようなクエリ付きsrcはプロトタイプ更新時のキャッシュ回避用。本番のバンドラなら不要

6. **`width: 100% !important`**
   - `.lp-frame > div` と `.lp-frame .mierun` に強制 100% を当てているのは、各セクションが `width: 1280` というインライン style を持っているため。本番ではセクションの固定幅自体を撤去するのが望ましい

---

## Open Questions(開発側で確認したいこと)

- DXPO バナーの **来場登録 URL** 確定値
- 問い合わせフォーム(CtaB)の **送信先**(自社API / formspree / HubSpot / Salesforce 等)
- **メタタグ** / OGP 画像 / favicon の正式な素材
- 多言語対応の予定(現状日本語のみ)
- アクセシビリティ要件のレベル感(現状 alt は最小限。WCAG AA を目指すなら追加対応必要)

---

何か不明点や、現物の挙動を確認したい箇所があればこのプロトタイプの該当セクション(`mierun LP Stitched.html` を開く)を直接見るのが一番早いです。
