// =============================================================
// 製造イノベーションDXPO 出展告知バナー
// オレンジ背景 + 中央白カード。Hero直下に置いて目立たせる。
// =============================================================
function EventBannerDxpo() {
  return (
    <div className="mierun" style={{
      width: 1280,
      background: '#FE5E32',
      padding: '64px 56px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* 背景装飾: 斜めストライプ + ドット */}
      <svg
        aria-hidden
        width="100%" height="100%"
        style={{ position: 'absolute', inset: 0, opacity: 0.18, pointerEvents: 'none' }}
      >
        <defs>
          <pattern id="dxpo-stripe" width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="11" height="22" fill="#fff" opacity="0.35" />
          </pattern>
          <pattern id="dxpo-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="14" cy="14" r="1.6" fill="#fff" />
          </pattern>
        </defs>
        {/* 左上の斜めストライプ */}
        <rect x="-40" y="-40" width="320" height="320" fill="url(#dxpo-stripe)" />
        {/* 右下のドット */}
        <rect x="60%" y="40%" width="50%" height="80%" fill="url(#dxpo-dots)" />
      </svg>

      {/* 見出し帯(オレンジ部分の上部) */}
      <div className="event-banner__head" style={{
        position: 'relative',
        display: 'flex', alignItems: 'center', gap: 14,
        marginBottom: 28,
        color: '#fff',
      }}>
        <span className="event-banner__pill" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '8px 16px',
          background: '#0E0A2E',
          color: '#FFF3D6',
          borderRadius: 999,
          fontSize: 14, fontWeight: 800,
          letterSpacing: '0.14em',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#B8CE52' }} />
          EXHIBITION
        </span>
        <span className="event-banner__title-wrap" style={{ display: 'inline-flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
          <span className="event-banner__title" style={{ fontSize: 26, fontWeight: 800, letterSpacing: '0.02em', lineHeight: 1.2 }}>
            デモ体験できます!
          </span>
          <span className="event-banner__sub" style={{ fontSize: 16, fontWeight: 600, opacity: 0.9, letterSpacing: '0.04em' }}>
            MIERUN 実機デモ、東京ビッグサイトで
          </span>
        </span>
      </div>

      {/* 白カード本体 */}
      <a
        href="https://dxpo.jp/real/box/tokyo/manufacturing/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'relative',
          display: 'block',
          background: '#fff',
          borderRadius: 24,
          padding: '36px 44px',
          boxShadow: '0 24px 56px -16px rgba(14,10,46,0.35), 0 0 0 1px rgba(14,10,46,0.06)',
          textDecoration: 'none',
          color: 'inherit',
          transition: 'transform 0.18s ease, box-shadow 0.18s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 32px 72px -16px rgba(14,10,46,0.45), 0 0 0 1px rgba(14,10,46,0.08)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 24px 56px -16px rgba(14,10,46,0.35), 0 0 0 1px rgba(14,10,46,0.06)';
        }}
      >
        {/* 上段: 日付 (左, 幅圧縮) + イベント詳細 (右) の2列 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '230px 1fr',
          gap: 36,
          alignItems: 'start',
        }}>
          {/* 左: ビッグ日付ブロック (コンパクト版) */}
          <div style={{ borderRight: '1px solid #efefef', paddingRight: 28 }}>
            <div className="en" style={{ fontSize: 12, color: '#FE5E32', letterSpacing: '0.18em', fontWeight: 800, marginBottom: 8 }}>
              2026 SUMMER
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 3, fontFamily: 'Inter, sans-serif', color: '#203954' }}>
              <span style={{ fontSize: 44, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em' }}>8</span>
              <span style={{ fontSize: 22, fontWeight: 700, lineHeight: 1 }}>/</span>
              <span style={{ fontSize: 44, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em' }}>18</span>
              <span style={{ fontSize: 16, fontWeight: 700, marginLeft: 4, color: '#7B768F' }}>Tue</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 3, fontFamily: 'Inter, sans-serif', color: '#203954', marginTop: 2 }}>
              <span style={{ fontSize: 22, fontWeight: 700, lineHeight: 1, color: '#7B768F' }}>—</span>
              <span style={{ fontSize: 44, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em' }}>8</span>
              <span style={{ fontSize: 22, fontWeight: 700, lineHeight: 1 }}>/</span>
              <span style={{ fontSize: 44, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.03em' }}>19</span>
              <span style={{ fontSize: 16, fontWeight: 700, marginLeft: 4, color: '#7B768F' }}>Wed</span>
            </div>
          </div>

          {/* 右: イベント詳細 */}
          <div>
            <div className="en" style={{ fontSize: 13, color: '#7B768F', letterSpacing: '0.16em', fontWeight: 700, marginBottom: 8 }}>
              DXPO TOKYO '26 SUMMER
            </div>
            <h3 style={{ fontSize: 26, fontWeight: 800, color: '#203954', lineHeight: 1.3, marginBottom: 18 }}>
              製造イノベーションDXPO<span style={{ fontSize: 17, fontWeight: 700, color: '#4A4664' }}> に出展します。</span>
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, color: '#4A4664' }}>
              <div style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
                <span style={{
                  width: 60, flexShrink: 0,
                  fontSize: 12, fontWeight: 800, color: '#FE5E32',
                  letterSpacing: '0.14em',
                  fontFamily: 'Inter, sans-serif',
                }}>PLACE</span>
                <span style={{ fontWeight: 700, color: '#0E0A2E', fontSize: 17 }}>
                  東京ビッグサイト 西1・2・3ホール
                </span>
              </div>
              <div style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
                <span style={{
                  width: 60, flexShrink: 0,
                  fontSize: 12, fontWeight: 800, color: '#FE5E32',
                  letterSpacing: '0.14em',
                  fontFamily: 'Inter, sans-serif',
                }}>HOURS</span>
                <span style={{ color: '#0E0A2E', fontWeight: 600, fontSize: 16 }}>
                  8/18(火) 9:30 – 17:30 / 8/19(水) 9:30 – 16:30
                </span>
              </div>
              <div style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
                <span style={{
                  width: 60, flexShrink: 0,
                  fontSize: 12, fontWeight: 800, color: '#FE5E32',
                  letterSpacing: '0.14em',
                  fontFamily: 'Inter, sans-serif',
                }}>DEMO</span>
                <span style={{ color: '#0E0A2E', fontWeight: 600, fontSize: 16 }}>
                  実機による「間違い探し方式」検査をその場で体験できます
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 下段: 横長 CTA ボタン */}
        <div className="event-banner__cta-wrap" style={{
          marginTop: 28,
          paddingTop: 24,
          borderTop: '1px dashed #efefef',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <div className="event-banner__cta" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            padding: '16px 32px',
            background: '#FE5E32',
            color: '#fff',
            borderRadius: 12,
            fontSize: 17,
            fontWeight: 800,
            letterSpacing: '0.04em',
            boxShadow: '0 4px 0 #C6411E, 0 12px 24px -8px rgba(254,94,50,0.5)',
          }}>
            <span>公式サイトで来場登録する</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H9M17 7v8" />
            </svg>
          </div>
        </div>
      </a>

      {/* カウントダウン or 補足(オレンジ部分の下) */}
      <div className="event-banner__note" style={{
        position: 'relative',
        marginTop: 24,
        display: 'flex', justifyContent: 'flex-start', alignItems: 'center',
        color: '#fff', fontSize: 18, opacity: 0.95,
      }}>
        <span className="event-banner__note-inner" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <svg className="event-banner__note-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
          <span className="event-banner__note-text">
            <strong style={{ fontSize: 19 }}>事前来場登録</strong>で当日スムーズに入場 (有人受付は5,000円)
          </span>
        </span>
      </div>
    </div>
  );
}

Object.assign(window, { EventBannerDxpo });
