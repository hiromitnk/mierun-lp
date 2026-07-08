// ========== フロー 案A: 横ステップ(4ステップ) ==========
function FlowA() {
  const steps = [
    { n: '01', title: '専用筐体をラインに設置', desc: 'カメラ・照明・設置台が一体になった専用筐体を置くだけ。撮影環境は筐体が自動で固定。' },
    { n: '02', title: '良品画像を1枚登録', desc: '出荷OK品を1枚撮影して登録。AIが良品の基準を自動で学習。治具・教師データは一切不要。' },
    { n: '03', title: '1クリックで検査スタート', desc: '品番を選択してワークを置き、1クリックで検査完了。NG箇所は赤枠付きで即表示。' },
    { n: '04', title: '結果を自動保存・レポート', desc: '品番・ロット別に自動保存。週次でNG傾向を自動レポート出力。' },
  ];
  return (
    <div className="mierun" style={{ width: 1280, padding: '96px 56px', background: '#fcfcfc' }}>
      <SectionHead
        eyebrow="WORKFLOW"
        title={<>現場担当者が、<br/>30分の研修だけで運用できる。</>}
      />
      <div style={{ marginTop: 64, position: 'relative' }}>
        {/* つながる線 */}
        <div style={{
          position: 'absolute', top: 40, left: '8%', right: '8%', height: 2,
          background: 'repeating-linear-gradient(90deg, #B8CE52 0 8px, transparent 8px 16px)',
        }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative' }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{ background: '#fff', borderRadius: 20, padding: '32px 24px 28px', position: 'relative', boxShadow: '0 2px 0 rgba(32,57,84,0.06), 0 12px 28px -10px rgba(32,57,84,0.12)' }}>
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                background: i === 0 ? '#FE5E32' : '#203954',
                color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28, fontWeight: 800, fontFamily: 'Inter',
                margin: '-72px auto 24px',
                boxShadow: i === 0 ? '0 6px 0 #C6411E' : '0 6px 0 #0E0064',
              }}>
                {s.n}
              </div>
              <h3 style={{ fontSize: 18, color: '#203954', textAlign: 'center', minHeight: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {s.title}
              </h3>
              <p style={{ marginTop: 14, fontSize: 16, color: '#4A4664', lineHeight: 1.8, textAlign: 'center' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 48, textAlign: 'center' }}>
        <div className="chip" style={{ background: '#B8CE52', color: '#0E0A2E', border: 'none', fontSize: 16, padding: '8px 18px' }}>
          ⚡ ステップ1から検査開始まで、最短30分
        </div>
      </div>
    </div>
  );
}

// ========== フロー 案B: 縦タイムライン(画面プレビュー付き) ==========
function FlowB() {
  const steps = [
    { n: '01', title: '専用筐体を設置', desc: 'カメラ・照明・設置台が一体。電源を入れるだけで撮影環境が完成。', tag: 'ハードウェア' },
    { n: '02', title: '良品画像を1枚アップロード', desc: '管理画面から出荷OK品の写真を1枚アップロード。AIが基準を自動学習。', tag: 'セットアップ' },
    { n: '03', title: '品番を選んで検査', desc: '品番選択 → ワークを置く → 1クリック。NG箇所が赤枠で表示されます。', tag: '日々の運用' },
    { n: '04', title: 'レポートで傾向を把握', desc: '品番・ロット別に結果が自動保存。週次でNG傾向レポートが届きます。', tag: '振り返り' },
  ];
  return (
    <div className="mierun" style={{ width: 1280, padding: '96px 56px', background: '#fcfcfc' }}>
      <SectionHead
        align="center"
        eyebrow="WORKFLOW"
        title={<>導入から日々の運用まで、<br/>4ステップで完結。</>}
      />
      <div style={{ marginTop: 64, position: 'relative', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div style={{ position: 'absolute', left: 40, top: 40, bottom: 40, width: 2, background: '#e8e8e8' }} />
        {steps.map((s, i) => (
          <div key={s.n} className="flow-step" style={{ display: 'grid', gridTemplateColumns: '80px 1fr 360px', gap: 32, alignItems: 'center', position: 'relative' }}>
            <div className="flow-step__num" style={{
              width: 80, height: 80, borderRadius: '50%',
              background: '#203954',
              color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 26, fontWeight: 800, fontFamily: 'Inter',
              position: 'relative', zIndex: 1,
              boxShadow: '0 0 0 8px #fcfcfc',
            }}>
              {s.n}
            </div>
            <div className="flow-step__body">
              <div className="chip" style={{ background: '#f0f0f0', borderColor: '#e8e8e8', color: '#FE5E32', fontSize: 16 }}>{s.tag}</div>
              <h3 style={{ fontSize: 26, color: '#203954', marginTop: 12 }}>{s.title}</h3>
              <p style={{ marginTop: 12, fontSize: 19, color: '#4A4664', lineHeight: 1.85 }}>{s.desc}</p>
            </div>
            <div style={{ background: '#fff', borderRadius: 14, padding: 12, boxShadow: '0 2px 0 rgba(32,57,84,0.06), 0 12px 28px -10px rgba(32,57,84,0.12)' }}>
              <FlowStepViz step={i} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FlowStepViz({ step }) {
  if (step === 0) {
    return (
      <svg viewBox="0 0 320 160" width="100%" height="140">
        <rect x="80" y="20" width="160" height="120" rx="8" fill="#203954" />
        <rect x="92" y="36" width="136" height="80" rx="4" fill="#0E0A2E" />
        <circle cx="160" cy="76" r="20" fill="#4FA8C2" />
        <circle cx="160" cy="76" r="10" fill="#0E0A2E" />
        <rect x="100" y="124" width="120" height="8" rx="2" fill="#FFF3D6" opacity="0.4" />
      </svg>
    );
  }
  if (step === 1) {
    return (
      <svg viewBox="0 0 320 160" width="100%" height="140">
        <rect x="40" y="20" width="240" height="120" rx="8" fill="#FFF3D6" stroke="#e8e8e8" />
        <rect x="56" y="36" width="100" height="88" rx="4" fill="#fff" stroke="#203954" strokeDasharray="4 4" />
        <text x="106" y="86" textAnchor="middle" fontSize="32">📷</text>
        <rect x="172" y="44" width="92" height="20" rx="3" fill="#fff" />
        <rect x="172" y="72" width="92" height="8" rx="2" fill="#e8e8e8" />
        <rect x="172" y="86" width="60" height="8" rx="2" fill="#e8e8e8" />
        <rect x="172" y="104" width="92" height="20" rx="3" fill="#FE5E32" />
        <text x="218" y="118" textAnchor="middle" fontSize="11" fontFamily="Inter" fontWeight="700" fill="#fff">UPLOAD</text>
      </svg>
    );
  }
  if (step === 2) {
    return <InspectionPreview width="100%" height={140} status="ng" label="STEP3" />;
  }
  return (
    <svg viewBox="0 0 320 160" width="100%" height="140">
      <rect x="20" y="20" width="280" height="120" rx="8" fill="#fff" stroke="#e8e8e8" />
      <text x="40" y="46" fontSize="11" fontFamily="Inter" fontWeight="700" fill="#203954" letterSpacing="2">NG TREND</text>
      <g transform="translate(40 60)">
        {[20, 35, 28, 50, 42, 60, 55].map((h, i) => (
          <rect key={i} x={i*32} y={60-h} width="20" height={h} rx="2" fill={i === 5 ? '#FE5E32' : '#B8CE52'} />
        ))}
      </g>
      <line x1="40" y1="124" x2="280" y2="124" stroke="#e8e8e8" />
    </svg>
  );
}

Object.assign(window, { FlowA, FlowB });
