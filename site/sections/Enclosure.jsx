// 筐体(専用ハードウェア)詳細セクション
// テクニカルドローイング風の図面を使って、2サイズあることを明確に伝える。
// =============================================================
function EnclosureSection() {
  const sizes = [
    {
      key: 'std',
      tag: 'STANDARD',
      tagJp: '標準サイズ',
      dims: { w: 300, d: 300, h: 430 },
      label: '300 × 300 × 430 mm',
      use: '縦横3〜30cmの板金加工品。プレス・溶接・切断品など、多くの現場で標準的に使われるサイズ。',
      features: ['カメラ・照明・撮影台 一体型', '電源を入れるだけで撮影環境が完成', 'ライン横にそのまま設置可能'],
      isDemo: true,
      // 図面の相対比率(高さに対しての幅)
      ratio: 300 / 430, // ≒ 0.70
      visualScale: 0.55, // カード内での見た目スケール
    },
    {
      key: 'large',
      tag: 'LARGE',
      tagJp: '大サイズ',
      dims: { w: 800, d: 500, h: 800 },
      label: '800 × 500 × 800 mm',
      use: '大型ワーク対応。標準サイズに収まらないアセンブリ・大判パネル等の検査に。',
      features: ['大型ワーク対応の広撮影面', '内部照明アレイで均一光源', '出入口を広く取った設計'],
      isDemo: false,
      ratio: 1, // 立方体
      visualScale: 0.95,
    },
  ];

  return (
    <div className="mierun" style={{ width: 1280, padding: '96px 56px', background: '#fcfcfc' }}>
      <SectionHead
        eyebrow="HARDWARE — ENCLOSURE"
        title="2サイズから選べる、専用筐体。"
        sub="カメラ・照明・撮影台が一体になった専用筐体。ライン横に置くだけで撮影環境が固定され、誰が撮っても安定したデータになります。"
        align="center"
      />

      <div style={{
        marginTop: 64,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24,
      }}>
        {sizes.map(s => <EnclosureCard key={s.key} spec={s} />)}
      </div>

      {/* 補足: スペック表 */}
      <div style={{
        marginTop: 48,
        background: '#fff',
        borderRadius: 16,
        border: '1px solid #efefef',
        padding: '28px 32px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: 32,
      }}>
        {[
          ['POWER', 'AC100V / 単相', '一般コンセントで稼働'],
          ['LIGHTING', '内蔵LED', '均一拡散光・色温度固定'],
          ['CAMERA', '産業用カメラ', '対象に応じて選定可'],
          ['DELIVERY', '最短2週間', 'PoCから本導入まで一気通貫'],
        ].map(([k, v, sub], i) => (
          <div key={i}>
            <div className="en" style={{ fontSize: 11, fontWeight: 700, color: '#FE5E32', letterSpacing: '0.16em' }}>{k}</div>
            <div style={{ marginTop: 8, fontSize: 18, fontWeight: 700, color: '#203954', lineHeight: 1.35 }}>{v}</div>
            <div style={{ marginTop: 4, fontSize: 13, color: '#7B768F', lineHeight: 1.6 }}>{sub}</div>
          </div>
        ))}
      </div>

      <p style={{
        marginTop: 28,
        textAlign: 'center',
        fontSize: 14,
        color: '#7B768F',
        lineHeight: 1.7,
      }}>
        ※ カメラモジュール単体のご提供にも対応可能です。既存ラインへの組込みもご相談ください。
      </p>
    </div>
  );
}

