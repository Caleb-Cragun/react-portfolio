import './App.css'

function App() {

  return (
    <>
      <section className='image-section'>
        <img className="profile-image" src="/images/profile-image.jpg" alt="linked-in" />
      </section>
      <section className='about-section'>
        <h3>About me</h3>
        <p className='about-me-container'>
          Howdy! I'm Caleb. I'm an adaptive full-stack web developer who can learn any new language or technology. I'm skilled in debugging, creating front-end customized designs for clients, and working with back-end technologies to interface with supporting databases.
        </p>
      </section>
      <section className='technology-section'>
        <h3>Technology Experience</h3>
        <div className='tech-logo-container'>
          <img className='tech-logo' src="/logos/html5.png" alt="html5" />
          <img className='tech-logo' src="/logos/css3.png" alt="css3" />
          <img className='tech-logo' src="/logos/javascript.svg" alt="javascript" />
          <img className='tech-logo' src="/logos/react.png" alt="react" />
          <img className='tech-logo' src="/logos/python.svg" alt="python" />
          <img className='tech-logo' src="/logos/ruby-on-rails.png" alt="rails" />
          <img className='tech-logo' src="/logos/mongodb.svg" alt="mongodb" />
          <img className='tech-logo' src="/logos/jquery.png" alt="jquery" />
        </div>
      </section>
      <section className='social-section'>
        <h3>Social Links</h3>
        <div className='social-logo-container'>
          <a href="https://linkedin.com/in/caleb-cragun-a301a2b4" target="_blank" rel="noopener noreferrer">
            <img className="social-logo" src="/logos/linked-in.png" alt="linked-in" />
          </a>
          <a href="https://github.com/Caleb-Cragun" target="_blank" rel="noopener noreferrer">
            <img className='social-logo' src="/logos/github.svg" alt="github" />
          </a>
        </div>
      </section>
    </>
  )
}

export default App
