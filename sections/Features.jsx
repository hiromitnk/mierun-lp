// ========== 機能・特徴 案A: グリッド(5カード) ==========
function FeaturesA() {
  const items = [
    {
      tag: '01',
      title: '良品1枚で即日導入',
      desc: '治具も教師データも不要。良品画像を1枚登録するだけ。専門知識がなくても今日から検査が始まります。',
      vis: 'one',
      featured: true,
    },
    {
      tag: '02',
      title: 'NG箇所をBBOXで可視化',
      desc: 'OK/NGの判定だけでなく、NG部位を赤枠(バウンディングボックス)で表示。「どこが・どうおかしいか」が一目で。',
      vis: 'box',
      featured: true,
    },
    {
      tag: '03',
      title: '検査品質を標準化',
      desc: '誰が担当しても同じ基準で判定。熟練者の「目」をシステムが補完し、担当者交代時の品質ブレを無くします。',
      vis: 'std',
    },
    {
      tag: '04',
      title: 'エッジ動作型(クラウド不要)',
      desc: '工場内で完結するエッジ処理。外部ネットワーク接続を制限している現場でもそのまま導入できます。',
      vis: 'edge',
    },
    {
      tag: '05',
      title: '品番別・自動レポート',
      desc: '品番・ロット別に結果を自動保存。週次でNG傾向を自動レポート化し、改善のPDCAを支援します。',
      vis: 'report',
    },
  ];
  return (
    <div className="mierun" style={{ width: 1280, padding: '96px 56px', background: '#fcfcfc' }}>
      <SectionHead
        eyebrow="PRODUCT FEATURES"
        title={<>良品サンプル1枚から始まる、<br/>AI外観検査「ミエルン」。</>}
        sub="治具も専門知識も不要。良品画像を1枚登録するだけで、その日からOK/NG判定とNG箇所の可視化が始まります。"
        align="center"
      />
      {/* 上段: メイン2機能(大カード) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 64 }}>
        {items.filter(it => it.featured).map(it => (
          <FeatureCard key={it.tag} item={it} large />
        ))}
      </div>
      {/* 下段: サブ3機能 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 24 }}>
        {items.filter(it => !it.featured).map(it => (
          <FeatureCard key={it.tag} item={it} />
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ item, large = false }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 20,
      padding: '8px 8px 28px',
      boxShadow: '0 2px 0 rgba(32,57,84,0.06), 0 18px 40px -12px rgba(32,57,84,0.12)',
      border: '1px solid #efefef',
    }}>
      <div style={{
        background: '#f0f0f0',
        borderRadius: 14,
        padding: 20,
        height: large ? 220 : 160,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <FeatureViz kind={item.vis} />
        <span className="num" style={{
          position: 'absolute', top: 14, left: 14,
          fontSize: 16, fontWeight: 700, color: '#203954', opacity: 0.5, letterSpacing: '0.1em',
        }}>FEATURE {item.tag}</span>
      </div>
      <div style={{ padding: large ? '24px 24px 4px' : '20px 20px 4px' }}>
        <h3 style={{ fontSize: large ? 24 : 19, color: '#203954', lineHeight: 1.4 }}>{item.title}</h3>
        <p style={{ marginTop: 14, fontSize: large ? 17 : 16, color: '#4A4664', lineHeight: 1.85 }}>{item.desc}</p>
      </div>
    </div>
  );
}

function FeatureViz({ kind }) {
  if (kind === 'one') {
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <svg viewBox="0 0 220 140" width="100%" height="100%">
          <rect x="40" y="20" width="100" height="100" rx="6" fill="#fff" stroke="#203954" strokeWidth="2" />
          <circle cx="65" cy="45" r="6" fill="#B8CE52" />
          <rect x="60" y="65" width="60" height="6" rx="2" fill="#e8e8e8" />
          <rect x="60" y="78" width="40" height="6" rx="2" fill="#e8e8e8" />
          <g transform="translate(150 30)">
            <rect x="0" y="0" width="50" height="50" rx="6" fill="#FE5E32" />
            <text x="25" y="22" textAnchor="middle" fontSize="11" fontFamily="Inter" fontWeight="700" fill="#fff">JUST</text>
            <text x="25" y="38" textAnchor="middle" fontSize="18" fontFamily="Inter" fontWeight="800" fill="#fff">1</text>
          </g>
        </svg>
      </div>
    );
  }
  if (kind === 'box') {
    return (
      <div style={{ width: '100%', maxWidth: 220 }}>
        <InspectionPreview width="100%" height={140} status="ng" label="FX" />
      </div>
    );
  }
  if (kind === 'edge') {
    return (
      <svg viewBox="0 0 220 140" width="100%" height="100%" preserveAspectRatio="xMidYMax meet">
        {/* クラウド(オフライン) */}
        <g transform="translate(60 50)">
          {/* 雲本体 */}
          <path d="M 22 50 C 8 50 2 40 8 32 C 4 22 14 14 24 18 C 28 8 46 8 52 18 C 64 14 76 24 70 34 C 78 42 70 52 58 50 Z"
                fill="#fff" stroke="#203954" strokeWidth="1.8" strokeLinejoin="round" />
          {/* ×マーク */}
          <g transform="translate(39 33)" stroke="#FE5E32" strokeWidth="4.5" strokeLinecap="round">
            <line x1="-10" y1="-10" x2="10" y2="10" />
            <line x1="-10" y1="10" x2="10" y2="-10" />
          </g>
          <text x="39" y="78" textAnchor="middle" fontSize="10" fontFamily="Inter" fontWeight="700" fill="#7B768F" letterSpacing="2">NO CLOUD</text>
        </g>
      </svg>
    );
  }
  if (kind === 'report') {
    return (
      <svg viewBox="0 0 220 140" width="100%" height="100%" preserveAspectRatio="xMidYMax meet">
        <g transform="translate(0 30)">
          <rect x="20" y="14" width="180" height="112" rx="6" fill="#fff" stroke="#e8e8e8" />
          <text x="32" y="34" fontSize="10" fontFamily="Inter" fontWeight="700" fill="#203954" letterSpacing="2">WEEKLY NG TREND</text>
          <g transform="translate(32 46)">
            {[18, 28, 22, 38, 32, 48, 42].map((h, i) => (
              <rect key={i} x={i*22} y={64-h} width="14" height={h} rx="2" fill={i === 5 ? '#FE5E32' : '#B8CE52'} />
            ))}
          </g>
          <line x1="32" y1="112" x2="188" y2="112" stroke="#e8e8e8" />
          <circle cx="180" cy="34" r="6" fill="#FE5E32" />
        </g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 220 140" width="100%" height="100%" preserveAspectRatio="xMidYMax meet">
      <g transform="translate(0 30)">
        {[0,1,2,3].map(i => (
          <g key={i} transform={`translate(${20 + i*48} 14)`}>
            <circle cx="16" cy="16" r="14" fill="#fff" stroke="#203954" strokeWidth="1.5" />
            <text x="16" y="20" textAnchor="middle" fontSize="14">👤</text>
            <rect x="2" y="40" width="28" height="32" rx="4" fill="#fff" stroke="#203954" strokeWidth="1.5" />
            <line x1="6" y1="50" x2="26" y2="50" stroke="#B8CE52" strokeWidth="2" />
            <line x1="6" y1="58" x2="26" y2="58" stroke="#B8CE52" strokeWidth="2" />
            <line x1="6" y1="66" x2="26" y2="66" stroke="#B8CE52" strokeWidth="2" />
          </g>
        ))}
        <text x="110" y="100" textAnchor="middle" fontSize="11" fontFamily="Inter" fontWeight="700" fill="#203954" letterSpacing="2">SAME RESULT</text>
      </g>
    </svg>
  );
}