function EnclosureCard({ spec }) {
  const isDemo = spec.isDemo;
  const accent = isDemo ? '#FE5E32' : '#203954';

  return (
    <div style={{
      position: 'relative',
      background: '#fff',
      borderRadius: 20,
      border: `1px solid ${isDemo ? 'rgba(254,94,50,0.25)' : '#efefef'}`,
      boxShadow: isDemo
        ? '0 2px 0 rgba(254,94,50,0.08), 0 24px 56px -16px rgba(254,94,50,0.18)'
        : '0 2px 0 rgba(32,57,84,0.06), 0 18px 40px -12px rgba(32,57,84,0.12)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* 上部: タグバー */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 28px',
        borderBottom: '1px dashed #e8e8e8',
      }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span style={{
            fontFamily: 'Inter', fontSize: 11, fontWeight: 800,
            color: '#fff', background: accent,
            padding: '4px 10px', borderRadius: 4,
            letterSpacing: '0.14em',
          }}>{spec.tag}</span>
          <span style={{ fontSize: 16, fontWeight: 700, color: '#203954' }}>{spec.tagJp}</span>
        </div>
        {isDemo && (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 13, fontWeight: 700, color: '#FE5E32',
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FE5E32',
              boxShadow: '0 0 0 4px rgba(254,94,50,0.18)' }} />
            DXPOデモ機 / 実機体験可
          </div>
        )}
      </div>

      {/* 中部: 図面ビュー(線画 + 寸法ライン) */}
      <div style={{
        position: 'relative',
        background:
          'repeating-linear-gradient(0deg, transparent 0 23px, rgba(32,57,84,0.04) 23px 24px),' +
          'repeating-linear-gradient(90deg, transparent 0 23px, rgba(32,57,84,0.04) 23px 24px)',
        padding: '40px 32px 56px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 460,
      }}>
        {/* DRAWING NO. ラベル (左上) */}
        <div style={{
          position: 'absolute', top: 16, left: 20,
          fontFamily: 'Inter', fontSize: 10, color: '#7B768F',
          letterSpacing: '0.16em', fontWeight: 700,
        }}>
          DRAWING NO. {isDemo ? 'MR-ENC-300' : 'MR-ENC-800'}
        </div>
        {/* スケール (右上) */}
        <div style={{
          position: 'absolute', top: 16, right: 20,
          fontFamily: 'Inter', fontSize: 10, color: '#7B768F',
          letterSpacing: '0.16em', fontWeight: 700,
        }}>
          SCALE 1 : {isDemo ? '5' : '10'}
        </div>

        <EnclosureDrawing spec={spec} accent={accent} />

        {/* 下部: タイトル(寸法) */}
        <div style={{
          position: 'absolute', bottom: 14, left: 0, right: 0,
          textAlign: 'center',
          fontFamily: 'Inter', fontSize: 11, color: '#203954',
          letterSpacing: '0.14em', fontWeight: 700,
        }}>
          W {spec.dims.w} × D {spec.dims.d} × H {spec.dims.h} (mm)
        </div>
      </div>

      {/* 下部: 説明 */}
      <div style={{ padding: '28px 28px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
          <span className="en" style={{ fontSize: 28, fontWeight: 800, color: accent, letterSpacing: '-0.01em' }}>
            {spec.label}
          </span>
        </div>
        <p style={{ marginTop: 16, fontSize: 17, color: '#4A4664', lineHeight: 1.85 }}>
          {spec.use}
        </p>
        <ul style={{ marginTop: 20, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {spec.features.map((f, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 16, color: '#0E0A2E' }}>
              <span style={{
                marginTop: 7,
                flexShrink: 0,
                width: 6, height: 6, borderRadius: '50%',
                background: accent,
              }} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// 筐体の図面(等角投影)+ 寸法線。標準サイズはユーザー提供の線画を使う。
function EnclosureDrawing({ spec, accent }) {
  const isDemo = spec.isDemo;
  // 標準サイズ(3Dビューワー) と 大サイズ(線画) を同じ表示エリアサイズに揃える
  const visW = 320;
  const visH = 400;

  if (isDemo) {
    return <Enclosure3DViewer spec={spec} accent={accent} visW={visW} visH={visH} />;
  }

  // LARGE サイズ: PDF図面から生成した線画を使用。寸法ラベルは3D側と統一スタイル
  const boxW = visW + 80;
  const boxH = visH + 40;
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: boxW, height: boxH }}>
      {/* 線画本体 */}
      <img
        src="assets/enclosure-large-line.png"
        alt="大サイズ筐体 線画"
        style={{
          position: 'absolute',
          left: 0, top: 0,
          width: '100%', height: '100%',
          objectFit: 'contain',
          mixBlendMode: 'multiply',
        }}
      />
      {/* 寸法ラベル: 標準サイズの3Dビューワーと統一 */}
      <DimTag position="left"   value={`H ${spec.dims.h}`} accent={accent} />
      <DimTag position="bottom" value={`W ${spec.dims.w}`} accent={accent} />
      <DimTag position="right"  value={`D ${spec.dims.d}`} accent={accent} />
    </div>
  );
}

// 3D側と共通の寸法ラベル
function DimTag({ position, value, accent }) {
  const base = {
    fontFamily: 'Inter', fontSize: 12, fontWeight: 700,
    color: accent,
    letterSpacing: '0.06em',
    pointerEvents: 'none',
    background: 'rgba(255,255,255,0.85)',
    border: `1px solid ${accent}33`,
    borderRadius: 4,
    position: 'absolute',
  };
  if (position === 'left') {
    return <div style={{ ...base, left: 6, top: '50%', transform: 'translateY(-50%)', writingMode: 'vertical-rl', padding: '6px 3px' }}>{value}</div>;
  }
  if (position === 'bottom') {
    return <div style={{ ...base, left: '50%', bottom: 4, transform: 'translateX(-50%)', padding: '3px 8px' }}>{value}</div>;
  }
  // right (top)
  return <div style={{ ...base, right: 6, top: 6, padding: '3px 8px' }}>{value}</div>;
}

// (DimLine は廃止 — 標準/大 両サイズで DimTag に統一しました)

// =============================================================
// 3Dビューワー (標準サイズ筐体 / mierun-normal-size.glb)
// - Google <model-viewer>
// - 透明背景、ゆっくり自動回転(操作で停止)
// - AR対応
// - 線画→3Dのフェードイン
// - 寸法ラベル(W/D/H)をビューワー内にオーバーレイ
// =============================================================
function Enclosure3DViewer({ spec, accent, visW, visH }) {
  const [modelReady, setModelReady] = React.useState(false);
  const mvRef = React.useRef(null);

  React.useEffect(() => {
    const el = mvRef.current;
    if (!el) return;
    const onLoad = () => setModelReady(true);
    el.addEventListener('load', onLoad);
    el.addEventListener('model-visibility', onLoad);
    // 既にロード済みだった場合の保険 + ポーリング(load イベント取り逃し対策)
    let cancelled = false;
    const poll = () => {
      if (cancelled) return;
      if (el.loaded || el.modelIsVisible) {
        setModelReady(true);
      } else {
        setTimeout(poll, 200);
      }
    };
    poll();
    return () => {
      cancelled = true;
      el.removeEventListener('load', onLoad);
      el.removeEventListener('model-visibility', onLoad);
    };
  }, []);

  // カード内の描画枠 = 線画時代と同じサイズ感を維持
  const boxW = visW + 80;   // 400
  const boxH = visH + 40;   // 440

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: boxW, height: boxH }}>
      {/* --- 線画プレースホルダー(3Dロード完了で消える) --- */}
      <img
        src="assets/enclosure-line.png"
        alt="標準サイズ筐体 線画"
        style={{
          position: 'absolute', left: '15%', top: 20,
          width: '70%', height: visH,
          objectFit: 'contain',
          mixBlendMode: 'multiply',
          opacity: modelReady ? 0 : 0.9,
          transition: 'opacity 700ms ease',
          pointerEvents: 'none',
        }}
      />

      {/* --- 3Dビューワー本体 ---
          orientation: モデルのZ軸が"高さ"なので、X軸周りに-90度回して縦に立てる
          camera-orbit: 少し斜め見下ろしのアイソメ気味な角度で初期化
          field-of-view: 広めにしてはみ出しを防ぐ
      */}
      <model-viewer
        ref={mvRef}
        src="assets/mierun-normal-size.glb"
        alt="ミエルン 標準サイズ筐体 3Dモデル"
        orientation="0deg 90deg 0deg"
        camera-controls
        touch-action="pan-y"
        auto-rotate
        auto-rotate-delay="0"
        rotation-per-second="18deg"
        camera-orbit="25deg 72deg auto"
        field-of-view="28deg"
        min-camera-orbit="auto 0deg auto"
        max-camera-orbit="auto 180deg auto"
        interaction-prompt="none"
        exposure="1.05"
        shadow-intensity="0.9"
        shadow-softness="0.85"
        environment-image="neutral"
        ar
        ar-modes="webxr scene-viewer quick-look"
        ar-scale="fixed"
        style={{
          position: 'absolute',
          left: 0, top: 0,
          width: '100%', height: '100%',
          background: 'transparent',
          '--poster-color': 'transparent',
          opacity: modelReady ? 1 : 0,
          transition: 'opacity 700ms ease',
        }}
      >
        {/* AR ボタン(スマホ) */}
        <button
          slot="ar-button"
          style={{
            position: 'absolute', right: 10, bottom: 10,
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '7px 12px',
            background: '#fff',
            border: `1px solid ${accent}`,
            borderRadius: 999,
            color: accent,
            fontFamily: 'Inter', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.08em',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(32,57,84,0.10)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M12 2 3 7v10l9 5 9-5V7z"/>
            <path d="M3 7l9 5 9-5M12 12v10"/>
          </svg>
          AR で見る
        </button>

        {/* ローディング中の小さいスピナー */}
        <div slot="progress-bar" style={{ display: 'none' }} />
      </model-viewer>

      {/* --- 寸法ラベル(3D側と大サイズ側で共通の DimTag を使用) --- */}
      <DimTag position="left"   value={`H ${spec.dims.h}`} accent={accent} />
      <DimTag position="bottom" value={`W ${spec.dims.w}`} accent={accent} />
      <DimTag position="right"  value={`D ${spec.dims.d}`} accent={accent} />

      {/* --- 操作ヒント(初回のみ、3Dロード後に薄く表示) --- */}
      <div style={{
        position: 'absolute',
        left: '50%', top: 8,
        transform: 'translateX(-50%)',
        fontFamily: 'Inter', fontSize: 10, fontWeight: 600,
        color: '#7B768F',
        letterSpacing: '0.14em',
        pointerEvents: 'none',
        opacity: modelReady ? 0.7 : 0,
        transition: 'opacity 900ms ease 300ms',
      }}>
        DRAG TO ROTATE
      </div>
    </div>
  );
}

Object.assign(window, { EnclosureSection });
