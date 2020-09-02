import React from "react"
import { FaReact, FaNodeJs, FaDatabase, FaJs } from "react-icons/fa"

export function Skills() {
  const BLUE = "#5affe7"

  return (
    <section id='skills' className='skills'>
      <div className='container'>
        <h3 className='title'>Skills</h3>
        <ul className='feature-icons'>
          <li>
            <FaJs size='30' color={BLUE} />
            Typescript, JavaScript
          </li>
          <li>
            <FaReact size='30' color={BLUE} />
            React-Native, React
          </li>
          <li>
            <FaNodeJs size='30' color={BLUE} />
            NodeJS
          </li>
          <li>
            <FaDatabase size='30' color={BLUE} />
            PostgreSQL
          </li>
        </ul>
      </div>
    </section>
  )
}
