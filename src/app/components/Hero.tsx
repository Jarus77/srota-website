'use client'

import { useState, useEffect } from 'react'
import { DMG_DOWNLOAD_URL } from '../downloadUrl'

const WORDS = ['Local', 'No account', 'No subscription']

function CyclingBadge() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % WORDS.length)
        setVisible(true)
      }, 320)
    }, 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <span
      style={{
        display: 'inline-block',
        background: 'rgba(247,243,238,0.11)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        border: '1px solid rgba(247,243,238,0.22)',
        borderRadius: '12px',
        padding: '4px 20px 6px',
        fontStyle: 'italic',
        fontFamily: 'var(--font-instrument-serif, Georgia, serif)',
        fontSize: 'clamp(16px, 1.8vw, 20px)',
        color: '#F7F3EE',
        minWidth: '160px',
        textAlign: 'center',
        transition: 'opacity 320ms ease, transform 320ms ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0px)' : 'translateY(8px)',
        willChange: 'opacity, transform',
      }}
    >
      {WORDS[index]}
    </span>
  )
}

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          zIndex: 0,
          transform: 'scale(1.12) translateZ(0)',
          willChange: 'transform',
        }}
      >
        <source src="/video/clip.mp4" type="video/mp4" />
      </video>

      {/* Subtle dark veil */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.08)',
          zIndex: 1,
        }}
      />

      {/* Top fade for nav readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '160px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.18), transparent)',
          zIndex: 2,
        }}
      />

      {/* Content — split top/bottom with space-between */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 'clamp(100px, 14vh, 140px)',
          paddingBottom: 'clamp(48px, 8vh, 80px)',
          paddingLeft: '24px',
          paddingRight: '24px',
          textAlign: 'center',
        }}
      >
        {/* Top group — headline + subheadline */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-instrument-serif, Georgia, serif)',
              fontSize: 'clamp(48px, 7.5vw, 82px)',
              fontWeight: 400,
              color: '#F7F3EE',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: '28px',
            }}
          >
            <span
              style={{
                fontStyle: 'italic',
                display: 'inline-block',
                position: 'relative',
              }}
            >
              Speak.
              <svg
                viewBox="0 0 120 10"
                style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: 0,
                  width: '100%',
                  height: '10px',
                  overflow: 'visible',
                }}
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7 C20 3, 50 9, 80 5 C95 3, 110 7, 118 6"
                  stroke="rgba(247,243,238,0.5)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {' '}
            <span
              style={{
                display: 'inline-block',
                border: '1.5px solid rgba(247,243,238,0.5)',
                borderRadius: '8px',
                padding: '0 16px 4px',
                fontStyle: 'italic',
              }}
            >
              It types.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: 'clamp(17px, 2vw, 20px)',
              color: 'rgba(247,243,238,0.78)',
              maxWidth: '480px',
              lineHeight: 1.55,
            }}
          >
            Voice transcription for{' '}
            <span
              style={{
                position: 'relative',
                display: 'inline-block',
                color: '#F7F3EE',
                fontWeight: 500,
              }}
            >
              every app
              <svg
                viewBox="0 0 80 6"
                style={{
                  position: 'absolute',
                  bottom: '-3px',
                  left: 0,
                  width: '100%',
                  height: '6px',
                  overflow: 'visible',
                }}
                preserveAspectRatio="none"
              >
                <path
                  d="M1 4 C15 1, 40 5, 60 2 C68 1, 75 4, 79 3"
                  stroke="rgba(247,243,238,0.7)"
                  strokeWidth="1.8"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            . 100% on-device.
          </p>
        </div>

        {/* Bottom group — CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <a
            href={DMG_DOWNLOAD_URL}
            download="srota.dmg"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#F7F3EE',
              color: '#09090F',
              padding: '14px 36px',
              borderRadius: '999px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 500,
              transition: 'transform 200ms, box-shadow 200ms',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(247,243,238,0.25)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Download for Mac
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M6.5 1v8M3 5.5l3.5 3.5 3.5-3.5" stroke="#09090F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 11h11" stroke="#09090F" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
