import { useState, useEffect } from 'react'

const roles = [
  'Web Developer',
  'React Developer',
  'Frontend Developer',
  'Problem Solver',
]

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let delay = deleting ? 40 : 90

    if (!deleting && text === current) delay = 1500
    if (deleting && text === '') delay = 400

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
      } else {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        )
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, roleIndex])

  return (
    <section className="hero">
      <div className="hero-text">
        <h1 className="gradient-text">A. David Villalobos Riveiro</h1>
        <p className="role">
          {text}
          <span className="cursor">|</span>
        </p>
        <p>I build clean, fast websites with React.</p>
        <a className="button" href="#projects">
          View my projects
        </a>
      </div>
      <img
        className="hero-img"
        src="/adonai_img.jpg"
        alt="Portrait of Adonai Villalobos"
      />
    </section>
  )
}

export default Hero