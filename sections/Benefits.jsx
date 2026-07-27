// ========== 導入メリット 案A: BEFORE/AFTER対比表 ==========
function BenefitsA() {
  const rows = [
    ['熟練担当者が毎回目視で判定', '良品1枚で誰でも同じ基準で検査'],
    ['判定根拠は個人の記憶の中', 'NG箇所・タイプを自動でデジタル化'],
    ['NGが出ても「なぜ」が残らない', '類似NGの急増を自動レポートで検知'],
    ['品番ごとに条件を再確認', '品番選択だけで検査条件を自動復元'],
    ['担当者交代で品質が揺れる', '誰が担当しても品質基準が一定'],
  ];
  return (
    <div className="mierun" style={{ width: 1280, padding: '96px 56px', background: '#f0f0f0' }}>
      <SectionHead
        eyebrow="BEFORE / AFTER"
        title={<>「熟練者の目」を、<br/>デジタルな仕組みとして現場に残す。</>}
        align="center"
      />
      <div style={{ marginTop: 64, background: '#fff', borderRadius: 24, padding: 8, boxShadow: '0 24px 56px -16px rgba(32,57,84,0.2)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 1fr', alignItems: 'center', padding: '20px 32px', borderBottom: '2px solid #f0f0f0' }}>
          <div>
            <div className="eyebrow" style={{ color: '#7B768F' }}>BEFORE</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#7B768F', marginTop: 4 }}>属人化した検査</div>
          </div>
          <div style={{ textAlign: 'center', fontSize: 22, color: '#7B768F' }}>→</div>
          <div>
            <div className="eyebrow" style={{ color: '#FE5E32' }}>AFTER</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#203954', marginTop: 4 }}>仕組みとしての検査</div>
          </div>
        </div>
        {rows.map(([b, a], i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '1fr 80px 1fr',
            alignItems: 'center',
            padding: '24px 32px',
            background: i % 2 === 0 ? '#fcfcfc' : '#fff',
            borderRadius: 14,
          }}>
            <div style={{ fontSize: 20, lineHeight: 1.55, color: '#7B768F', textDecoration: 'line-through', textDecorationColor: 'rgba(123,118,143,0.4)' }}>
              {b}
            </div>
            <div style={{ textAlign: 'center' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36, borderRadius: '50%',
                background: '#B8CE52', color: '#0E0A2E', fontSize: 18, fontWeight: 700,
              }}>✓</span>
            </div>
            <div style={{ fontSize: 20, lineHeight: 1.55, color: '#0E0A2E', fontWeight: 600 }}>
              {a}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ========== 導入メリット 案B: 数字で見せる(数字訴求) ==========
function BenefitsB() {
  return (
    <div className="mierun" style={{ width: 1280, padding: '96px 56px', background: '#203954', color: '#FFF3D6' }}>
      <SectionHead
        eyebrow="WHY MIERUN"
        title={<>なぜ、ミエルンが選ばれるのか。</>}
        sub="既存のAI外観検査機と比較して、初期費用・導入期間・運用ハードルを大幅に圧縮します。"
        dark
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 64 }}>
        {[
          { num: '1/10', unit: '', label: '既存AI機 比 初期費用', sub: '1,000-2,000万円→お見積り' },
          { num: '1', unit: '枚', label: '必要な学習サンプル', sub: '他社は500枚以上' },
          { num: '30', unit: '分', label: '操作研修時間', sub: '専門知識ゼロでOK' },
          { num: '2', unit: '週間', label: '最短導入期間', sub: '他社は数ヶ月〜' },
        ].map((it, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 20,
            padding: 28,
            position: 'relative',
          }}>
            <div className="en" style={{ fontSize: 12, opacity: 0.5, letterSpacing: '0.16em' }}>0{i+1}</div>
            <div style={{ marginTop: 16, display: 'flex', alignItems: 'baseline', gap: 4 }}>
              <span className="num" style={{ fontSize: 64, fontWeight: 800, color: '#FE5E32', lineHeight: 1, letterSpacing: '-0.02em' }}>{it.num}</span>
              <span style={{ fontSize: 18, fontWeight: 700 }}>{it.unit}</span>
            </div>
            <div style={{ marginTop: 16, fontSize: 20, fontWeight: 700, lineHeight: 1.45 }}>{it.label}</div>
            <div style={{ marginTop: 8, fontSize: 17, opacity: 0.7, lineHeight: 1.7 }}>{it.sub}</div>
          </div>
        ))}
      </div>
      {/* 比較表 */}
      <div style={{ marginTop: 56, background: 'rgba(255,255,255,0.04)', borderRadius: 20, padding: 4, border: '1px solid rgba(255,255,255,0.12)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', padding: '16px 24px', fontSize: 16, opacity: 0.6, letterSpacing: '0.12em' }}>
          <div className="en">COMPARISON</div>
          <div className="en" style={{ textAlign: 'center' }}>既存AI外観検査機</div>
          <div className="en" style={{ textAlign: 'center' }}>手動目視検査</div>
          <div className="en" style={{ textAlign: 'center', color: '#FE5E32', fontWeight: 700 }}>ミエルン</div>
        </div>
        {[
          ['初期費用', '1,000-2,000万円', '低コスト', 'お見積り'],
          ['導入準備', '治具・大量学習', '不要', '良品1枚で開始'],
          ['専門知識', '専門家が必要', '不要', '30分研修で運用'],
          ['NG傾向の把握', '別途ツール', '個人の記憶依存', '週次自動レポート'],
          ['導入期間', '数ヶ月〜', '即日', '最短2週間'],
        ].map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', padding: '20px 24px', background: i%2===0 ? 'rgba(255,255,255,0.03)' : 'transparent', borderRadius: 12, alignItems: 'center', fontSize: 17 }}>
            <div style={{ fontWeight: 700, opacity: 0.9 }}>{row[0]}</div>
            <div style={{ textAlign: 'center', opacity: 0.6 }}>{row[1]}</div>
            <div style={{ textAlign: 'center', opacity: 0.6 }}>{row[2]}</div>
            <div style={{ textAlign: 'center', fontWeight: 700, color: '#FFF3D6', background: 'rgba(254,94,50,0.15)', padding: '8px 12px', borderRadius: 8, border: '1px solid rgba(254,94,50,0.3)' }}>{row[3]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { BenefitsA, BenefitsB });
