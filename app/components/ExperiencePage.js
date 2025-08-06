export default function ExperiencePage() {
  const experiences = [
    {
      title: "Team Lead – UI/UX Designer",
      company: "Light Heart Vision Website Re-design",
      period: "May – August 2025",
      type: "Academic Project",
      description: "Led a team in redesigning the website for Light Heart Vision, focusing on modern, user-friendly, and accessible design solutions.",
      achievements: [
        "Produced high-fidelity wireframes, a detailed content map, and a complete style guide to align with the client’s brand and goals.",
        "Managed project timelines, coordinated team tasks, and facilitated communication between the client and the design team.",
        "Presented design concepts and revisions, implementing feedback to deliver a polished final redesign ready for development."
      ]
    },
    {
      title: "Test Lead – Quality Assurance Engineer",
      company: "WeSupport, Inc.",
      period: "2022 – 2023",
      type: "Full-time",
      description: "Directed a team of testers to ensure seamless functionality and user experience for web and mobile applications.",
      achievements: [
        "Designed and reviewed detailed test cases and scenarios based on user stories, emphasizing alignment with user needs and business goals.",
        "Collaborated cross-functionally with project managers, product owners, and developers to translate requirements into actionable testing strategies, improving product usability.",
        "Championed quality standards that enhanced product reliability and end-user satisfaction."
      ]
    },
    {
      title: "Senior Tester – Quality Assurance Engineer",
      company: "WeSupport, Inc.",
      period: "2021 – 2022",
      type: "Full-time",
      description: "Identified and communicated usability issues during rigorous testing cycles, supporting continuous product improvement.",
      achievements: [
        "Maintained comprehensive documentation to track user acceptance and feedback, enabling data-driven design refinements.",
        "Executed user acceptance testing (UAT) to validate that products met user expectations and functional requirements.",
        "Awarded \"MVP\" for proactive problem-solving and dedication to delivering user-centric solutions."
      ]
    },
    {
      title: "Junior Tester – Quality Assurance Engineer",
      company: "WeSupport, Inc.",
      period: "2019 – 2021",
      type: "Full-time",
      description: "Assisted in developing and executing test plans focused on validating user flows and functionality.",
      achievements: [
        "Organized testing documentation ensuring clear communication of acceptance criteria and user requirements.",
        "Recognized for consistently demonstrating attention to detail and a collaborative mindset in supporting project goals."
      ]
    }
  ]

  return (
    <section id="experience" className="page">
      <div className="container">
        <h1 className="page-title">Experience</h1>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div className="experience-info">
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                </div>
                <div className="experience-meta">
                  <span className="period">{exp.period}</span>
                  <span className="type">{exp.type}</span>
                </div>
              </div>
              <p className="experience-description">
                {exp.description}
              </p>
              <div className="achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
