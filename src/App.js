import React from "react"
import "./App.css"
import { Introduction } from "./Introduction"
import { Navigation } from "./Nav/Navigation"
import { Skills } from "./Skills"
import { Work } from "./Work"
import { Contact } from "./Contact"
import { Projects } from "./Projects"

function App() {
  return (
    <div>
      <Navigation />
      <Introduction />
      <Skills />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
