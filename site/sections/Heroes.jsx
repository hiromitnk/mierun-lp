// ========== HERO 案A: 王道(左:コピー / 右:検査画面) ==========
function HeroA() {
  return (
    <div className="mierun" style={{ width: 1280, minHeight: 720 }}>
      <SiteHeader />
      <section style={{ padding: '72px 56px 96px', position: 'relative', overflow: 'hidden' }}>
        {/* 背景のうっすらしたグリッド */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(32,57,84,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(32,57,84,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at 70% 50%, #000 30%, transparent 75%)',
        }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 56, alignItems: 'center', position: 'relative' }}>
          <div>
            <div className="chip" style={{ background: '#FFF', color: '#203954' }}>
              <span style={{ width: 6, height: 6, background: '#FE5E32', borderRadius: '50%' }} />
              板金加工業向け / AI外観検査
            </div>
            <h1 style={{
              fontSize: 60,
              lineHeight: 1.18,
              marginTop: 24,
              fontWeight: 800,
              color: '#203954',
              letterSpacing: '0.01em',
            }}>
              目視検査の<br/>
              <span style={{ position: 'relative', display: 'inline-block' }}>
                「見逃し」と「ムラ」
                <span style={{
                  position: 'absolute', left: 0, right: 0, bottom: 6, height: 14,
                  background: '#FE5E32', opacity: 0.25, zIndex: -1,
                }} />
              </span>
              を、<br/>仕組みで無くす。
            </h1>
            <p style={{ marginTop: 28, fontSize: 18, color: '#4A4664', maxWidth: 520, lineHeight: 1.85 }}>
              良品サンプル<strong style={{ color: '#203954' }}>たった1枚</strong>から始まる、
              現場のためのAI外観検査ソリューション。治具も大量学習も、専門知識もいりません。
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 36, alignItems: 'flex-start', maxWidth: 320 }}>
              <button className="btn-primary" style={{ width: '100%' }}>無料デモを予約する →</button>
              <button className="btn-ghost" style={{ width: '100%' }}>資料をダウンロード</button>
            </div>
            <div style={{ display: 'flex', gap: 32, marginTop: 40, alignItems: 'center' }}>
              {[
                { num: '1枚', label: 'の良品画像で開始' },
                { num: '30分', label: 'の研修で運用可能' },
                { num: '2週', label: '間で導入完了' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="num" style={{ fontSize: 28, fontWeight: 800, color: '#203954', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: 16, color: '#7B768F', marginTop: 6 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            {/* メインの検査プレビュー */}
            <div style={{
              background: '#fff',
              borderRadius: 20,
              padding: 18,
              boxShadow: '0 30px 60px -20px rgba(32,57,84,0.25), 0 2px 0 rgba(32,57,84,0.05)',
              transform: 'rotate(-1.5deg)',
            }}>
              <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#e8e8e8' }} />
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#e8e8e8' }} />
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#e8e8e8' }} />
                <span className="en" style={{ marginLeft: 8, fontSize: 12, color: '#7B768F', letterSpacing: '0.1em' }}>MIERUN INSPECTION</span>
              </div>
              <InspectionPreview width={460} height={300} status="ng" label="A001" />
            </div>
            {/* オレンジの注釈フローティング */}
            <div style={{
              position: 'absolute', top: -20, right: -20,
              background: '#FE5E32',
              color: '#fff',
              padding: '14px 18px',
              borderRadius: 16,
              boxShadow: '0 12px 28px -8px rgba(254,94,50,0.5)',
              maxWidth: 200,
              transform: 'rotate(3deg)',
            }}>
              <div className="en" style={{ fontSize: 12, opacity: 0.8, letterSpacing: '0.12em' }}>POINT</div>
              <div style={{ fontSize: 17, fontWeight: 700, marginTop: 4, lineHeight: 1.4 }}>
                NG箇所を<br/>赤枠で<br/>その場で表示
              </div>
            </div>
            {/* June Bud(緑)の補助カード */}
            <div style={{
              position: 'absolute', bottom: -28, left: -20,
              background: '#B8CE52',
              color: '#0E0A2E',
              padding: '14px 18px',
              borderRadius: 16,
              boxShadow: '0 12px 28px -8px rgba(184,206,82,0.5)',
              transform: 'rotate(-2deg)',
            }}>
              <div className="en" style={{ fontSize: 12, opacity: 0.6, letterSpacing: '0.12em' }}>UPLOAD</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginTop: 4 }}>
                良品画像 1枚だけ
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ========== HERO 案B: 分割型(左:大文字インパクト / 右:Dark Blue面 + ビジュアル) ==========
function HeroB() {
  return (
    <div className="mierun" style={{ width: 1280, minHeight: 720 }}>
      <SiteHeader />
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 640 }}>
        <div style={{ padding: '80px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="eyebrow">AI VISUAL INSPECTION</div>
          <h1 style={{
            fontSize: 88,
            lineHeight: 1.04,
            marginTop: 20,
            fontWeight: 800,
            color: '#203954',
            letterSpacing: '-0.01em',
          }}>
            見るを、<br/>
            <span style={{ color: '#FE5E32' }}>仕組み</span>に。
          </h1>
          <p style={{ marginTop: 28, fontSize: 17, color: '#4A4664', maxWidth: 480, lineHeight: 1.9 }}>
            板金加工の出荷検査を、属人化から仕組み化へ。良品1枚で始まる、
            次世代のAI外観検査ソリューション。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 40, alignItems: 'flex-start', maxWidth: 300 }}>
            <button className="btn-primary" style={{ width: '100%' }}>無料デモを予約 →</button>
            <button className="btn-ghost" style={{ width: '100%' }}>資料DL</button>
          </div>
          <div style={{ marginTop: 56, paddingTop: 28, borderTop: '1px solid #e8e8e8' }}>
            <div style={{ fontSize: 16, color: '#7B768F', marginBottom: 12, letterSpacing: '0.08em' }}>
              ── 製造イノベーション DXPO 東京 '26 夏 出展
            </div>
            <div style={{ display: 'flex', gap: 16, fontSize: 16, color: '#0E0A2E', fontWeight: 600 }}>
              <span>2026.8.18 - 19</span>
              <span style={{ opacity: 0.4 }}>|</span>
              <span>東京ビッグサイト 西1・2・3ホール</span>
            </div>
          </div>
        </div>
        <div style={{
          background: '#203954',
          padding: '80px 56px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          {/* 装飾的なグリッドBG */}
          <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.15 }}>
            <defs>
              <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="12" cy="12" r="1.2" fill="#FFF3D6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
          <div style={{ position: 'relative', width: '100%' }}>
            <div style={{ background: '#fff', borderRadius: 16, padding: 14, boxShadow: '0 24px 56px -12px rgba(0,0,0,0.4)' }}>
              <InspectionPreview width="100%" height={320} status="ng" label="B042" />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, alignItems: 'center' }}>
                <div>
                  <div className="num" style={{ fontSize: 18, fontWeight: 700, color: '#203954' }}>2 defects found</div>
                  <div style={{ fontSize: 16, color: '#7B768F' }}>分析時間 0.42s</div>
                </div>
                <button style={{ background: '#203954', color: '#fff', padding: '8px 16px', borderRadius: 999, fontSize: 16, fontWeight: 600 }}>レポート出力</button>
              </div>
            </div>
            <div style={{ marginTop: 24, color: '#FFF3D6', display: 'flex', gap: 24 }}>
              {[
                ['1枚', 'で開始'],
                ['30分', 'で運用'],
                ['2週間', 'で導入'],
              ].map(([n, l], i) => (
                <div key={i} style={{ flex: 1, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                  <div className="num" style={{ fontSize: 32, fontWeight: 800 }}>{n}</div>
                  <div style={{ fontSize: 16, opacity: 0.7, marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ========== HERO 案C: 「間違い探し」メタファー(Before/Afterサイドバイサイド) ==========
// NOTE: SiteHeader は Stitched の .lp-frame 直下に別途配置(sticky固定のため)
function HeroC() {
  return (
    <div className="mierun" style={{ width: 1280, minHeight: 720 }}>
      <section style={{ padding: '64px 56px 80px', textAlign: 'center' }}>
        <div className="chip" style={{ background: '#FFF', color: '#203954', fontSize: 16, padding: '10px 20px' }}>
          <span style={{ width: 8, height: 8, background: '#B8CE52', borderRadius: '50%' }} />
          板金加工業のための AI外観検査
        </div>
        <h1 className="hero-c-title" style={{
          fontSize: 64,
          lineHeight: 1.18,
          marginTop: 24,
          fontWeight: 800,
          color: '#203954',
          margin: '24px auto 0',
          overflowWrap: 'break-word',
          wordBreak: 'keep-all',
        }}>
          AIの目で<span className="hero-c-comma">、</span><br className="hero-c-br" /><span className="hero-c-accent" style={{ color: '#FE5E32', position: 'relative', display: 'inline-block' }}>
            簡単に、<br className="hero-c-br" />しっかり<svg className="hero-c-underline" width="100%" height="14" viewBox="0 0 320 14" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, right: 0, bottom: -10 }}>
              <path d="M2 7 Q 80 1, 160 7 T 318 7" fill="none" stroke="#FE5E32" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>検品。
        </h1>
        <p style={{ marginTop: 36, fontSize: 22, color: '#4A4664', maxWidth: 680, margin: '36px auto 0', lineHeight: 1.85 }}>
          良品サンプルと比較する<strong>「間違い探し方式」</strong>。<br/>
          だから、設定は良品1枚だけでOK。
        </p>

        {/* Before/After 間違い探しビジュアル */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 24, marginTop: 56, alignItems: 'center', maxWidth: 1080, margin: '56px auto 0' }}>
          <div>
            <div className="en" style={{ fontSize: 16, color: '#7B768F', letterSpacing: '0.16em', marginBottom: 12, textAlign: 'left' }}>
              REFERENCE — 良品サンプル
            </div>
            <div style={{ background: '#fff', borderRadius: 16, padding: 14, boxShadow: '0 12px 32px -12px rgba(32,57,84,0.18)' }}>
              <InspectionPreview width="100%" height={240} status="ok" label="REF" />
            </div>
          </div>
          <div className="compare-badge" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
            <div className="compare-badge__circle" style={{
              width: 56, height: 56, borderRadius: '50%',
              background: '#FE5E32',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 0 #C6411E, 0 12px 24px -8px rgba(254,94,50,0.5)',
            }}>
              <svg className="compare-badge__arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <div className="en" style={{ fontSize: 12, fontWeight: 700, color: '#FE5E32', letterSpacing: '0.14em' }}>COMPARE</div>
          </div>
          <div>
            <div className="en" style={{ fontSize: 16, color: '#7B768F', letterSpacing: '0.16em', marginBottom: 12, textAlign: 'left' }}>
              TARGET — 検査対象
            </div>
            <div style={{ background: '#fff', borderRadius: 16, padding: 14, boxShadow: '0 12px 32px -12px rgba(32,57,84,0.18)' }}>
              <InspectionPreview width="100%" height={240} status="ng" label="TGT" />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 56, justifyContent: 'center', alignItems: 'center', maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
          <button className="btn-primary" style={{ width: '100%' }}>無料デモを予約する →</button>
          <button className="btn-dark" style={{ width: '100%' }}>資料をダウンロード</button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { HeroA, HeroB, HeroC });
