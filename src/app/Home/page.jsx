'use client'
import { Grid, Typography, Box } from '@mui/material'
import React, { useState } from 'react'
import '../styles/Home.css'
import { MdEmail } from 'react-icons/md'
import { SiAircanada } from 'react-icons/si'
import Socials from '../components/Socials'
import { colors } from '../../../colors'

export default function Home() {
  const StyledBox = ({ children }) => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        mt: 2,
      }}
    >
      {children}
    </Box>
  )

  const InfoText = ({ children }) => (
    <Typography sx={{ fontSize: '1.5rem' }}>{children}</Typography>
  )

  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems='center'
      id='Home'
      direction={{ xs: 'column', md: 'row' }} // allows page to retain shape and be responsive instead img/card being cutoff
      height='100vh' // this 100vH makes the page take the whole
      spacing={3}
      sx={{
        backgroundImage: `url("/gradient-bkgrnd.png")`,
        backgroundSize: 'cover',
        backgroundColor: colors.primary,
      }}
    >
      {/* My image  */}
      <Box
        alt={'image of developer'}
        component={'img'}
        src={'./profile_pic_400.png'}
        p={'0.75rem'}
        mr={{ xs: 0, md: '2rem' }}
        borderRadius={10}
      />

      {/* Info section */}
      <Grid
        item
        sx={{
          borderRadius: '1rem',
          backgroundColor: colors.white,
          padding: '1rem 2rem',
        }}
      >
        <Typography variant='h2' fontWeight='bold'>
          Gary Hui
        </Typography>
        <Typography variant='h4'>Software Developer</Typography>

        <StyledBox>
          <SiAircanada color='red' fontSize={'1.5rem'} />
          <InfoText>Based in Vancouver, BC</InfoText>
        </StyledBox>

        <StyledBox>
          <MdEmail fontSize={'1.5rem'} />
          <InfoText>gary.hui75@gmail.com</InfoText>
        </StyledBox>

        <Socials />
      </Grid>
    </Grid>
  )
}
