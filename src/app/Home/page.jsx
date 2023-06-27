'use client'
import { Grid, Typography, Box } from '@mui/material'
import React, { useState } from 'react'
import '../styles/Home.css'
import { MdEmail } from 'react-icons/md'
import { SiAircanada } from 'react-icons/si'
import Socials from '../components/Socials'

export default function Home() {
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems='center'
      id='Home'
      direction={{ xs: 'column', md: 'row' }} // allows page to retain shape and be responsive instead img/card being cutoff
      // paddingY={15}
      // paddingX={45}
      height='100vh' // this 100vH makes the page take the whole
      spacing={3}
    >
      <Box
        // className='avatar'
        alt={'image of developer'}
        component={'img'}
        src={'./profile_pic_400.png'}
        p={'0.75rem'}
        mr={{ xs: 0, md: '2rem' }}
        borderRadius={10}
      />
      <Grid
        item
        sx={{
          borderRadius: '1rem',
          background: 'rgba(0, 0, 0, 0.2)',
          padding: '1rem 2rem',
        }}
      >
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
        <Socials />
      </Grid>
    </Grid>
  )
}
