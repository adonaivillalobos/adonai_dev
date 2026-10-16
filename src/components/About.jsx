import {
  FileCode,
  Palette,
  Braces,
  Code,
  Atom,
  Layers,
  Wind,
  Hexagon,
  Server,
  Terminal,
  Database,
  Table,
  Leaf,
  Zap,
  GitBranch,
  Laptop,
} from 'lucide-react'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', Icon: FileCode },
      { name: 'CSS', Icon: Palette },
      { name: 'JavaScript', Icon: Braces },
      { name: 'TypeScript', Icon: Code },
      { name: 'React', Icon: Atom },
      { name: 'Next.js', Icon: Layers },
      { name: 'Tailwind CSS', Icon: Wind },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', Icon: Hexagon },
      { name: 'Express', Icon: Server },
      { name: 'Python', Icon: Terminal },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', Icon: Database },
      { name: 'MySQL', Icon: Table },
      { name: 'MongoDB', Icon: Leaf },
      { name: 'Supabase', Icon: Zap },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', Icon: GitBranch },
      { name: 'VS Code', Icon: Laptop },
    ],
  },
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
      {skillGroups.map((group) => (
        <div key={group.title}>
          <h4 className="skill-category">{group.title}</h4>
          <ul className="skills">
            {group.skills.map(({ name, Icon }) => (
              <li key={name}>
                <Icon size={18} />
                {name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default About