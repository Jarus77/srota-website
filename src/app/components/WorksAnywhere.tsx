import Image from 'next/image'

const apps = ['Slack', 'Notion', 'Terminal', 'Mail', 'VSCode', 'Bear', 'Linear']

export default function WorksAnywhere() {
  return (
    <section
      style={{
        padding: '96px 24px',
        background: 'rgba(0,0,0,0.03)',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        {/* Left: text */}
        <div>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 38px)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              marginBottom: '16px',
              lineHeight: 1.25,
            }}
          >
            Works wherever<br />your cursor is.
          </h2>

          <div style={{ marginBottom: '16px' }}>
            {apps.map((app, i) => (
              <span
                key={app}
                style={{
                  color: i % 2 === 0 ? 'var(--accent)' : 'var(--text-secondary)',
                  fontSize: '18px',
                  marginRight: '12px',
                  fontWeight: i % 2 === 0 ? 500 : 400,
                }}
              >
                {app}{i < apps.length - 1 ? '.' : ''}
              </span>
            ))}
          </div>

          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '400px' }}>
            No integrations. No plugins.
            <br />
            If you can type there, Srota works there.
          </p>
        </div>

        {/* Right: menubar screenshot */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              position: 'relative',
              display: 'inline-block',
            }}
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '12px',
                padding: '4px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
              }}
            >
              <Image
                src="/screenshot-menubar.png"
                alt="Srota menu bar dropdown"
                width={260}
                height={200}
                style={{
                  width: '260px',
                  height: 'auto',
                  borderRadius: '8px',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
