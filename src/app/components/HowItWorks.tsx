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
    <section id="how-it-works" style={{ padding: '58px 24px' }}>
      <div style={{ maxWidth: '940px', margin: '0 auto' }}>
        <h2
          className="serif"
          style={{
            fontSize: 'clamp(32px, 4vw, 42px)',
            fontWeight: 400,
            textAlign: 'center',
            marginBottom: '28px',
            color: 'var(--text-primary)',
          }}
        >
          How It Works
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '14px',
            position: 'relative',
          }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px 18px 22px',
                position: 'relative',
                borderRadius: '20px',
                border: '1px solid rgba(26,158,122,0.12)',
                background: 'rgba(255,255,255,0.7)',
                boxShadow: '0 8px 24px rgba(28,26,22,0.04)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div
                  className="serif"
                  style={{
                    fontSize: '38px',
                    fontWeight: 400,
                    color: 'var(--accent)',
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div
                    style={{
                      color: 'rgba(61,217,172,0.42)',
                      fontSize: '18px',
                      fontWeight: 300,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '2px',
                    }}
                  >
                    <span style={{ letterSpacing: '2px' }}>···</span>
                    <span style={{ fontSize: '13px' }}>›</span>
                  </div>
                )}
              </div>

              <div style={{ marginBottom: '14px' }}>{step.media}</div>

              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
