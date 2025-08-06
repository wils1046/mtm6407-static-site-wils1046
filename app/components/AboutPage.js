export default function AboutPage() {
  return (
    <section id="about" className="page">
      <div className="container">
        <h1 className="page-title">About Me</h1>
        
        <div className="about-content">
          <div className="about-main">
            <div className="about-text">
              <h2>Hello, I&apos;m Joseph</h2>
              <p>I&apos;m a practical and detail-driven UI/UX designer with hands-on experience in front-end development and QA testing. I&apos;ve led website redesigns that improved usability, consistency, and performance across different platforms.</p>
              
              <p>My journey began with a Bachelor&apos;s in Information Technology, followed by hands-on experience in quality assurance. This technical foundation gives me a deep understanding of how designs translate into real-world applications.</p>
              
              <p>Currently pursuing Interactive Media Design at Algonquin College, I&apos;m constantly evolving my skills to stay at the forefront of design and technology trends.</p>
            </div>
            <div className="about-avatar">
              <div className="avatar-circle">JPW</div>
              <h3>Based in Ottawa, ON</h3>
              <p>Available for opportunities</p>
            </div>
          </div>

          <div className="about-details">
            <div className="detail-card">
              <i className="fas fa-graduation-cap card-icon"></i>
              <h3>Education</h3>
              <div className="education-item">
                <h4>Interactive Media Design</h4>
                <p>Algonquin College, Ottawa, ON</p>
                <span className="date">2024 – 2025</span>
              </div>
              <div className="education-item">
                <h4>Bachelor of Science in Information Technology</h4>
                <p>Batangas State University, Philippines</p>
                <span className="date">2015 – 2019</span>
              </div>
            </div>

            <div className="detail-card">
              <i className="fas fa-briefcase card-icon"></i>
              <h3>Experience Highlights</h3>
              <div className="highlight-list">
                <div className="highlight-item">
                  <span className="bullet"></span>
                  <span>4+ years in Quality Assurance</span>
                </div>
                <div className="highlight-item">
                  <span className="bullet"></span>
                  <span>Team leadership experience</span>
                </div>
                <div className="highlight-item">
                  <span className="bullet"></span>
                  <span>UI/UX design specialization</span>
                </div>
                <div className="highlight-item">
                  <span className="bullet"></span>
                  <span>Front-end development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
