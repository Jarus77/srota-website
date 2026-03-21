import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductShowcase from './components/ProductShowcase'
import HowItWorks from './components/HowItWorks'
import WorksAnywhere from './components/WorksAnywhere'
import HinglishDemo from './components/HinglishDemo'
import DownloadCTA from './components/DownloadCTA'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <HowItWorks />
        <WorksAnywhere />
        <HinglishDemo />
        <DownloadCTA />
      </main>
      <footer
        style={{
          borderTop: '1px solid rgba(0,0,0,0.07)',
          padding: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '13px',
          color: 'var(--text-secondary)',
        }}
      >
        <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>
          Srota · Voice Dictation
        </span>
        <span>
          © 2025 Srota ·{' '}
          <a
            href="https://susrota.com"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
          >
            susrota.com
          </a>
        </span>
      </footer>
    </>
  )
}
