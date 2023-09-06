'use client'

import * as React from 'react'
import '../styles/Navbar.css'
import { useState, useEffect } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
} from '@mui/material'

import {
  Laptop,
  Adb,
  Home,
  PersonOutlineOutlined,
  Assignment,
  AccountTree,
  ContactPage,
} from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'

const pages = [
  { name: 'Home', icon: <Home /> },
  {
    name: 'About',
    icon: <PersonOutlineOutlined />,
  },
  { name: 'Skills', icon: <Laptop /> },
  { name: 'Experience', icon: <Assignment /> },
  { name: 'Projects', icon: <AccountTree /> },
  { name: 'Contact', icon: <ContactPage /> },
]

const navStyles = {
  textDecoration: 'none',
  fontWeight: '200px',

  // border: '2px solid black',
  // borderRadius: '10px',
  width: '7rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50px',
  padding: 5,
  margin: 15,
  // '&.MuiButtonOutlined': {
  //   border: '2px solid #293f50',
  //   margin: 2,
  // },
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

  return (
    <AppBar
      position='relative' // was sticky  ... commenting this out --> fixes issue where shrinking
      sx={{
        zIndex: 1,
        position: 'fixed',
        backgroundColor: '#293f50',
      }}
    >
      <Container maxWidth='xl '>
        <Toolbar disableGutters>
          <Adb
            sx={{
              display: { xs: 'none', md: 'flex' },
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
              <MenuIcon />
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
                  <a href={`#${name}`}>
                    <Typography color={'black'}>{name}</Typography>
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Adb sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

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
                <a href={`#${name}`} style={navStyles}>
                  {icon}
                  {name}
                </a>
              </div>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
