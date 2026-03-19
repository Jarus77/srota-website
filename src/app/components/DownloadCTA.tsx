'use client'

import Image from 'next/image'

import { DMG_DOWNLOAD_URL } from '../downloadUrl'

export default function DownloadCTA() {
  return (
    <section
      id="download"
      style={{
        padding: '120px 24px',
        textAlign: 'center',
        borderTop: '1px solid rgba(0,0,0,0.07)',
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
        <h2
          className="serif"
          style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 400,
            color: 'var(--text-primary)',
            lineHeight: 1.2,
          }}
        >
          Ready to speak freely?
        </h2>

        <a
          href={DMG_DOWNLOAD_URL}
          download="srota.dmg"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'var(--accent)',
            color: '#fff',
            padding: '16px 44px',
            borderRadius: '999px',
            textDecoration: 'none',
            fontSize: '17px',
            fontWeight: 600,
            transition: 'transform 200ms, box-shadow 200ms',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(61,217,172,0.3)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          Download for Mac
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1v10M4 7l4 4 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 13h14" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </a>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            Requires macOS 14+ · Apple Silicon only
          </p>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            Free · No account · No subscription
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '8px' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', letterSpacing: '0.01em' }}>
            Questions, feedback, or just want to say hi?
          </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 20px',
            borderRadius: '999px',
            border: '1px solid rgba(0,0,0,0.1)',
            background: 'rgba(255,255,255,0.5)',
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="4" width="20" height="16" rx="3" stroke="var(--accent)" strokeWidth="1.5"/>
            <path d="M2 7l10 7 10-7" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <a
            href="mailto:surajprasad8977@gmail.com"
            style={{
              fontSize: '14px',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontWeight: 500,
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
          >
            surajprasad8977@gmail.com
          </a>
        </div>
        </div>
      </div>
    </section>
  )
}
