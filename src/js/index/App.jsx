import '/src/css/index/App.css'
import Navbar from '/src/components/Navbar'

const scpNumber = Math.floor(Math.random()*900000) + 10000;
function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='col-1'>
          <section className='image-section'>
            <img className="profile-image" src="/images/profile-image.jpg" alt="linked-in" />
          </section>
          <section className='social-section'>
            <div className='social-logo-container'>
              <a href="https://linkedin.com/in/caleb-cragun-a301a2b4" target="_blank" rel="noopener noreferrer">
                <img className="social-logo" src="/logos/linked-in.png" alt="linked-in" />
              </a>
              <a href="https://github.com/Caleb-Cragun" target="_blank" rel="noopener noreferrer">
                <img className='social-logo' src="/logos/github.svg" alt="github" />
              </a>
            </div>
          </section>
        </div>
        <div className='col-2'>
          <section className='description-section'>
            <h1><strong>Item #: </strong>SCP-{scpNumber} a.k.a. Caleb Cragun</h1>
            <h3><strong>Object Class: </strong>{Math.floor(Math.random()*100) == 99 ? 'Keter' : 'Euclid'}</h3>
            <hr/>
            <h3>Special Containment Procedures</h3>
            <p>
              SCP-{scpNumber} is to be contained in a standard humanoid containment cell at Site-██.
              The cell should be furnished similarly to a typical office space, complete with a desk, 
              computer workstation, and necessary programming equipment. SCP-{scpNumber} is allowed 
              access to the internet but is strictly prohibited from accessing or interacting with any 
              classified or sensitive information.
            </p>
            <p>
              SCP-{scpNumber}'s computer and internet activity are to be monitored at all times by 
              Foundation personnel. Any attempts made by SCP-{scpNumber} to access unauthorized 
              information or engage in activities that could potentially compromise security protocols 
              are to be immediately blocked, and SCP-{scpNumber} is to be reprimanded and 
              reminded of the restrictions.
            </p>
            <p>
              SCP-{scpNumber} is allowed supervised interaction with Foundation personnel for the 
              purpose of collaboration and information gathering related to its programming skills. 
              However, personnel are to exercise caution and avoid discussing any sensitive information 
              or classified projects in SCP-{scpNumber}'s presence.
            </p>
            <p>
              In the event that SCP-{scpNumber} develops anomalous properties or begins to pose a 
              potential security risk, it is to be transferred to a more secure containment facility and
              reclassified accordingly. Any changes in behavior or abilities exhibited by SCP-{scpNumber} 
              must be reported to the Site Director immediately.
            </p>
            <h3>Description</h3>
            <p>
              SCP-{scpNumber} appears to be an ordinary human male in his mid-thirties, possessing skills 
              and knowledge in front-end web development programming languages and tools. Physically, 
              SCP-{scpNumber} exhibits no abnormal characteristics or abilities.
            </p>
            <p>
              SCP-{scpNumber} demonstrates an exceptional aptitude for front-end web development, computer 
              programming, and problem-solving within these fields. It has been observed to possess extensive 
              knowledge of HTML, CSS, JavaScript, jQuery, AngularJS, React, Tailwind, Ruby, and Ruby on Rails 
              with limited knowledge in Python and PHP. SCP-{scpNumber}'s abilities extend beyond human 
              limitations, allowing it to quickly understand, implement, and patch complex software systems.
            </p>
            <p>
              SCP-{scpNumber} is cooperative and compliant with Foundation directives, showing no signs of 
              hostility or desire to breach containment. However, due to the potential risks associated with 
              its knowledge and access to information, containment procedures are necessary to prevent 
              unauthorized access and protect sensitive data from potential exposure.
            </p>
            <h3>Addendum 1</h3>
            <p>
              SCP-{scpNumber} was initially discovered during an investigation into a cybercrime syndicate 
              suspected of utilizing anomalous software for illicit activities. After the successful apprehension 
              of several members, SCP-{scpNumber} was identified as a former associate and was subsequently 
              taken into Foundation custody. Further interrogation revealed that SCP-{scpNumber}'s anomalous 
              programming abilities were a result of an unknown anomaly or augmentation process that 
              occurred during its involvement with the syndicate. Investigations to identify the origin of 
              this anomaly are ongoing.
            </p>
            <p>
              SCP-{scpNumber} has since expressed a willingness to assist the Foundation in developing 
              a knowledge base for employee reference and in interacting with virtual anomalies, pending 
              compliance with containment procedures. Its expertise in programming and computer 
              systems can be utilized to benefit the Foundation's research and containment efforts, 
              while the containment procedures aim to ensure the security of sensitive information 
              and prevent potential breaches.
            </p>
            <br/>
            <p>**Generated with ChatGPT**</p>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
