// SP版 主要セクション(縦長 375幅)
function MobileHero() {
  return (
    <div className="mierun" style={{ width: 375, minHeight: 720 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid #e8e8e8' }}>
        <MierunLogo size={22} />
        <button style={{ background: 'none', padding: 6 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" stroke="#203954" strokeWidth="2.2" fill="none" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
        </button>
      </header>
      <section style={{ padding: '32px 20px 40px' }}>
        <div className="chip" style={{ background: '#FFF', color: '#203954', fontSize: 16 }}>
          <span style={{ width: 5, height: 5, background: '#FE5E32', borderRadius: '50%' }} />
          板金加工業向け AI外観検査
        </div>
        <h1 style={{ fontSize: 34, lineHeight: 1.25, marginTop: 18, fontWeight: 800, color: '#203954', letterSpacing: '0.01em' }}>
          目視検査の<br/>
          <span style={{ position: 'relative', display: 'inline-block' }}>
            「見逃し」と「ムラ」
            <span style={{ position: 'absolute', left: 0, right: 0, bottom: 4, height: 8, background: '#FE5E32', opacity: 0.25, zIndex: -1 }} />
          </span>を、<br/>仕組みで無くす。
        </h1>
        <p style={{ marginTop: 18, fontSize: 17, color: '#4A4664', lineHeight: 1.85 }}>
          良品サンプルたった<strong style={{ color: '#203954' }}>1枚</strong>から始まる、現場のためのAI外観検査。
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 24 }}>
          <button className="btn-primary" style={{ justifyContent: 'center', fontSize: 17 }}>無料デモを予約する →</button>
          <button className="btn-ghost" style={{ justifyContent: 'center', fontSize: 17 }}>資料をダウンロード</button>
        </div>
        <div style={{ marginTop: 28, background: '#fff', borderRadius: 16, padding: 12, boxShadow: '0 12px 32px -12px rgba(32,57,84,0.2)' }}>
          <InspectionPreview width="100%" height={200} status="ng" label="M01" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginTop: 20 }}>
          {[['1枚', 'の良品で'], ['30分', 'で運用'], ['2週', 'で導入']].map(([n, l], i) => (
            <div key={i} style={{ background: '#fff', padding: '12px 8px', borderRadius: 10, textAlign: 'center' }}>
              <div className="num" style={{ fontSize: 20, fontWeight: 800, color: '#203954' }}>{n}</div>
              <div style={{ fontSize: 12, color: '#7B768F' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function MobileProblems() {
  return (
    <div className="mierun" style={{ width: 375, padding: '40px 20px', background: '#f0f0f0' }}>
      <div className="eyebrow">VOICES</div>
      <h2 style={{ fontSize: 26, marginTop: 10, color: '#203954', lineHeight: 1.4 }}>
        こんな現場の<br/>お悩み、ありませんか?
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 28 }}>
        {[
          { no: '01', voice: '担当者が変わると合否基準がブレる。同じ部品でも判定が違う。' },
          { no: '02', voice: 'NG品が客先に流出した。でも検査の工数は増やせない。' },
          { no: '03', voice: '熟練検査員が来年定年。判断基準をどう引き継ぐか…' },
        ].map(it => (
          <div key={it.no} style={{ background: '#fff', borderRadius: 14, padding: 20, position: 'relative' }}>
            <div style={{ display: 'inline-flex', padding: '3px 8px', background: '#203954', color: '#fff', borderRadius: 999, fontSize: 12, gap: 6, marginBottom: 10 }}>
              <span className="en" style={{ opacity: 0.6 }}>VOICE</span>
              <span className="num" style={{ fontWeight: 700 }}>{it.no}</span>
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: '#0E0A2E', fontWeight: 600 }}>「{it.voice}」</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 24, padding: 20, background: '#203954', color: '#FFF3D6', borderRadius: 14 }}>
        <div style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.6 }}>
          1つでも当てはまるなら、<br/><span style={{ color: '#FE5E32' }}>ミエルン</span>が解決します。
        </div>
        <button className="btn-primary" style={{ marginTop: 14, width: '100%', justifyContent: 'center', fontSize: 16 }}>
          無料デモで確かめる →
        </button>
      </div>
    </div>
  );
}

function MobileFeatures() {
  const items = [
    { tag: '01', title: '良品1枚で即日導入', desc: '治具も教師データも不要。', vis: 'one' },
    { tag: '02', title: 'NG箇所をBBOXで可視化', desc: '赤枠で「どこが」が一目で。', vis: 'box' },
    { tag: '03', title: '検査品質を標準化', desc: '誰が担当しても基準は一定。', vis: 'std' },
  ];
  return (
    <div className="mierun" style={{ width: 375, padding: '40px 20px', background: '#fcfcfc' }}>
      <div className="eyebrow">FEATURES</div>
      <h2 style={{ fontSize: 26, marginTop: 10, color: '#203954', lineHeight: 1.4 }}>
        ミエルンの<br/>3つの特徴。
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 28 }}>
        {items.map(it => (
          <div key={it.tag} style={{ background: '#fff', borderRadius: 16, padding: 8, border: '1px solid #efefef' }}>
            <div style={{ background: '#f0f0f0', borderRadius: 12, height: 140, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
              <FeatureViz kind={it.vis} />
            </div>
            <div style={{ padding: '16px 12px 12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="num" style={{ fontSize: 16, fontWeight: 700, color: '#FE5E32', letterSpacing: '0.1em' }}>FEATURE {it.tag}</span>
              </div>
              <h3 style={{ fontSize: 18, color: '#203954', marginTop: 6 }}>{it.title}</h3>
              <p style={{ marginTop: 8, fontSize: 16, color: '#4A4664', lineHeight: 1.8 }}>{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileCta() {
  return (
    <div className="mierun" style={{ width: 375, padding: '48px 20px', background: '#203954', color: '#FFF3D6' }}>
      <div className="eyebrow" style={{ color: '#FE5E32' }}>NEXT STEPS</div>
      <h2 style={{ fontSize: 28, marginTop: 12, lineHeight: 1.35, color: '#FFF3D6' }}>
        まずは、<span style={{ color: '#FE5E32' }}>実機デモ</span>を体験してください。
      </h2>
      <p style={{ marginTop: 16, fontSize: 16, opacity: 0.8, lineHeight: 1.85 }}>
        貴社のワークを1枚お持ちいただければ、その場で判定精度をご確認いただけます。
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 28 }}>
        {[
          { title: '無料デモ体験', cta: 'デモを予約する', primary: true },
          { title: '2週間PoCプラン', cta: 'PoCを相談する' },
          { title: 'お見積り依頼', cta: '見積り依頼' },
        ].map((it, i) => (
          <div key={i} style={{
            background: it.primary ? '#FFF3D6' : 'rgba(255,255,255,0.06)',
            color: it.primary ? '#0E0A2E' : '#FFF3D6',
            border: it.primary ? 'none' : '1px solid rgba(255,255,255,0.18)',
            borderRadius: 14,
            padding: 18,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div style={{ fontSize: 17, fontWeight: 700, color: it.primary ? '#203954' : '#FFF3D6' }}>{it.title}</div>
            <span style={{ fontSize: 18, color: it.primary ? '#FE5E32' : '#FFF3D6' }}>→</span>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { MobileHero, MobileProblems, MobileFeatures, MobileCta });
