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
]

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project) => (
        <article key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link}>View project</a>
        </article>
      ))}
    </section>
  )
}

export default Projects