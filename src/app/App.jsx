import { createTheme, ThemeProvider } from '@mui/material/styles'
import Home from './Home/page'
import About from './About/page'
import Experience from './Experience/page'
import Projects from './Projects/page'
import Contact from './Contact/page'
import ResponsiveAppBar from './navbar/Nav'
import Skills from './components/Skills'
const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
})

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <ResponsiveAppBar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </ThemeProvider>
  )
}
