'use client'
import { Button, Grid } from '@mui/material'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import '../styles/Socials.css'
import DownloadIcon from '@mui/icons-material/Download'

const styles = {
  border: '2px solid black',
  '&.MuiButtonOutlined': {
    border: '1px solid pink',
  },
}

export default function Socials() {
  return (
    <Grid
      container
      direction={'column'}
      justifyContent={'center'}
      spacing={2}
      marginTop={0}
    >
      <Grid item className='header_socials'>
        {/* Check out my profiles */}
        <SocialIcon
          network='linkedin'
          url='https://linkedin.com/in/hui-gary'
          target={'_blank'}
          label='linkedin'
          fgColor='white'
        />
        <SocialIcon
          network='github'
          url='https://github.com/huiigary'
          target={'_blank'}
          fgColor='white'
        />
        <SocialIcon
          network='mailto'
          url='mailto:gary.hui75@gmail.com'
          bgColor='black'
          fgColor='white'
        />
      </Grid>

      <Grid item>
        <Button
          variant='contained'
          size='large'
          fullWidth='true'
          href='/GaryHui_Resume.pdf'
          target={'_blank'}
          className='btn'
          sx={{ borderRadius: '15px' }}
        >
          <DownloadIcon />
          <div>Download CV</div>
        </Button>
      </Grid>
    </Grid>
  )
}
