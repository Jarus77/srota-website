'use client'

import { useEffect, useRef, useState } from 'react'

const TRANSCRIPT = `to kal branch mein jaake system check karta hun,\naur agar koi issue aaya to deploy rollback kar denge`

const BAR_HEIGHTS = [8, 18, 28, 36, 42, 36, 28, 18, 10, 22, 34, 40, 34, 22, 12, 26, 38, 44, 38, 26]

export default function HinglishDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [animated])

  return (
    <section style={{ padding: '96px 24px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <p
          className="serif-italic"
          style={{
            fontSize: 'clamp(20px, 2.5vw, 26px)',
            fontWeight: 400,
            color: 'var(--text-primary)',
            textAlign: 'center',
            marginBottom: '48px',
            lineHeight: 1.4,
          }}
        >
          &ldquo;The only transcription tool that speaks your language — both of them&rdquo;
        </p>

        <div
          ref={ref}
          style={{
            background: 'rgba(255,255,255,0.55)',
            border: '1px solid rgba(26,158,122,0.2)',
            borderLeft: '3px solid var(--accent)',
            borderRadius: '12px',
            padding: '32px',
          }}
        >
          {/* Waveform */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              gap: '3px',
              height: '52px',
              marginBottom: '28px',
            }}
          >
            {BAR_HEIGHTS.map((h, i) => (
              <div
                key={i}
                className="wave-bar"
                style={{
                  height: `${h}px`,
                  animationDelay: `${i * 0.07}s`,
                  width: '3px',
                }}
              />
            ))}
          </div>

          {/* Code label */}
          <p
            style={{
              fontFamily: 'var(--font-geist-mono, monospace)',
              fontSize: '12px',
              color: 'rgba(61,217,172,0.5)',
              marginBottom: '12px',
            }}
          >
            // Srota typed:
          </p>

          {/* Transcript */}
          <div
            style={{
              fontFamily: 'var(--font-geist-mono, monospace)',
              fontSize: '14px',
              color: 'var(--text-primary)',
              lineHeight: 1.8,
              overflow: 'hidden',
            }}
          >
            {animated ? (
              <>
                <TypewriterText text={TRANSCRIPT} />
                <span
                  style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '16px',
                    background: 'var(--accent)',
                    verticalAlign: 'middle',
                    marginLeft: '2px',
                    animation: 'blink 1s step-end infinite',
                  }}
                />
              </>
            ) : (
              <span style={{ opacity: 0 }}>{TRANSCRIPT}</span>
            )}
          </div>
        </div>

        <p
          style={{
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '13px',
            color: 'var(--text-secondary)',
          }}
        >
          Hinglish Mode (Roman script) — toggle from menu bar
        </p>
      </div>
    </section>
  )
}

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, 35)
    return () => clearInterval(interval)
  }, [text])

  return <span style={{ whiteSpace: 'pre-wrap' }}>{displayed}</span>
}
