// ========== 動画デモ セクション ==========
// アプリの操作画面録画を埋め込む枠。動画データ受領前でもプレースホルダで表示。
// 動画ファイルを site/assets/mierun-demo.mp4 に配置すれば自動で切り替わる。
// (JSX 内の HAS_VIDEO を true にするだけ)
function VideoDemo() {
  const HAS_VIDEO = false;   // ← 動画データを配置したら true に

  return (
    <div className="mierun video-demo" style={{ width: 1280, padding: '96px 56px', background: '#f0f0f0' }}>
      <SectionHead
        eyebrow="SEE IT IN ACTION"
        title="実際の操作画面を、動画で。"
        sub="良品登録から判定・NG可視化まで。現場で誰もが迷わず使える操作性を、そのままご覧いただけます。"
        align="center"
      />

      <div className="video-demo__frame" style={{
        marginTop: 56,
        maxWidth: 1000,
        margin: '56px auto 0',
        borderRadius: 24,
        overflow: 'hidden',
        background: '#0E0A2E',
        boxShadow: '0 24px 56px -16px rgba(32,57,84,0.35), 0 4px 0 rgba(32,57,84,0.08)',
        position: 'relative',
        aspectRatio: '16 / 9',
      }}>
        {HAS_VIDEO ? (
          <video
            src="assets/mierun-demo.mp4"
            poster="assets/ui-inspection-ok.png"
            controls
            playsInline
            preload="metadata"
            style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
          />
        ) : (
          <VideoPlaceholder />
        )}
      </div>

      {/* 動画補足キャプション + マスコット */}
      <div className="video-demo__footer" style={{
        marginTop: 24,
        maxWidth: 1000,
        margin: '24px auto 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
      }}>
        <div className="video-demo__mascot" style={{ flexShrink: 0 }}>
          <Mascot
            dir="right"
            size={110}
            bubble={<>アプリの中では<br/>ボクが案内するよ!</>}
            bubbleSide="right"
          />
        </div>
        <div className="video-demo__chips" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 12,
          flexWrap: 'wrap',
          flex: 1,
        }}>
          {['良品1枚を登録', 'ワークをセット', '判定 & NG可視化'].map((t, i) => (
            <span key={i} className="chip" style={{ background: '#fff' }}>
              <span className="num" style={{ color: '#FE5E32', fontWeight: 800, marginRight: 4 }}>{i + 1}</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// 動画受領前のプレースホルダ。UIスクショを裏に敷いて再生ボタン風のオーバーレイ。
function VideoPlaceholder() {
  return (
    <div style={{
      width: '100%', height: '100%',
      position: 'relative',
      background: '#152838',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* 背景に既存UIスクショを薄く敷く */}
      <img
        src="assets/ui-inspection-ok.png"
        alt=""
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', opacity: 0.35, filter: 'blur(2px)',
        }}
      />
      {/* 中央プレビュー */}
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        color: '#FFF3D6',
        textAlign: 'center',
        padding: 24,
      }}>
        <div style={{
          width: 88, height: 88,
          borderRadius: '50%',
          background: '#FE5E32',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 12px 32px -8px rgba(254,94,50,0.6)',
        }}>
          {/* Play icon */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <div>
          <div className="en" style={{ fontSize: 12, letterSpacing: '0.24em', opacity: 0.7, fontWeight: 700 }}>
            DEMO VIDEO
          </div>
          <div style={{ marginTop: 8, fontSize: 22, fontWeight: 700 }}>
            操作デモ動画をここに掲載予定
          </div>
          <div style={{ marginTop: 6, fontSize: 14, opacity: 0.75 }}>
            アプリの実操作を録画したデモ動画を近日公開します
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { VideoDemo });
