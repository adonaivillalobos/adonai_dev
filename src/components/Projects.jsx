import Reveal from './Reveal'

const projects = [
  {
    id: 1,
    title: 'StudyBuddy',
    description: 'A study app built with a team using Next.js, TypeScript and Tailwind.',
    link: 'https://team-study-buddy-project.vercel.app/',
  },
  {
    id: 2,
    title: 'Library API Frontend',
    description: 'A frontend that connects to a library API and displays its data.',
    link: '#',
  },
  {
    id: 3,
    title: 'Berlin Tourism App',
    description: 'A tourism app that helps visitors explore Berlin.',
    link: '#',
  },
  {
    id: 4,
    title: 'Internship Project',
    description: 'A project I worked on during my internship, built with React and Tailwind.',
    link: 'https://adonai-internship.vercel.app/',
  },
  {
    id: 5,
    title: 'LDS Sacrament Meeting Planner',
    description: 'A meeting planner app for organizing LDS sacrament meetings.',
    link: 'https://sacrament-meetings-amber.vercel.app/',
  },
]

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <Reveal key={project.id} delay={index * 150}>
          <article>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View project
            </a>
          </article>
        </Reveal>
      ))}
    </section>
  )
}

export default Projects