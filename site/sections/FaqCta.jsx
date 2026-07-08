// ========== FAQ ==========
function FaqSection() {
  const items = [
    { q: '本当に良品サンプル1枚で運用開始できますか?', a: 'はい。AIが良品画像から特徴を抽出し、基準を自動で学習します。複雑な設定や教師データの作成は不要です。多品種・小ロットの板金加工現場での実運用を想定して設計されています。' },
    { q: 'クラウド環境は必要ですか?', a: '不要です。エッジ動作型のため、工場内のローカル環境で完結します。外部ネットワーク接続を制限している現場でもそのままご利用いただけます。' },
    { q: '対応できる検査対象のサイズや種類は?', a: '縦横3〜30cmの板金加工品(プレス・溶接・切断等)を中心に対応。大型ワーク用の筐体もご用意しています。具体的な対応可否はサンプルでのご確認が可能です。' },
    { q: '導入までどれくらいの期間がかかりますか?', a: '最短2週間で導入完了。実機での無料デモ、2週間のPoC運用、本導入というステップで進めるのが一般的です。' },
    { q: '既存の検査ラインに組み込めますか?', a: 'はい。専用筐体は独立した検査ステーションとして設置できます。カメラモジュールのみの提供にも対応可能ですので、既存ラインへの組込みもご相談ください。' },
    { q: '操作研修はどの程度必要ですか?', a: '約30分です。専門知識のない現場担当者でも、品番選択 → ワーク設置 → クリックの3ステップで運用できる設計になっています。' },
  ];
  return (
    <div className="mierun" style={{ width: 1280, padding: '96px 56px', background: '#fcfcfc' }}>
      <SectionHead eyebrow="FAQ" title="よくあるご質問" align="center" />
      <div style={{ maxWidth: 880, margin: '56px auto 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {items.map((it, i) => (
          <details key={i} open={i === 0} style={{
            background: '#fff',
            borderRadius: 14,
            padding: '28px 32px',
            border: '1px solid #efefef',
          }}>
            <summary style={{ display: 'flex', alignItems: 'flex-start', gap: 16, cursor: 'pointer', listStyle: 'none' }}>
              <span style={{ fontFamily: 'Inter', fontWeight: 800, color: '#FE5E32', fontSize: 20, lineHeight: 1.4, whiteSpace: 'nowrap', flexShrink: 0 }}>Q.</span>
              <span style={{ flex: 1, fontSize: 20, fontWeight: 700, color: '#0E0A2E', lineHeight: 1.5 }}>{it.q}</span>
              <span style={{ fontSize: 24, color: '#7B768F', lineHeight: 1 }}>+</span>
            </summary>
            <div style={{ marginTop: 18, paddingLeft: 36, display: 'flex', gap: 16 }}>
              <span style={{ fontFamily: 'Inter', fontWeight: 800, color: '#203954', fontSize: 20, lineHeight: 1.4, whiteSpace: 'nowrap', flexShrink: 0 }}>A.</span>
              <p style={{ fontSize: 19, color: '#4A4664', lineHeight: 1.9 }}>{it.a}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

// ========== CTA 案A: フルブリード(Dark Blue + イベント情報も) ==========
function CtaA() {
  return (
    <div className="mierun" style={{ width: 1280, background: '#203954', color: '#FFF3D6', padding: '96px 56px', position: 'relative', overflow: 'hidden' }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.08 }}>
        <defs>
          <pattern id="ctadots" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="16" cy="16" r="1.5" fill="#FFF3D6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#ctadots)" />
      </svg>
      <div style={{ textAlign: 'center', position: 'relative' }}>
        <div className="eyebrow" style={{ color: '#FE5E32' }}>NEXT STEPS</div>
        <h2 style={{ fontSize: 52, marginTop: 16, lineHeight: 1.25, color: '#FFF3D6' }}>
          まずは、<span style={{ color: '#FE5E32' }}>実機デモ</span>を<br/>
          体験してください。
        </h2>
        <p style={{ marginTop: 24, fontSize: 18, opacity: 0.8, maxWidth: 580, margin: '24px auto 0', lineHeight: 1.85 }}>
          貴社のワークを1枚お持ちいただければ、その場で判定精度をご確認いただけます。
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 64, maxWidth: 980, margin: '64px auto 0', position: 'relative' }}>
        {[
          { tag: 'STEP A', title: '無料デモ体験', desc: '実際の製品とソフトウェアでデモを実施。貴社ワークでの判定テストも可能。', cta: 'デモを予約する', primary: true },
          { tag: 'STEP B', title: '2週間PoCプラン', desc: '実際の製造ラインに実機を設置し、2週間の試用運用で導入効果を検証。', cta: 'PoCを相談する' },
          { tag: 'STEP C', title: 'お見積り依頼', desc: '検査対象や設置環境に合わせた最適なシステム構成と導入コストを提示。', cta: '見積り依頼' },
        ].map((it, i) => (
          <div key={i} style={{
            background: it.primary ? '#FFF3D6' : 'rgba(255,255,255,0.06)',
            color: it.primary ? '#0E0A2E' : '#FFF3D6',
            border: it.primary ? 'none' : '1px solid rgba(255,255,255,0.18)',
            borderRadius: 20,
            padding: 32,
          }}>
            <div className="en" style={{ fontSize: 12, opacity: it.primary ? 0.5 : 0.6, letterSpacing: '0.16em', fontWeight: 700, color: it.primary ? '#FE5E32' : '#FE5E32' }}>{it.tag}</div>
            <h3 style={{ fontSize: 22, marginTop: 12, color: it.primary ? '#203954' : '#FFF3D6' }}>{it.title}</h3>
            <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.85, opacity: it.primary ? 0.7 : 0.75 }}>{it.desc}</p>
            <button style={{
              marginTop: 28,
              padding: '12px 20px',
              background: it.primary ? '#FE5E32' : 'transparent',
              border: it.primary ? 'none' : '1.5px solid #FFF3D6',
              color: it.primary ? '#fff' : '#FFF3D6',
              borderRadius: 999,
              fontWeight: 700,
              fontSize: 16,
              width: '100%',
            }}>{it.cta} →</button>
          </div>
        ))}
      </div>
      <div style={{
        marginTop: 64,
        maxWidth: 980,
        margin: '64px auto 0',
        padding: '24px 32px',
        background: 'rgba(254,94,50,0.12)',
        border: '1px solid rgba(254,94,50,0.3)',
        borderRadius: 16,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <div className="eyebrow" style={{ color: '#FE5E32' }}>EXHIBITION</div>
          <div style={{ marginTop: 8, fontSize: 18, fontWeight: 700 }}>製造イノベーション DXPO 東京 '26 夏 出展</div>
          <div style={{ marginTop: 6, fontSize: 16, opacity: 0.8 }}>2026.8.18(火) - 8.19(水) / 東京ビッグサイト 西1・2・3ホール</div>
        </div>
        <button style={{ padding: '12px 24px', background: '#FE5E32', color: '#fff', borderRadius: 999, fontWeight: 700, fontSize: 16 }}>
          ブースで実機を見る →
        </button>
      </div>
    </div>
  );
}

// ========== CTA 案B: 横並びのシンプル版 ==========
function CtaB() {
  return (
    <div className="mierun" style={{ width: 1280, padding: '96px 56px', background: '#f0f0f0' }}>
      <div style={{
        background: '#fff',
        borderRadius: 28,
        padding: '56px 64px',
        boxShadow: '0 24px 56px -16px rgba(32,57,84,0.2)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 56,
        alignItems: 'center',
      }}>
        <div>
          <div className="eyebrow">FREE TRIAL</div>
          <h2 style={{ fontSize: 42, marginTop: 16, lineHeight: 1.3, color: '#203954' }}>
            <span style={{ color: '#FE5E32' }}>デモ機</span>を、<br/>
            お貸しします。
          </h2>
          <p style={{ marginTop: 24, fontSize: 20, color: '#4A4664', lineHeight: 1.9 }}>
            簡単さも、精度も、<strong>貴社の現場で実際にお試しください。</strong><br/>
            2週間PoC・見積り相談・ご質問だけでも歓迎します。
          </p>
        </div>
        <div style={{ background: '#f0f0f0', borderRadius: 20, padding: 32 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: '#203954', marginBottom: 16 }}>お問い合わせフォーム</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input placeholder="貴社名" style={inputStyle} />
            <input placeholder="ご担当者名" style={inputStyle} />
            <input placeholder="メールアドレス" style={inputStyle} />
            <select style={inputStyle}>
              <option>ご相談内容を選択</option>
              <option>無料デモを予約したい</option>
              <option>2週間PoCを相談したい</option>
              <option>見積りが欲しい</option>
              <option>その他</option>
            </select>
            <textarea
              placeholder="ご相談内容・現在の検査体制や品目など、お気軽にご記入ください"
              rows={5}
              style={{ ...inputStyle, resize: 'vertical', minHeight: 120, lineHeight: 1.7, fontFamily: 'Zen Kaku Gothic New, sans-serif' }}
            />
            <button className="btn-primary" style={{ justifyContent: 'center', marginTop: 8 }}>送信する →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
const inputStyle = {
  padding: '14px 16px',
  borderRadius: 10,
  border: '1px solid #e8e8e8',
  background: '#fff',
  fontSize: 17,
  fontFamily: 'Zen Kaku Gothic New, sans-serif',
  color: '#0E0A2E',
  outline: 'none',
};

Object.assign(window, { FaqSection, CtaA, CtaB });