// ========== 機能・特徴 案B: 縦タブ型(主機能を1つずつフォーカス) ==========
function FeaturesB() {
  return (
    <div className="mierun" style={{ width: 1280, padding: '96px 56px', background: '#fcfcfc' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
        <SectionHead
          eyebrow="PRODUCT FEATURES"
          title={<>「現場で本当に使える」<br/>5つの機能。</>}
        />
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={{ width: 40, height: 40, borderRadius: '50%', background: '#fff', border: '1px solid #e8e8e8' }}>←</button>
          <button style={{ width: 40, height: 40, borderRadius: '50%', background: '#203954', color: '#fff', border: 'none' }}>→</button>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '0.7fr 1.3fr', gap: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {[
            { tag: 'F01', title: '良品1枚で即日導入', active: true },
            { tag: 'F02', title: 'NG箇所をBBOXで可視化' },
            { tag: 'F03', title: 'エッジ動作型(クラウド不要)' },
            { tag: 'F04', title: '撮影条件の自動復元' },
            { tag: 'F05', title: '品番・ロット別の自動保存' },
          ].map((it, i) => (
            <div key={i} style={{
              padding: '20px 24px',
              borderRadius: 12,
              background: it.active ? '#203954' : 'transparent',
              color: it.active ? '#FFF3D6' : '#0E0A2E',
              display: 'flex', alignItems: 'center', gap: 16,
              borderLeft: it.active ? '4px solid #FE5E32' : '4px solid transparent',
              cursor: 'pointer',
            }}>
              <span className="num" style={{ fontSize: 16, opacity: it.active ? 0.7 : 0.4, fontWeight: 700, letterSpacing: '0.1em' }}>{it.tag}</span>
              <span style={{ fontSize: 17, fontWeight: 700 }}>{it.title}</span>
              {it.active && <span style={{ marginLeft: 'auto', color: '#FE5E32', fontSize: 18 }}>→</span>}
            </div>
          ))}
        </div>
        <div style={{ background: '#fff', borderRadius: 20, padding: 32, boxShadow: '0 2px 0 rgba(32,57,84,0.06), 0 18px 40px -12px rgba(32,57,84,0.12)' }}>
          <div className="eyebrow">FEATURE 01</div>
          <h3 style={{ fontSize: 32, color: '#203954', marginTop: 12, lineHeight: 1.3 }}>
            良品サンプル1枚を撮影。<br/>それだけで、検査が始まる。
          </h3>
          <p style={{ marginTop: 20, fontSize: 17, color: '#4A4664', lineHeight: 1.85, maxWidth: 540 }}>
            治具・マーカー・大量の教師データは一切不要。出荷OK品を1枚撮影して登録するだけで、
            AIが良品の基準を自動で学習します。
          </p>
          <div style={{ marginTop: 28, background: '#f0f0f0', borderRadius: 14, padding: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 20, alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div className="en" style={{ fontSize: 12, color: '#7B768F', letterSpacing: '0.16em', marginBottom: 8 }}>OTHER AI SYSTEM</div>
                <div className="num" style={{ fontSize: 48, fontWeight: 800, color: '#7B768F' }}>500+</div>
                <div style={{ fontSize: 16, color: '#7B768F', marginTop: 4 }}>枚の教師データが必要</div>
              </div>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: '#203954' }}>vs</div>
              <div style={{ textAlign: 'center' }}>
                <div className="en" style={{ fontSize: 12, color: '#FE5E32', letterSpacing: '0.16em', marginBottom: 8 }}>MIERUN</div>
                <div className="num" style={{ fontSize: 48, fontWeight: 800, color: '#FE5E32' }}>1</div>
                <div style={{ fontSize: 16, color: '#0E0A2E', marginTop: 4, fontWeight: 600 }}>枚で開始可能</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { FeaturesA, FeaturesB });
