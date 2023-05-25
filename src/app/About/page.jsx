'use client'
import { Grid, Stack, Typography, Box } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import { Skills } from '../components/skills'

const aboutMeSentences = [
  'I am a skilled software developer from Vancouver, Canada, with front end experience in Typescript/Javascript and expertise in frameworks like Angular, React, and React-Native.',
  'In my career so far, my work focused on cross platform mobile app development and some backend experience with NodeJS, PostgreSQL, and GoLang, and expanding my skillset to become a full stack developer.',
  "I am a quick learner and have collaborated with stakeholders to collect requirements, create documentation, and plan designs for creating solutions. Let's work together to bring ideas to life!",
  'Currently, I am learning Python and Django to further my knowledge of frontend and backend frameworks as a fullstack developer.',
]

const MARGIN = 5

export default function About() {
  return (
    <Grid
      container
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      paddingX={45}
      paddingY={15}
    >
      <div>
        <Typography variant='h3' fontWeight={'bold'}>
          About Me.
        </Typography>
      </div>
      <Box
        sx={{
          display: 'flex',
          marginTop: MARGIN,
        }}
      >
        <Grid item>
          {/* <Image
            src='/profile_pic_400.png'
            alt='Profile iamge'
            priority
            className='profileImage'
            width='auto'
          /> */}
          <img
            src='/profile_pic_400.png'
            alt='profile image'
            className={styles.profileImage}
          ></img>
        </Grid>

        <Stack paddingLeft={5}>
          <Grid item>
            <Typography variant='h5'>Who am I ?</Typography>
            <div>
              {aboutMeSentences.map((paragraph, index) => (
                <p className={styles.paragraphs} key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </Grid>
        </Stack>
      </Box>
      {/* skills */}
      <Grid item marginTop={MARGIN}>
        <Skills />
      </Grid>
    </Grid>
  )
}
