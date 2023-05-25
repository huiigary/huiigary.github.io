'use client'
// import { createContext } from 'react'
// const Context = createContext()
import { Grid, Typography, Box } from '@mui/material'
import React, { useState } from 'react'
import '../styles/Home.css'
import { MdEmail } from 'react-icons/md'
import { SiAircanada } from 'react-icons/si'

export default function Home() {
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems='center'
      id='Home'
      direction={'row'}
      // paddingY={15}
      // paddingX={45}
      height='100vh' // this 100vH makes the page take the whole
      spacing={3}
    >
      <Grid item>
        <img
          loading='lazy'
          src='./profile_pic_400.png'
          className='avatar'
        ></img>
      </Grid>

      <Grid item>
        <div style={{}}>
          <Typography variant='h2' fontWeight='bold'>
            Gary Hui
          </Typography>
          <Typography variant='h4'>Software Developer</Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              lineHeight: 1.7,
            }}
          >
            <SiAircanada color='red' fontSize={'1.5rem'} />
            <div style={{ lineHeight: 2 }}>Based in Vancouver, BC</div>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <MdEmail fontSize={'1.5rem'} />
            <div style={{ lineHeight: 2 }}>gary.hui75@gmail.com</div>
          </Box>
          {/* <Socials /> */}
        </div>
      </Grid>
    </Grid>
  )
}
