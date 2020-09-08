import React from "react"
import { AboutMe } from "./About"
import "./App.css"
import { Contact } from "./Contact"
import { Navigation } from "./Nav/Navigation"
import { Projects } from "./Projects"
import { Skills } from "./Skills"
import { Work } from "./Work"

function App() {
  return (
    <div>
      <Navigation />
      <AboutMe />
      <Skills />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
