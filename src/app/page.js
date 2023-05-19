'use client'
import { createContext } from 'react'
const Context = createContext()

import { Grid } from '@mui/material'
import Image from 'next/image'
import { About } from './components/About'

export default function Home() {
  return (
    <div>
      <About />
    </div>
  )
}
