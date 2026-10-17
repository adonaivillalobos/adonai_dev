function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>Take a look at my resume or download a copy.</p>
      <div className="resume-actions">
        <a
          className="button"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          View resume
        </a>
        <a
          className="button button-outline"
          href="/resume.pdf"
          download="Adonai-Villalobos-Resume.pdf"
        >
          Download PDF
        </a>
      </div>
    </section>
  )
}

export default Resume