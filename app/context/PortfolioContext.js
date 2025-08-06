'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

const PortfolioContext = createContext()

export function PortfolioProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('home')

  const showPage = useCallback((pageId, updateHistory = true) => {
    setCurrentPage(pageId)

    if (updateHistory && typeof window !== 'undefined') {
      const url = pageId === 'home' ? '/' : `#${pageId}`
      window.history.pushState({ page: pageId }, '', url)
    }

    const pageTitles = {
      home: 'Joseph Patrick Wilson - UI/UX Designer & QA Engineer',
      about: 'About - Joseph Patrick Wilson',
      experience: 'Experience - Joseph Patrick Wilson',
      projects: 'Projects - Joseph Patrick Wilson',
      skills: 'Skills - Joseph Patrick Wilson',
      contact: 'Contact - Joseph Patrick Wilson'
    }

    if (typeof document !== 'undefined') {
      document.title = pageTitles[pageId] || pageTitles.home
    }

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  return (
    <PortfolioContext.Provider value={{ currentPage, showPage }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider')
  }
  return context
}
