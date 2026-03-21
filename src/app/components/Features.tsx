'use client'

import { useState } from 'react'
import Image from 'next/image'

const features = [
  {
    img: '/local2.jpeg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#3DD9AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '100% Local',
    body: 'No audio ever leaves your Mac. Transcription runs entirely on-device using Apple Silicon. Your words stay yours.',
  },
  {
    img: '/apps.png',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9l-7-7z" stroke="#3DD9AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="13 2 13 9 20 9" stroke="#3DD9AC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Works in Any App',
    body: 'Cursor-aware typing. Works in Slack, Notion, VSCode, Terminal, Mail — anywhere. No integrations needed.',
  },
  {
    img: '/noise.jpeg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4" stroke="#3DD9AC" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M2.5 12c0-2.5 2-4.5 4.5-4.5M21.5 12c0-2.5-2-4.5-4.5-4.5" stroke="#3DD9AC" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
    title: 'Noise-aware recording',
    body: 'Designed to stay usable in real rooms, not just silent ones. Srota focuses on your voice so dictation feels steady and reliable.',
  },
]

export default function Features() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="features" style={{ padding: '76px 24px 72px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2
          className="serif"
          style={{
            fontSize: 'clamp(32px, 4vw, 42px)',
            fontWeight: 400,
            textAlign: 'center',
            marginBottom: '8px',
            color: 'var(--text-primary)',
          }}
        >
          Features
        </h2>
        <div
          style={{
            width: '48px',
            height: '1px',
            background: 'var(--accent)',
            margin: '0 auto 40px',
          }}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: `1px solid ${hovered === i ? 'var(--accent)' : 'rgba(0,0,0,0.08)'}`,
                background: 'rgba(255,255,255,0.97)',
                boxShadow: hovered === i ? '0 0 32px rgba(26,158,122,0.15)' : '0 1px 4px rgba(0,0,0,0.04)',
                transition: 'all 250ms ease',
                cursor: 'default',
              }}
            >
              {/* Image zone */}
              <div style={{ height: '176px', position: 'relative', overflow: 'hidden', background: '#f5f5f5' }}>
                <Image
                  src={f.img}
                  alt={f.title}
                  fill
                  style={{ objectFit: 'contain', padding: '10px' }}
                  sizes="(max-width: 768px) 100vw, 380px"
                />
                {/* Fade to white at bottom */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60px',
                    background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.97))',
                  }}
                />
                {/* Small icon bottom-left */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '20px',
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: 'rgba(61,217,172,0.15)',
                    border: '1px solid rgba(61,217,172,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                  }}
                >
                  {f.icon}
                </div>
              </div>

              {/* Text zone */}
              <div style={{ padding: '24px 24px 26px' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 500, color: '#09090F', marginBottom: '8px' }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(9,9,15,0.55)', lineHeight: 1.65 }}>
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
