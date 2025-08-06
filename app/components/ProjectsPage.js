export default function ProjectsPage() {
  const projects = [
    {
      title: "Light Heart Vision - Website Redesign",
      category: "UI/UX Design",
      icon: "fas fa-palette",
      description: "We partnered with Light Heart Vision, a profit organization focused on wellness and personal growth, to redesign their existing website. The goal was to create a more user-friendly, engaging, and visually aligned platform that clearly communicates their services and values.",
      technologies: ["Figma", "User Research", "Style Guide", "Wireframing", "Prototyping"],
      link: "https://wils104637cc.myportfolio.com/website-redesign-project-light-heart-vision"
    },
    {
      title: "Champa Thai - Website Redesign",
      category: "UI/UX Design",
      icon: "fas fa-palette",
      description: "Champa Thai has been serving authentic Thai cuisine in Ottawa since 2012, offering a true taste of Thailand with its delicious and traditional dishes.",
      technologies: ["Figma", "User Research", "Style Guide", "Wireframing", "Prototyping"],
      link: "https://wils104637cc.myportfolio.com/website-redesign-project-champa-thai"
    },
    {
      title: "Pathfinder Pro - Application Design Project",
      category: "Application Design",
      icon: "fas fa-palette",
      description: "Pathfinder Pro is an application designed to enhance safety and preparedness for outdoor enthusiasts. Created with both hikers and rescuers in mind, the platform provides real-time tools and resources that promote responsible hiking while supporting emergency response efforts in wilderness areas.",
      technologies: ["Figma", "User Research", "Style Guide", "Wireframing", "Prototyping"],
      link: "https://wils104637cc.myportfolio.com/application-design-project-pathfinder-pro"
    },
    {
      title: "Pokédex - Website Design and Development",
      category: "Website Development",
      icon: "fas fa-palette",
      description: "The Pokédex App is a responsive web application built using the PokéAPI. It allows users to explore detailed information about various Pokémon, including their types, stats, and abilities.",
      technologies: ["Visual Studio", "HTML", "CSS", "JavaScript", "Figma", "User Research", "Style Guide", "Wireframing", "Prototyping"],
      link: "https://wils104637cc.myportfolio.com/website-design-and-development-pokedex"
    },
    {
      title: "JODEX - Website Design and Development",
      category: "Website Development",
      icon: "fas fa-palette",
      description: "At JODEX, we provide a full suite of digital solutions tailored to support businesses at every stage of their online journey. ",
      technologies: ["Visual Studio", "HTML", "CSS", "JavaScript", "Figma", "User Research", "Style Guide", "Wireframing", "Prototyping"],
      link: "https://wils104637cc.myportfolio.com/web-and-design-project-jodex"
    },
    {
      title: "Digital Graphics",
      category: "Digital Graphics",
      icon: "fas fa-palette",
      description: "Digital graphics projects - Algonquin College (Term 1)",
      technologies: ["Adobe Illustrator", "Adobe Photoshop"],
      link: "https://wils104637cc.myportfolio.com/digital-graphics"
    }
  ]

  const handleProjectClick = (link) => {
    if (link === '#') {
      alert('Project details will be available soon!')
    } else {
      window.open(link, '_blank')
    }
  }

  return (
    <section id="projects" className="page">
      <div className="container">
        <h1 className="page-title">Projects</h1>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <i className={`${project.icon} project-icon`}></i>
                <span className="project-category">{project.category}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="project-link"
                  onClick={(e) => {
                    e.preventDefault()
                    handleProjectClick(project.link)
                  }}
                >
                  View Project <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
