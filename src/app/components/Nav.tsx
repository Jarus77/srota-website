'use client'

import { useEffect, useState } from 'react'

import { DMG_DOWNLOAD_URL } from '../downloadUrl'
import { trackSrotaDownload } from '../trackDownload'

export default function Nav() {
  const [scrollY, setScrollY] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY)
      if (menuOpen) setMenuOpen(false)
    }
    const onResize = () => setIsMobile(window.innerWidth < 640)

    // Set immediately on mount
    setScrollY(window.scrollY)
    setIsMobile(window.innerWidth < 640)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  const atTop = scrollY < 20
  const compact = scrollY > 80

  const pillStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 16px',
    background: atTop && !menuOpen ? 'transparent' : 'rgba(18,16,12,0.90)',
    backdropFilter: atTop && !menuOpen ? 'none' : 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: atTop && !menuOpen ? 'none' : 'blur(20px) saturate(180%)',
    border: atTop && !menuOpen ? '1px solid transparent' : '1px solid rgba(255,255,255,0.1)',
    borderRadius: menuOpen ? '18px' : '999px',
    boxShadow: atTop && !menuOpen ? 'none' : '0 8px 32px rgba(0,0,0,0.3)',
    transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
    width: '100%',
    maxWidth: compact && !isMobile ? '560px' : '100%',
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          justifyContent: 'center',
          padding: compact ? '12px 16px' : '16px 16px',
          transition: 'padding 400ms cubic-bezier(0.4, 0, 0.2, 1)',
          pointerEvents: 'none',
        }}
      >
        <div style={{ ...pillStyle, pointerEvents: 'auto', flexDirection: 'column', gap: 0 }}>
          {/* Top row — always visible */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#F7F3EE', fontWeight: 500, fontSize: '16px' }}>
              Srota
            </a>

            {isMobile ? (
              /* Hamburger */
              <button
                onClick={() => setMenuOpen(o => !o)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '5px',
                  alignItems: 'flex-end',
                }}
                aria-label="Toggle menu"
              >
                <span style={{
                  display: 'block', width: menuOpen ? '22px' : '22px', height: '2px',
                  background: '#F7F3EE', borderRadius: '2px',
                  transition: 'transform 300ms, opacity 300ms',
                  transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                }} />
                <span style={{
                  display: 'block', width: '16px', height: '2px',
                  background: '#F7F3EE', borderRadius: '2px',
                  transition: 'opacity 300ms',
                  opacity: menuOpen ? 0 : 1,
                }} />
                <span style={{
                  display: 'block', width: '22px', height: '2px',
                  background: '#F7F3EE', borderRadius: '2px',
                  transition: 'transform 300ms, opacity 300ms',
                  transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                }} />
              </button>
            ) : (
              /* Desktop links */
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <a href="#features" style={linkStyle}>Features</a>
                <a href="#how-it-works" style={linkStyle}>How it works</a>
                <DownloadBtn />
              </div>
            )}
          </div>

          {/* Mobile dropdown */}
          {isMobile && menuOpen && (
            <div style={{
              width: '100%',
              paddingTop: '16px',
              paddingBottom: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              marginTop: '12px',
            }}>
              {[
                { label: 'Features', href: '#features' },
                { label: 'How it works', href: '#how-it-works' },
              ].map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: 'rgba(247,243,238,0.8)',
                    textDecoration: 'none',
                    fontSize: '16px',
                    padding: '10px 4px',
                    borderRadius: '8px',
                    display: 'block',
                  }}
                >
                  {label}
                </a>
              ))}
              <div style={{ paddingTop: '8px' }}>
                <DownloadBtn fullWidth />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

function DownloadBtn({ fullWidth }: { fullWidth?: boolean }) {
  return (
    <a
      href={DMG_DOWNLOAD_URL}
      style={{
        background: '#F7F3EE',
        color: '#1C1A16',
        padding: '7px 18px',
        borderRadius: '999px',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: 500,
        display: fullWidth ? 'block' : 'inline-block',
        textAlign: fullWidth ? 'center' : 'left',
        transition: 'opacity 200ms',
      }}
      onClick={() => trackSrotaDownload(fullWidth ? 'nav_mobile' : 'nav')}
      onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
    >
      Download
    </a>
  )
}

const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  fontSize: '15px',
  color: 'rgba(247,243,238,0.8)',
  transition: 'color 200ms',
}
