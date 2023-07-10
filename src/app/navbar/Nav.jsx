'use client'

import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import { useState, useEffect } from 'react'
import '../styles/Navbar.css'
import HomeIcon from '@mui/icons-material/HomeOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined' // about
import AssignmentIcon from '@mui/icons-material/AssignmentOutlined' // work
import WorkHistoryIcon from '@mui/icons-material/WorkHistoryOutlined' // skills
import AccountTreeIcon from '@mui/icons-material/AccountTreeOutlined' //projects
import ContactPageIcon from '@mui/icons-material/ContactPageOutlined' // contacts
import Link from 'next/link'

const pages = [
  { name: 'Home', icon: <HomeIcon sx={{ color: '#293f50' }} /> },
  {
    name: 'About',
    icon: <PersonOutlineOutlinedIcon sx={{ color: '#293f50' }} />,
  },
  { name: 'Work', icon: <AssignmentIcon sx={{ color: '#293f50' }} /> },
  { name: 'Projects', icon: <AccountTreeIcon sx={{ color: '#293f50' }} /> },
  { name: 'Contact', icon: <ContactPageIcon sx={{ color: '#293f50' }} /> },
]

const navStyles = {
  color: '#0e1333',
  textDecoration: 'none',
  fontWeight: 'bold',

  border: '2px solid black',
  borderRadius: '10px',
  width: '7rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50px',
  padding: 5,
  margin: 15,
  '&.MuiButtonOutlined': {
    border: '2px solid #293f50',
    margin: 2,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
}

export default function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AppBar
      className='navbar'
      position='relative' // was sticky  ... commenting this out --> fixes issue where shrinking
      sx={{ backgroundColor: 'inherit' }}
      // sx={{ backgroundColor: 'inherit', opacity: scrolled ? 0.5 : 1 }}
      style={{ paddingLeft: '2rem', paddingRight: '2rem' }}
    >
      <Container maxWidth='xl '>
        <Toolbar disableGutters>
          <AdbIcon
            sx={{
              display: { xs: 'none', md: 'flex', color: '#293f50' },
              mr: 1,
            }}
          />
          <Typography
            variant='h6'
            noWrap
            component='a'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: '#293f50',
            }}
          >
            Gary Hui
          </Typography>

          {/* Conditional: Will display menu pages when page is small */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon sx={{ color: '#293f50' }} />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({ name, icon }) => (
                <MenuItem key={name} onClick={handleCloseNavMenu}>
                  <Link href={`${name}`}>
                    <Typography color={'#293f50'}>{name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          {/* Conditional: Name displayed when screen is small */}
          <Typography
            variant='h5'
            noWrap
            component='a'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Gary Hui
          </Typography>

          {/* Display list of pages of navbar */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {pages.map(({ name, icon }) => (
              <div key={name}>
                <Link
                  href={`/${name}`}
                  // className={({ isActive }) => [
                  //   isActive ? 'selected' : 'links',
                  // ]}
                  style={navStyles}
                  className='links'
                >
                  {icon}
                  {name}
                </Link>
              </div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
