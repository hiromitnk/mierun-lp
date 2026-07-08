// ========== 課題提起 案A: 吹き出しカード型(現場の声を主役に) ==========
function ProblemsA() {
  const issues = [
    {
      no: '01',
      voice: '担当者が変わるたびに合否基準がブレる。同じ部品でも、人によって判定が違う。',
      role: '製造部 検査リーダー / 50代',
    },
    {
      no: '02',
      voice: 'NG品が客先に流出してしまった。でも、検査の工数も増やせない。',
      role: '品質管理部 課長 / 40代',
    },
    {
      no: '03',
      voice: '熟練の職人には、本当は製造に専念してほしい。でも検査を新人に任せると、見落としが心配で…',
      role: '工場長 / 60代',
    },
  ];
  return (
    <div className="mierun" style={{ width: 1280, padding: '96px 56px', background: '#f0f0f0' }}>
      <SectionHead
        eyebrow="VOICES FROM THE FIELD"
        title="こんな現場のお悩み、ありませんか?"
        sub="多品種・小ロットの板金加工。日々の検査現場では、こんな声が聞こえてきます。"
        align="center"
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 56 }}>
        {issues.map(it => (
          <div key={it.no} style={{
            background: '#fff',
            borderRadius: 20,
            padding: '32px 28px',
            position: 'relative',
            boxShadow: '0 2px 0 rgba(32,57,84,0.06), 0 12px 32px -8px rgba(32,57,84,0.1)',
          }}>
            {/* 吹き出しの尻尾 */}
            <div style={{
              position: 'absolute', bottom: -12, left: 36,
              width: 0, height: 0,
              borderLeft: '14px solid transparent',
              borderRight: '14px solid transparent',
              borderTop: '14px solid #fff',
            }} />
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '4px 10px',
              background: '#203954',
              color: '#fff',
              borderRadius: 999,
              marginBottom: 18,
            }}>
              <span className="en" style={{ fontSize: 12, opacity: 0.6, letterSpacing: '0.14em' }}>VOICE</span>
              <span className="num" style={{ fontSize: 16, fontWeight: 700 }}>{it.no}</span>
            </div>
            <p style={{ fontSize: 18, lineHeight: 1.75, color: '#0E0A2E', fontWeight: 600, letterSpacing: '0.02em' }}>
              「{it.voice}」
            </p>
            <div style={{ marginTop: 22, paddingTop: 18, borderTop: '1px dashed #e8e8e8', fontSize: 16, color: '#7B768F' }}>
              {it.role}
            </div>
          </div>
        ))}
      </div>
      <div className="problems-cta-bar" style={{
        marginTop: 56,
        padding: '28px 36px',
        background: '#203954',
        color: '#FFF3D6',
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ fontSize: 22, fontWeight: 700 }}>
          1つでも当てはまるなら、<span style={{ color: '#FE5E32' }}>ミエルン</span>が解決します。
        </div>
        <button className="btn-primary">無料デモで確かめる →</button>
      </div>
    </div>
  );
}

// ========== 課題提起 案B: 対比型(目視 vs ミエルン)+ 経営インパクト数字 ==========
function ProblemsB() {
  return (
    <div className="mierun" style={{ width: 1280, padding: '96px 56px', background: '#f0f0f0' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
        <div>
          <SectionHead
            eyebrow="CURRENT CHALLENGES"
            title={<>目視検査に頼る現場の、<br/>3つの限界。</>}
          />
          <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              {
                icon: '👁',
                title: '検査品質の属人化',
                desc: '熟練者の「目」と「経験」に依存。担当者による判定のバラつきが、クレームリスクに直結します。',
              },
              {
                icon: '📉',
                title: 'NG傾向の不可視化',
                desc: '「なぜNGか」が記録されず、同じ傾向の不良が再発。改善のPDCAが回りません。',
              },
              {
                icon: '⚖',
                title: '工数増加とコストの壁',
                desc: '多品種化で検査負荷が激増。精度を上げれば工数が増える、という構造的ジレンマ。',
              },
            ].map((it, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: 20,
                padding: '24px 24px',
                background: '#fff',
                borderRadius: 16,
                border: '1px solid #e8e8e8',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: '#f0f0f0',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22,
                  flexShrink: 0,
                }}>{it.icon}</div>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: '#203954' }}>{it.title}</div>
                  <p style={{ marginTop: 8, fontSize: 17, color: '#4A4664', lineHeight: 1.8 }}>{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{
          background: '#203954',
          color: '#FFF3D6',
          borderRadius: 24,
          padding: '40px 36px',
          position: 'sticky',
          top: 40,
        }}>
          <div className="eyebrow" style={{ color: '#FE5E32' }}>BUSINESS IMPACT</div>
          <h3 style={{ fontSize: 28, marginTop: 12, lineHeight: 1.45, color: '#FFF3D6' }}>
            放っておくと、<br/>経営に効く損失に。
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 32 }}>
            <div style={{ padding: '24px 20px', background: 'rgba(255,255,255,0.06)', borderRadius: 14 }}>
              <div style={{ fontSize: 16, opacity: 0.7 }}>不良見逃し率</div>
              <div style={{ marginTop: 8 }}>
                <span className="num" style={{ fontSize: 44, fontWeight: 800, color: '#FE5E32' }}>2-5</span>
                <span style={{ fontSize: 18, fontWeight: 600, marginLeft: 4 }}>%</span>
              </div>
            </div>
            <div style={{ padding: '24px 20px', background: 'rgba(255,255,255,0.06)', borderRadius: 14 }}>
              <div style={{ fontSize: 16, opacity: 0.7 }}>月間想定損失</div>
              <div style={{ marginTop: 8 }}>
                <span className="num" style={{ fontSize: 44, fontWeight: 800, color: '#FE5E32' }}>100-200</span>
                <span style={{ fontSize: 17, fontWeight: 600, marginLeft: 4 }}>万円</span>
              </div>
            </div>
          </div>
          <p style={{ marginTop: 28, fontSize: 16, lineHeight: 1.85, opacity: 0.8 }}>
            再製作コスト、クレーム対応工数、そして何より顧客からの信頼損失が、
            最大の経営リスクとなっています。
          </p>
          <button className="btn-primary" style={{ marginTop: 28, width: '100%', justifyContent: 'center' }}>
            解決策を見る →
          </button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ProblemsA, ProblemsB });
