'use client'
import { Grid, Typography, Box } from '@mui/material'
import React from 'react'
import '../styles/About.css'
import Skills from '../components/Skills'

const aboutMeSentences = [
  'I am a skilled software developer from Vancouver, Canada, with front end experience in Typescript/Javascript and expertise in frameworks like Angular, React, and React-Native.',
  'In my career so far, my work focused on cross platform mobile app development and some backend experience with NodeJS, PostgreSQL, and GoLang, and expanding my skillset to become a full stack developer.',
  "I am a quick learner and have collaborated with stakeholders to collect requirements, create documentation, and plan designs for creating solutions. Let's work together to bring ideas to life!",
  'Currently, I am improving my knowledge of frontend and backend frameworks as a fullstack developer.',
]

const MARGIN = 5

export default function About() {
  return (
    <Grid
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      // paddingX={45}
      // paddingY={15}
    >
      <div>
        <Typography variant='h3' fontWeight={'bold'}>
          About Me.
        </Typography>
      </div>

      <Box
        gap={2}
        sx={{
          display: 'flex',
          // flexWrap: 'wrap', // Wrap prevents row view
          marginTop: MARGIN,
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          alt={'image of developer'}
          component={'img'}
          src={'./profile_pic_400.png'}
          borderRadius={10}
          border={'2px solid black'}
          maxHeight={'25%'}
          maxWidth={'25%'}
        />

        <Grid item>
          <Typography variant='h5'>Who am I ?</Typography>
          <div>
            {aboutMeSentences.map((paragraph, index) => (
              <p className={'paragraphs'} key={index}>
                {paragraph}
              </p>
            ))}
          </div>
        </Grid>
      </Box>
      {/* skills */}
      <Grid item marginTop={MARGIN}>
        <Skills />
      </Grid>
    </Grid>
  )
}
