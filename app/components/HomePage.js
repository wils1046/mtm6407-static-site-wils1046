'use client'

import { usePortfolio } from '../context/PortfolioContext'

export default function HomePage() {
  const { showPage } = usePortfolio()

  return (
    <section id="home" className="page active">
      <div className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-avatar">JPW</div>
            <h1 className="hero-title">
              Joseph Patrick
              <span className="gradient-text"> Wilson</span>
            </h1>
            <p className="hero-subtitle">
              UI/UX Designer & Quality Assurance Engineer crafting digital experiences that delight users and exceed expectations
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary" 
                onClick={() => showPage('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => showPage('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Quick highlights */}
          <div className="highlights-grid">
            <div className="highlight-card">
              <i className="fas fa-palette highlight-icon"></i>
              <h3>UI/UX Design</h3>
              <p>Creating user-centered designs with research, wireframing, and prototyping</p>
            </div>
            <div className="highlight-card">
              <i className="fas fa-code highlight-icon"></i>
              <h3>Frontend Development</h3>
              <p>Building responsive, accessible web applications with modern technologies</p>
            </div>
            <div className="highlight-card">
              <i className="fas fa-globe highlight-icon"></i>
              <h3>Quality Assurance</h3>
              <p>Ensuring exceptional user experiences through comprehensive testing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
