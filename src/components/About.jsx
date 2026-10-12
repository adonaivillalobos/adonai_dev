import {
  FileCode,
  Palette,
  Braces,
  Atom,
  Layers,
  Code,
  Wind,
  GitBranch,
} from 'lucide-react'

const skills = [
  { name: 'HTML', Icon: FileCode },
  { name: 'CSS', Icon: Palette },
  { name: 'JavaScript', Icon: Braces },
  { name: 'React', Icon: Atom },
  { name: 'Next.js', Icon: Layers },
  { name: 'TypeScript', Icon: Code },
  { name: 'Tailwind CSS', Icon: Wind },
  { name: 'Git', Icon: GitBranch },
]

function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <p>
        I'm a web developer who enjoys building clean, fast and easy-to-use
        websites. I like turning ideas into real projects, from the first
        layout to the final deployment.
      </p>
      <h3>Skills</h3>
      <ul className="skills">
        {skills.map(({ name, Icon }) => (
          <li key={name}>
            <Icon size={18} />
            {name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About