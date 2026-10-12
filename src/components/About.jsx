const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Git',
  'Python',
]

function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <p>
        I'm a Software Engineer student who enjoys building clean, fast and easy-to-use
        websites. I like turning ideas into real projects, from the first
        layout to the final deployment.
      </p>
      <h3>Skills</h3>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default About