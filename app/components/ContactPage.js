'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields.')
      return
    }

    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.')
      return
    }

    // Simulate form submission
    alert('Thank you for your message! I\'ll get back to you soon.')
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSocialClick = (platform) => {
    const socialLinks = {
      linkedin: 'https://linkedin.com/in/josephpatrickwilson',
      github: 'https://github.com/josephpatrickwilson'
    }
    
    const url = socialLinks[platform]
    if (url) {
      window.open(url, '_blank')
    }
  }

  return (
    <section id="contact" className="page">
      <div className="container">
        <h1 className="page-title">Get In Touch</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Let&apos;s Connect</h2>
            <p>I&apos;m always interested in discussing new opportunities, creative projects, or just connecting with fellow designers and developers.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>josephpatrickwilson2@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>343-297-0275</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Ottawa, Ontario, Canada</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h3>Find me online</h3>
              <div className="social-buttons">
                <a 
                  href="#" 
                  className="social-btn linkedin"
                  onClick={(e) => {
                    e.preventDefault()
                    handleSocialClick('linkedin')
                  }}
                >
                  <i className="fab fa-linkedin"></i>
                  LinkedIn
                </a>
                <a 
                  href="#" 
                  className="social-btn github"
                  onClick={(e) => {
                    e.preventDefault()
                    handleSocialClick('github')
                  }}
                >
                  <i className="fab fa-github"></i>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Send a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
