import React from "react"
import Fade from "react-reveal/Fade"
import { FaGithub, FaMailBulk, FaLinkedin } from "react-icons/fa"

export function Contact() {
  const BLUE = "#5affe7"

  return (
    <section id='contact'>
      <div className='container'>
        <h3 className='title'> Contact:</h3>
        <p>Welcoming new opportunites</p>
        <Fade>
          <footer id='contact-links'>
            <ul>
              <span className='contact-button'>
                <FaLinkedin size='30' color={"#2867B2"} />
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.linkedin.com/in/hui-gary'
                >
                  LinkedIn
                </a>
              </span>

              <span className='contact-button'>
                <FaGithub size='30' color='#24292e' />
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/huiigary'
                >
                  GitHub
                </a>
              </span>

              <span className='contact-button'>
                <FaMailBulk size='30' color='grey' />
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='mailto: gary.hui75@gmail.com'
                >
                  Send Email
                </a>
              </span>
            </ul>
          </footer>
        </Fade>
      </div>
    </section>
  )
}
