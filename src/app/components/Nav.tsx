'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    // Set immediately on mount so we never start with wrong state
    setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Only truly transparent when at the very top of the page
  const atTop = scrollY < 20
  // Compact pill once user has scrolled a little
  const compact = scrollY > 80

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'center',
        padding: compact ? '12px 16px' : '20px 24px',
        transition: 'padding 400ms cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '32px',
          padding: '10px 20px',
          background: atTop ? 'transparent' : 'rgba(18,16,12,0.88)',
          backdropFilter: atTop ? 'none' : 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: atTop ? 'none' : 'blur(20px) saturate(180%)',
          border: atTop ? '1px solid transparent' : '1px solid rgba(255,255,255,0.1)',
          borderRadius: '999px',
          boxShadow: atTop ? 'none' : '0 8px 32px rgba(0,0,0,0.3)',
          transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
          maxWidth: compact ? '560px' : '900px',
          width: '100%',
        }}
      >
        <a
          href="#"
          style={{
            textDecoration: 'none',
            color: '#F7F3EE',
            fontWeight: 500,
            fontSize: '16px',
            opacity: atTop ? 0.9 : 1,
          }}
        >
          Srota
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          <a
            href="#features"
            style={{
              textDecoration: 'none',
              fontSize: '15px',
              color: atTop ? 'rgba(247,243,238,0.85)' : 'rgba(247,243,238,0.75)',
              transition: 'color 200ms',
            }}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            style={{
              textDecoration: 'none',
              fontSize: '15px',
              color: atTop ? 'rgba(247,243,238,0.85)' : 'rgba(247,243,238,0.75)',
              transition: 'color 200ms',
            }}
          >
            How it works
          </a>
          <a
            href="https://github.com/Jarus77/srota/releases/download/v2.0.0/Srota.dmg"
            style={{
              background: '#F7F3EE',
              color: '#1C1A16',
              padding: '7px 18px',
              borderRadius: '999px',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'opacity 200ms',
              flexShrink: 0,
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  )
}
