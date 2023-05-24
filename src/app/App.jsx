'use client'
import { createTheme, ThemeProvider } from '@mui/material'
import ResponsiveAppBar from './navbar/Nav'
import Link from 'next/link'
import Home from './Home/page'
const font = "'Poppins', sans-serif"
const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
})

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <ResponsiveAppBar /> */}
        <Home />
      </div>
    </ThemeProvider>
  )
}
