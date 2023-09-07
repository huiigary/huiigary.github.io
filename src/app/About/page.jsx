'use client'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import '../styles/About.css'
import { colors } from '../../../colors'

const aboutMeSentences = [
  'I am a software developer from Vancouver, Canada, with front-end experience in TypeScript/JavaScript and expertise in frameworks like Angular, React, and React-Native.',
  'So far my career has led to the focus of cross platform mobile app development for a couple companies where I worked on the front-end and had some backend experience with PostgreSQL, NodeJs, and GoLang.',
  'I am experienced working in a small-team startup setting with an agile development process and also independently where I led the development and successfully communicated daily progress updates to my manager to ensure we are synced up.',
  "I am a quick learner and have collaborated with stakeholders to collect requirements for wireframe design with Adobe XD and Draw.io, create software design documentation, and discussed software solutions in a team setting. Let's work together to bring ideas to life!",
  'Currently, I am improving my knowledge as a fullstack developer by creating web applications with new tools/stack I wanted to try like NextJs and PERN stack. Feel free head over to my Github to see what I have worked on so far!',
]

export default function About() {
  return (
    <Grid
      container
      id='About'
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      backgroundColor={colors.background}
      padding={{ xs: 5, md: 10 }}
    >
      <Typography
        variant='h3'
        fontWeight={'bold'}
        color={colors.primary}
        marginBottom={2}
      >
        About
      </Typography>

      <Grid item>
        {aboutMeSentences.map((paragraph, index) => (
          <p className={'paragraphs'} key={index}>
            {paragraph}
          </p>
        ))}
      </Grid>
    </Grid>
  )
}
