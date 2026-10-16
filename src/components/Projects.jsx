import Reveal from './Reveal'

const projects = [
  {
    id: 1,
    title: 'StudyBuddy',
    description: 'A study app built with a team using Next.js, TypeScript and Tailwind.',
    link: 'https://team-study-buddy-project.vercel.app/',
    image: '/studybuddy.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    id: 2,
    title: 'Internship Project',
    description: 'A project I worked on during my internship, built with React and Tailwind.',
    link: 'https://adonai-internship.vercel.app/',
    image: '/ultraverse.jpg',
    tags: ['React', 'Tailwind'],
  },
  {
    id: 3,
    title: 'LDS Sacrament Meeting Planner',
    description: 'A meeting planner app for organizing LDS sacrament meetings.',
    link: 'https://sacrament-meetings-amber.vercel.app/',
    image: '/sacramentmeeting.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Postgres'],
  },
    {
    id: 4,
    title: 'Skinstric Internship Website',
    description: 'Skinstric developed an A.I. that creates a highly-personalized routine tailored to what your skin needs',
    link: 'https://skinstric-internship.vercel.app/',
    image: '/skinstric.jpg',
    tags: ['Next.js', 'Tailwind'],
  },
]

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <Reveal key={project.id} delay={index * 150}>
          <article className="project-card">
            <img
              className="project-img"
              src={project.image}
              alt={`${project.title} preview`}
              loading="lazy"
            />
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.tags.length > 0 && (
                <ul className="tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
              {project.link === '#' ? (
                <span className="coming-soon">Live demo coming soon</span>
              ) : (
                <a href={project.link} target="_blank" rel="noreferrer">
                  View project
                </a>
              )}
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  )
}

export default Projects