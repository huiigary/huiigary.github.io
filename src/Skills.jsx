import React from "react"
import { FaDatabase, FaJs, FaNodeJs, FaReact } from "react-icons/fa"

export function Skills() {
  const BLUE = "#5affe7"

  return (
    <div className='container' id='skills'>
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
  )
}
