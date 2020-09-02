import React from "react"

export function Work() {
  const skills = [
    "React-Native/React",
    "NodeJS",
    "MobX",
    "Golang",
    "PostgreSQL",
    "Typescript/Javascript",
  ]
  return (
    <section className='work'>
      <div className='container'>
        <h3 className='title'>Work Experience</h3>
        <h4>Bio Conscious Technoloies Inc.</h4>
        <p>
          {/* title, what I did */}
          At Bioconscious Tech, I worked as an Android Developer tasked in the
          starting development of a cross-platform version of the native IOS app
          Diabits to allow both Android and IOS users.
        </p>
        <p>
          {/* What tech used, What I contributed */}I worked in an agile team
          using React-Native in Typescript, and MobX for state management where
          I heavily contributed to the front end UI of the app delivering an
          intuitive and effective design for our users. For the backend, I used
          Golang with postgreSQL to fetch and automate user insulin pump entries
          into the journal system.
        </p>
        <ul />

        {skills.map((skill) => (
          <span className='skill-card'> {skill}</span>
        ))}
      </div>
    </section>
  )
}
