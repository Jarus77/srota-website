import Image from 'next/image'

const apps = ['Slack', 'Notion', 'Terminal', 'Mail', 'VSCode', 'Bear', 'Linear']

export default function WorksAnywhere() {
  return (
    <section
      style={{
        padding: '58px 24px',
        background: 'rgba(0,0,0,0.03)',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div
        style={{
          maxWidth: '920px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
          alignItems: 'center',
        }}
      >
        {/* Left: text */}
        <div style={{ maxWidth: '420px' }}>
          <h2
            className="serif"
            style={{
              fontSize: 'clamp(28px, 3.5vw, 38px)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              marginBottom: '12px',
              lineHeight: 1.25,
            }}
          >
            Works wherever<br />your cursor is.
          </h2>

          <div style={{ marginBottom: '10px' }}>
            {apps.map((app, i) => (
              <span
                key={app}
                style={{
                  color: i % 2 === 0 ? 'var(--accent)' : 'var(--text-secondary)',
                  fontSize: '17px',
                  marginRight: '10px',
                  fontWeight: i % 2 === 0 ? 500 : 400,
                  lineHeight: 1.8,
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
              transform: 'translateY(4px)',
            }}
          >
            <div
              style={{
                background: 'rgba(255,255,255,0.78)',
                border: '1px solid rgba(0,0,0,0.09)',
                borderRadius: '18px',
                padding: '8px',
                boxShadow: '0 20px 42px rgba(0,0,0,0.14)',
              }}
            >
              <Image
                src="/screenshot-menubar.png"
                alt="Srota menu bar dropdown"
                width={300}
                height={234}
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  height: 'auto',
                  borderRadius: '12px',
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
