export default function SkillsPage() {
  const skillCategories = [
    {
      title: "UI/UX Design",
      skills: ["Figma", "User Research", "Style Guides", "Wireframing", "Prototyping"]
    },
    {
      title: "Frontend Development",
      skills: ["HTML/CSS", "JavaScript", "Vue.js", "Responsive Design", "Cross-browser Compatibility"]
    },
    {
      title: "CMS & Tools",
      skills: ["WordPress", "Shopify", "Drupal"]
    },
    {
        title: "Quality Assurance",
        skills: ["Manual Testing", "Website & Mobile Testing", "Bug Tracking", "Jira", "User Acceptance Testing", "Performance/Regression Testing"]
    }
  ]

  const uniquePoints = [
    {
      title: "Design + Development Bridge",
      description: "My technical background allows me to create designs that are not only beautiful but also technically feasible and optimized for development."
    },
    {
      title: "Quality-First Mindset",
      description: "Years of QA experience have instilled a meticulous attention to detail and user-focused testing approach in all my design work."
    }
  ]

  return (
    <section id="skills" className="page">
      <div className="container">
        <h1 className="page-title">Skills & Expertise</h1>
        
        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-bullet"></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-unique">
          <h3>What Sets Me Apart</h3>
          <div className="unique-points">
            {uniquePoints.map((point, index) => (
              <div key={index} className="unique-point">
                <h4>{point.title}</h4>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
