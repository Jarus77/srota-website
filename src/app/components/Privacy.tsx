import Image from 'next/image'

const items = [
  {
    img: '/audio.jpeg',
    title: 'No audio sent anywhere. Ever.',
    sub: 'Your microphone stays on your machine.',
  },
  {
    img: '/account.jpeg',
    title: 'No account needed.',
    sub: 'Works fully offline.',
  },
  {
    img: '/no-subscription.jpeg',
    title: 'No subscription.',
    sub: 'One-time download. Free forever.',
  },
]

export default function Privacy() {
  return (
    <section style={{ padding: '96px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
        <h2
          className="serif"
          style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 400,
            marginBottom: '64px',
            color: 'var(--text-primary)',
          }}
        >
          Your microphone. Your machine. Your data.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
          }}
        >
          {items.map((item, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(26,158,122,0.18)',
                }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={64}
                  height={64}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <p style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text-primary)' }}>{item.title}</p>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
