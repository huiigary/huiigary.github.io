'use client'
import { Button, Grid, List, Box, Typography } from '@mui/material'
import React from 'react'
// import '../styles/Colours.css'
// import '../styles/Work.css'

import { darkColor, lightColor, midColor } from '../constants/Colors.jsx'
const bioconscious_tools_used = [
  'React-Native',
  'React',
  'Typescript',
  'MobX',
  'PostgreSQL',
  'NodeJS',
  'GoLang',
  'Android Studio',
]
const sendum_tools_used = [
  'Angular',
  'Typescript',
  'AWS Cognito /Dynamno /SNS /Amplify /S3',
  'Bluetooth Low Energy (BLE)',
  'Jira',
  'Draw.io',
  'Adobe XD',
]

export default function Work() {
  return (
    <Grid
      container
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      paddingX={45}
      paddingY={15}
      spacing={5}
    >
      <Grid item>
        <Typography variant='h3' fontWeight={'bold'} textAlign={'left'}>
          Work Experience.
        </Typography>
      </Grid>
      {/* // Sendum */}
      <Grid item style={{ backgroundColor: '' }}>
        <Typography variant='h5' fontWeight={'bold'}>
          Sendum Wireless Corp.
        </Typography>
        <Typography variant='h6' fontWeight={'lighter'}>
          Mobile Developer, 2020 - 2022
        </Typography>
        <section id='sendum' style={{ paddingTop: 20 }}>
          <Typography variant='h6'>Device Manager BLE App</Typography>
          {/* What is the BLE app? */}
          <p>
            At Sendum Wireless, I was tasked to develop a mobile application to
            communicate with peripheral Bluetooth Low Energy(BLE) devices in
            order for the app to read and display data from a monitoring device.
          </p>
          {/* tech used for BLE app */}
          <p>
            I worked independantly to build the app with Angular with Typescript
            and Ionic mobile toolkit for UI design.
          </p>
          {/* what I specifically did for BLE app */}
          <p>
            I developed core functionality of connecting to a device via QRscan,
            parsing advertising BLE packets encoding live-data readings in
            bytes, reading/writing bytes commands to access API for accessing
            logged data, and generating user friendly screens to allow user to
            notified of state of the app during the bluetooth connection showing
            the state of BLE connection{' '}
          </p>
        </section>

        {/* Driver Tasklist app */}
        <section style={{ paddingTop: 20 }}>
          <Typography variant='h6'>Driver Tasklist App</Typography>

          <p>
            I worked on an mobile app that displays a list of milestones to be
            completed for shipments assigned to specific drivers.
          </p>
          {/* tech used for driver app */}
          <p>
            The front-end composed of Angular with Typescript and Ionic UI
            toolkit for the styling. For the backend, we used AWS Amplify CLI as
            a simple way to generate user authentication, GraphQL API, and
            database for the app. We could log into AWS to generate users via
            Cognito and generate endpoints using the web interface.
          </p>
          <p>
            {/* what I specifically did for driver app */}I helped design the UI
            displaying a simple and intuitive list of milestones with buttons
            for drivers interact with, and generate backend infrastructure with
            AWS Amplify CLI.
          </p>
        </section>
        <List
          sx={{
            color: darkColor,
            display: 'inline-grid',
            // gridTemplateColumns: 'auto auto auto',
            gridTemplateColumns: 'repeat(4, auto)',
            gap: 2,
          }}
        >
          {sendum_tools_used.map((tool, index) => (
            <Button
              key={index}
              variant='outlined'
              sx={{
                color: darkColor,
                cursor: 'default',
              }}
            >
              {tool}
            </Button>
          ))}
        </List>
      </Grid>

      {/* // Bioconscious */}
      <Grid item>
        <Typography variant='h5' fontWeight={'bold'}>
          Bio Conscious Technologies
        </Typography>
        <Typography variant='h6' fontWeight={'lighter'}>
          Software Developer, 2019 - 2020
        </Typography>

        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box
            id='diabits'
            sx={{
              paddingTop: '20px',
              paddingRight: 10,
              width: '80%',
            }}
          >
            <Typography variant='h6'>Diabits</Typography>
            <p>
              {/* What is Diabits */}
              At Bio Conscious Technologies, I worked on creating cross platform
              version of the native iOS app, Diabits. This app was used to help
              users with Diabetes to better manage blood glucose fluctuations by
              seeing predicted future glucose values.
            </p>
            {/* tech used */}
            <p>
              I was part of an agile team using React-Native with Typescript,
              MobX for state management, and a model-view-viewModel (MVVM)
              architecture on the front-end. I also contributed to the backend
              in GoLang and PostgreSQL .
            </p>
            {/* what I specifically contributed to */}
            <p>
              Primarily I contributed to the front-end such as business logic,
              UI screens, user journal entries, and data visualization of user
              blood glucose levels and predictions.
            </p>
          </Box>
          {/* diabits app image */}
          <img
            src='./diabits_img.png'
            style={{ width: 300, height: 500 }}
          ></img>
        </Box>

        <Box sx={{ direction: 'row' }}>
          <Box
            id='endobits'
            sx={{
              width: '80%',
              paddingTop: '20px',
              paddingRight: 10,
            }}
          >
            {/* id='endobits' style={{ paddingTop: 20 }}> */}
            <Typography variant='h6'>Endobits</Typography>
            <p>
              I also worked on the intial version of the web platform,{' '}
              <a
                href='https://www.endobits.com/'
                target='_blank'
                rel='noreferrer'
              >
                Endobits.
              </a>
            </p>
            <p>
              We used React with Typescript, Ant Design Library for styling,
              NodeJS, and Jest for testing
            </p>
            <p>
              I worked on creating UI displays and business logic on the
              front-end. On the backend, I helped with creating new API
              endpoints and generating tests
            </p>
            <img src='./endobits_img.png'></img>
          </Box>
        </Box>

        {/* Apple and Google play link for Diabits*/}
        <List>
          <Button
            variant='contained'
            href='https://apps.apple.com/us/app/diabits/id965600611'
            target={'_blank'}
            rel='noreferrer'
            sx={{ backgroundColor: darkColor }}
          >
            App Store
          </Button>

          <Button
            variant='contained'
            href='https://play.google.com/store/apps/details?id=com.diabits'
            target={'_blank'}
            rel='noreferrer'
            sx={{ backgroundColor: midColor }}
          >
            Google Play
          </Button>
        </List>
        {/* List of frameworks and tools used at work */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, auto)',
            gap: 2,
          }}
        >
          {bioconscious_tools_used.map((tool, index) => (
            <Button
              key={index}
              variant='outlined'
              sx={{
                color: darkColor,
                cursor: 'default',
              }}
            >
              {tool}
            </Button>
          ))}
        </Box>
      </Grid>
    </Grid>
  )
}
