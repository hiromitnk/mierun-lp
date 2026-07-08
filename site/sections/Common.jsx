// 共通の小物コンポーネント群
const { useState } = React;

// 公式ロゴ(PNG差し替え済み・四角マーク無しの正式版)
// size は SVG時代の互換性のため受けているが、実質「基準サイズ」として扱う。
// 実効表示高さは size × 1.7 px (旧 1.3 倍 → さらに 30% 拡大)。
// アスペクト比 1024:346 ≈ 2.96:1 は img が自動で維持。
// mono=true のときはフッター等の暗背景用に白抜き反転する。
function MierunLogo({ size = 28, mono = false }) {
  const height = size * 1.7;
  return (
    <img
      src="assets/mierun-logo.png?v=2"
      alt="mierun / ミエルン"
      style={{
        height,
        width: 'auto',
        display: 'inline-block',
        verticalAlign: 'middle',
        filter: mono ? 'brightness(0) invert(1)' : 'none',
      }}
    />
  );
}

// 検査画面のプレビュー(BBOX付き)
function InspectionPreview({ width = 360, height = 240, status = 'ng', label = 'NG-001' }) {
  const isNg = status === 'ng';
  return (
    <div style={{
      width, height,
      background: '#1A1530',
      borderRadius: 12,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
    }}>
      {/* ワーク(板金部品)を簡易描画 */}
      <svg width="100%" height="100%" viewBox="0 0 360 240" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id={`metal-${label}`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#8a8fa8" />
            <stop offset="0.5" stopColor="#c4c8d8" />
            <stop offset="1" stopColor="#6a6f88" />
          </linearGradient>
          <pattern id={`grid-${label}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="360" height="240" fill={`url(#grid-${label})`} />
        {/* 板金パーツ */}
        <g transform="translate(60 50)">
          <rect x="0" y="0" width="240" height="140" rx="6" fill={`url(#metal-${label})`} />
          <circle cx="30" cy="30" r="10" fill="#3a3f55" />
          <circle cx="210" cy="30" r="10" fill="#3a3f55" />
          <circle cx="30" cy="110" r="10" fill="#3a3f55" />
          <circle cx="210" cy="110" r="10" fill="#3a3f55" />
          <rect x="80" y="50" width="80" height="40" rx="4" fill="#3a3f55" opacity="0.6" />
          {/* 不良箇所(ぽつっと) */}
          {isNg && <circle cx="178" cy="78" r="4" fill="#FE5E32" />}
          {isNg && <circle cx="55" cy="92" r="3" fill="#FE5E32" />}
        </g>
        {/* BBOXオーバーレイ */}
        {isNg && (
          <>
            <g>
              <rect x="225" y="115" width="32" height="32" fill="none" stroke="#FE5E32" strokeWidth="2.5" />
              <rect x="225" y="100" width="56" height="14" fill="#FE5E32" />
              <text x="228" y="111" fontSize="10" fill="#fff" fontFamily="Inter" fontWeight="700">SCRATCH</text>
            </g>
            <g>
              <rect x="105" y="130" width="26" height="26" fill="none" stroke="#FE5E32" strokeWidth="2.5" />
              <rect x="105" y="115" width="44" height="14" fill="#FE5E32" />
              <text x="108" y="126" fontSize="10" fill="#fff" fontFamily="Inter" fontWeight="700">DENT</text>
            </g>
          </>
        )}
      </svg>
      {/* ステータスバッジ */}
      <div className="inspection-preview__badge" style={{
        position: 'absolute', top: 12, left: 12,
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '5px 12px',
        background: isNg ? '#FE5E32' : '#6FA830',
        color: '#fff',
        borderRadius: 999,
        fontSize: 16,
        fontWeight: 700,
        letterSpacing: '0.08em',
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />
        {isNg ? 'NG DETECTED' : 'OK'}
      </div>
      {/* 品番 */}
      <div className="inspection-preview__part" style={{
        position: 'absolute', bottom: 12, left: 12,
        fontFamily: 'Inter, sans-serif',
        fontSize: 12,
        color: 'rgba(255,255,255,0.6)',
        letterSpacing: '0.1em',
      }}>
        部品No. SM-{label} / 12:34:56
      </div>
    </div>
  );
}

// セクション見出し(英eyebrow + 日本語タイトル)
function SectionHead({ eyebrow, title, sub, align = 'left', dark = false }) {
  return (
    <div style={{ textAlign: align, color: dark ? '#FFF3D6' : '#0E0A2E' }}>
      <div className="eyebrow" style={{ color: dark ? '#FE5E32' : '#FE5E32' }}>{eyebrow}</div>
      <h2 style={{
        fontSize: 36,
        marginTop: 12,
        fontWeight: 800,
        lineHeight: 1.35,
        color: dark ? '#FFF3D6' : '#203954',
      }}>{title}</h2>
      {sub && <p style={{
        marginTop: 18,
        fontSize: 20,
        lineHeight: 1.85,
        color: dark ? 'rgba(255,255,255,0.7)' : '#4A4664',
        maxWidth: align === 'center' ? 880 : 720,
        marginLeft: align === 'center' ? 'auto' : 0,
        marginRight: align === 'center' ? 'auto' : 0,
      }}>{sub}</p>}
    </div>
  );
}

// ヘッダー(全案共通の上部ナビ)
// PC: ロゴ + ナビ4項目 + CTA
// SP (767px以下): ロゴ + CTAのみ
// 常時 sticky (LP最上部に固定表示)
function SiteHeader({ dark = false }) {
  return (
    <header className={`mierun site-header ${dark ? 'site-header--dark' : ''}`}>
      <a href="#top" className="site-header__logo" style={{ textDecoration: 'none' }}>
        <MierunLogo size={26} mono={false} />
      </a>
      <nav className="site-header__nav">
        {[
          { label: '特徴', href: '#features' },
          { label: '導入フロー', href: '#flow' },
          { label: '料金', href: '#contact' },
          { label: 'よくある質問', href: '#faq' },
        ].map(item => (
          <a key={item.label} href={item.href} className="site-header__link">{item.label}</a>
        ))}
        <a href="#contact" className="btn-primary site-header__cta">
          無料デモを予約
        </a>
      </nav>
    </header>
  );
}

// フッター
function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <a href="#top" style={{ textDecoration: 'none', color: 'inherit' }}><MierunLogo size={28} mono /></a>
          <p className="site-footer__tagline">
            良品サンプル1枚から始める<br/>AI外観検査ソリューション
          </p>
        </div>
        <div className="site-footer__cols">
          {[
            { title: 'Product', items: [
              { label: '特徴', href: '#features' },
              { label: '導入フロー', href: '#flow' },
              { label: '料金プラン', href: '#contact' },
              { label: '比較表', href: '#benefits' },
            ]},
            { title: 'Support', items: [
              { label: 'よくある質問', href: '#faq' },
              { label: 'お問い合わせ', href: '#contact' },
              { label: '資料ダウンロード', href: '#contact' },
              { label: 'デモ予約', href: '#contact' },
            ]},
            { title: 'Company', items: [
              { label: 'ウィルグループ', href: '#' },
              { label: 'プライバシー', href: '#' },
              { label: '特定商取引法', href: '#' },
            ]},
          ].map(col => (
            <div key={col.title} className="site-footer__col">
              <div className="en site-footer__col-title">{col.title.toUpperCase()}</div>
              {col.items.map(it => (
                <a
                  key={it.label}
                  href={it.href}
                  className="footer-link site-footer__link"
                >{it.label}</a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="site-footer__bottom">
        <span className="en">© 2026 Will Group Co., Ltd. All Rights Reserved.</span>
        <span>mierun.jp</span>
      </div>
    </footer>
  );
}

Object.assign(window, { MierunLogo, InspectionPreview, SectionHead, SiteHeader, SiteFooter });
