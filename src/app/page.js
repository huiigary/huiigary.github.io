'use client'
import { createContext } from 'react'
const Context = createContext()

import { Grid } from '@mui/material'
import Image from 'next/image'
import {
  useRoutes,
  Routes,
  Route,
  createBrowserRouter, // Is used if we need to wrap entire app with a router
  BrowserRouter, // Used for single page with routes
} from 'react-router-dom'
import { App } from './App'
import ResponsiveAppBar from './navbar/Nav'

export default function Main() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <App />
    </BrowserRouter>
  )
}
