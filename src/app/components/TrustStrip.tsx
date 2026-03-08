import Image from 'next/image'

const columns = [
  {
    img: '/local.jpeg',
    title: 'On-device AI',
    sub: 'No audio leaves\nyour machine.',
  },
  {
    img: '/apple-silicon.jpeg',
    title: 'Apple Silicon',
    sub: 'Optimised for M1/\nM2/M3/M4 chips.',
  },
]

export default function TrustStrip() {
  return (
    <section
      style={{
        background: 'rgba(0,0,0,0.03)',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        padding: '40px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
        }}
      >
        {columns.map(({ img, title, sub }, i) => (
          <div
            key={title}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              textAlign: 'center',
              padding: '8px 24px',
              borderRight: i < 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              <Image src={img} alt={title} width={48} height={48} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <p style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', margin: 0 }}>
              {title}
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5, whiteSpace: 'pre-line' }}>
              {sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
