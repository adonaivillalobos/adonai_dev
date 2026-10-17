import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Resume />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  )
}

export default App