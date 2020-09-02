import React from "react"
import "./App.css"
import { Introduction } from "./Introduction"
import { Navigation } from "./Nav/Navigation"
import { Skills } from "./Skills"
import { Work } from "./Work"
import { Contact } from "./Contact"

function App() {
  return (
    <div>
      <Navigation />
      <Introduction />
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App
