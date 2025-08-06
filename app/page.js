'use client'

import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ExperiencePage from './components/ExperiencePage'
import ProjectsPage from './components/ProjectsPage'
import SkillsPage from './components/SkillsPage'
import ContactPage from './components/ContactPage'
import { usePortfolio } from './context/PortfolioContext'

export default function Home() {
  const { currentPage, showPage } = usePortfolio()

  useEffect(() => {
    const hash = window.location.hash.substring(1)
    if (hash && hash !== 'home') {
      showPage(hash, false)
    }
  }, [showPage])

  return (
    <>
      <Navbar />
      <main id="main-content">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'experience' && <ExperiencePage />}
        {currentPage === 'projects' && <ProjectsPage />}
        {currentPage === 'skills' && <SkillsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
    </>
  )

}


