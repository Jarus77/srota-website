'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProductShowcase() {
  const [hovered, setHovered] = useState(false)

  return (
    <section style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <h2
          className="serif"
          style={{
            fontSize: 'clamp(32px, 4vw, 42px)',
            fontWeight: 400,
            marginBottom: '48px',
            color: 'var(--text-primary)',
          }}
        >
          See what you&apos;ve been saying.
        </h2>

        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: 'inline-block',
            width: '100%',
            border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(0,0,0,0.15)',
            transform: hovered
              ? 'perspective(1200px) rotateX(0deg)'
              : 'perspective(1200px) rotateX(4deg)',
            transition: 'transform 400ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <Image
            src="/screenshot-dashboard.png"
            alt="Srota dashboard showing 3,187 words today, 21 transcriptions, and recent transcription history"
            width={900}
            height={540}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}
