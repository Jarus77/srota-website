import Image from 'next/image'

function MenuBarMock() {
  return (
    <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Image src="/wave.jpeg" alt="Srota menu bar" width={200} height={80} style={{ height: '80px', width: 'auto', borderRadius: '8px', objectFit: 'contain' }} />
    </div>
  )
}


const steps = [
  {
    number: '01',
    title: 'Click the menu bar icon',
    body: 'Find Srota in your Mac menu bar. Click to open the dropdown and confirm it\'s ready.',
    media: <MenuBarMock />,
  },
  {
    number: '02',
    title: 'Hold fn and speak',
    body: 'Hold the fn key anywhere on your Mac and speak naturally. The waveform shows Srota is listening.',
    media: <WaveformPreview />,
  },
  {
    number: '03',
    title: 'Release — text appears',
    body: 'Let go of fn. Your transcription is typed directly where your cursor is. No paste, no copy.',
    media: (
      <div
        style={{
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          fontFamily: 'var(--font-geist-mono, monospace)',
          fontSize: '13px',
          color: 'var(--text-secondary)',
        }}
      >
        <span style={{ color: 'var(--text-primary)' }}>text appears here</span>
        <span
          style={{
            display: 'inline-block',
            width: '2px',
            height: '16px',
            background: 'var(--accent)',
            animation: 'blink 1s step-end infinite',
          }}
        />
      </div>
    ),
  },
]

function WaveformPreview() {
  const heights = [12, 24, 36, 48, 40, 28, 16, 32, 44, 36, 20, 14]
  return (
    <div
      style={{
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
      }}
    >
      {heights.map((h, i) => (
        <div
          key={i}
          className="wave-bar"
          style={{
            height: `${h}px`,
            animationDelay: `${i * 0.08}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '96px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2
          className="serif"
          style={{
            fontSize: 'clamp(32px, 4vw, 42px)',
            fontWeight: 400,
            textAlign: 'center',
            marginBottom: '64px',
            color: 'var(--text-primary)',
          }}
        >
          How It Works
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '0',
            position: 'relative',
          }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '32px',
                position: 'relative',
              }}
            >
              {/* Connector */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '48px',
                    right: '-1px',
                    width: '2px',
                    height: '40px',
                    borderRight: '2px dashed rgba(61,217,172,0.3)',
                    display: 'none',
                  }}
                  className="step-connector"
                />
              )}

              <div
                className="serif"
                style={{
                  fontSize: '48px',
                  fontWeight: 400,
                  color: 'var(--accent)',
                  lineHeight: 1,
                  marginBottom: '16px',
                }}
              >
                {step.number}
              </div>

              <div style={{ marginBottom: '20px' }}>{step.media}</div>

              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {step.body}
              </p>

              {/* Horizontal dashed connector between cards */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '56px',
                    right: '-24px',
                    zIndex: 2,
                    color: 'rgba(61,217,172,0.4)',
                    fontSize: '20px',
                    fontWeight: 300,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2px',
                  }}
                >
                  <span style={{ letterSpacing: '2px' }}>···</span>
                  <span style={{ fontSize: '14px' }}>›</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
