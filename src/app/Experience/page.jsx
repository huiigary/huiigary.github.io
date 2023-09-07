'use client'
import {
  Button,
  Grid,
  List,
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from '@mui/material'
import React from 'react'
// import '../styles/Experience.css'
import { colors } from '../../../colors'
import Image from 'next/image'

const sendumExperience = {
  name: 'Sendum Wireless Corp',
  title: 'Mobile Developer 2020 - 2022',
  tools: [
    'Angular',
    'Typescript',
    'AWS Cognito /Dynamno /SNS /Amplify /S3',
    'Bluetooth Low Energy (BLE)',
    'Jira',
    'Draw.io',
    'Adobe XD',
  ],
  projects: [
    {
      title: 'Device Manager BLE App',
      descriptions: [
        'At Sendum Wireless, I was tasked to develop a mobile application to communicate with peripheral Bluetooth Low Energy(BLE) devices in order for the app to read and display data from a monitoring device.',
        'I worked independantly to build the app with Angular with Typescript and Ionic mobile toolkit for UI design.',
        'I developed core functionality of connecting to a device via QRscan, parsing advertising BLE packets encoding live-data readings in bytes, reading/writing bytes commands to access API for accessing logged data, and generating user friendly screens to allow user to notified of state of the app during the bluetooth connection showing the state of BLE connection',
      ],
    },
    {
      title: 'Driver Tasklist App',
      descriptions: [
        ' I worked on an mobile app that displays a list of milestones to be completed for shipments assigned to specific drivers.',
        ' The front-end composed of Angular with Typescript and Ionic UI toolkit for the styling. For the backend, we used AWS Amplify CLI a a simple way to generate user authentication, GraphQL API, and database for the app. We could log into AWS to generate users via Cognito and generate endpoints using the web interface.',
        'I helped design the UI displaying a simple and intuitive list of milestones with buttons for drivers interact with, and generate backend infrastructure with AWS Amplify CLI.',
      ],
    },
  ],
}

const bioconsciousExperience = {
  name: 'Bioconscious Technologies ',
  title: 'Software Developer 2019 - 2020',
  tools: [
    'React-Native',
    'React',
    'Typescript',
    'MobX',
    'PostgreSQL',
    'NodeJS',
    'GoLang',
    'Android Studio',
  ],
  projects: [
    {
      title: 'Diabits',
      descriptions: [
        ' At Bio Conscious Technologies, I worked on creating a cross platform version of the native iOS app, Diabits. This app was used to help users with Diabetes to better manage blood glucose fluctuations by seeing predicted future glucose values',
        ' I was part of an agile team using React-Native with Typescript, MobX for state management, and a model-view-viewModel (MVVM) architecture on the front-end.',
        'Primarily I contributed to the front-end such as business logic, UI screens, user journal entries, and data visualization of user blood glucose levels and predictions.',
      ],
    },

    {
      title: 'Endobits',
      descriptions: [
        'I also worked on the intial version of the web platform Endobits.',
        '  We used React with Typescript, Ant Design Library for styling, NodeJS, and Jest for testing',
        '  I worked on creating UI displays and business logic on the front-end. On the backend, I helped with creating new API endpoints and generating tests',
      ],
    },
  ],
}

const SkillContainer = ({ children }) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: {
        xs: 'repeat(2, auto)',
        sm: 'repeat(4, auto)',
      },
      gap: 2,
      marginTop: '2rem',
    }}
  >
    {children}
  </Box>
)

const SkillItem = ({ children, key }) => (
  <Button
    key={key}
    variant='outlined'
    sx={{
      color: colors.skills,
      cursor: 'default',
    }}
  >
    {children}
  </Button>
)
const WorkHeader = ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-evenly',
      borderBottom: '1px solid black',
      paddingTop: '1rem',
      paddingBottom: '1rem',
    }}
  >
    {children}
  </div>
)

export default function Experience() {
  return (
    <div>
      <Grid
        container
        id='Experience'
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        padding={{ xs: 5, md: 10 }}
        backgroundColor={colors.background}
      >
        <Typography
          variant='h3'
          fontWeight={'bold'}
          color={colors.primary}
          marginBottom={2}
        >
          Experience
        </Typography>
        {/*  Sendum Card */}
        <Grid item>
          <Card variant='outlined'>
            {/* header */}
            <WorkHeader>
              <Typography variant='h5' fontWeight={'bold'}>
                Sendum Wireless Corp.
              </Typography>
              <Typography variant='h6' fontWeight={'lighter'}>
                Software Developer, 2020 - 2022
              </Typography>
            </WorkHeader>

            <CardContent>
              <section>
                {/* BLE app */}
                <Typography variant='h6'>Device Manager BLE App</Typography>
                {sendumExperience.projects[0].descriptions.map(
                  (description, index) => (
                    <p key={index} style={{ marginTop: 10 }}>
                      {description}
                    </p>
                  )
                )}
              </section>

              {/* Driver Tasklist app */}
              <section style={{ paddingTop: 20 }}>
                <Typography variant='h6'>Driver Tasklist App</Typography>
                {sendumExperience.projects[1].descriptions.map(
                  (description, index) => (
                    <p key={index} style={{ marginTop: 10 }}>
                      {description}
                    </p>
                  )
                )}
              </section>
              {/* list of Sendum stack */}
              <SkillContainer>
                {sendumExperience.tools.map((tool, index) => (
                  <SkillItem key={index}>{tool}</SkillItem>
                ))}
              </SkillContainer>
            </CardContent>
          </Card>
        </Grid>

        {/*  Bioconscious */}
        <Grid item>
          {/* header */}
          <Card variant='outlined'>
            <WorkHeader>
              <Typography variant='h5' fontWeight={'bold'}>
                Bio Conscious Technologies
              </Typography>
              <Typography variant='h6' fontWeight={'lighter'}>
                Software Developer, 2019 - 2020
              </Typography>
            </WorkHeader>

            {/* content */}
            <CardContent>
              {/* Diabits */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                }}
              >
                <Box
                  id='diabits'
                  sx={{
                    paddingTop: '20px',
                    // paddingRight: 10,
                    // width: '80%',
                  }}
                >
                  <Typography variant='h6'>Diabits</Typography>
                  {bioconsciousExperience.projects[0].descriptions.map(
                    (description, index) => (
                      <p key={index}>{description}</p>
                    )
                  )}
                </Box>
                {/* diabits app image */}

                <Image
                  src='/diabits_img.png'
                  width={300}
                  height={500}
                  alt='Diabits'
                />
              </Box>

              {/* Endobits  */}
              <Box sx={{ direction: 'row' }}>
                <Box
                  id='endobits'
                  sx={{
                    paddingTop: '20px',
                    // width: '80%',
                    // paddingRight: 10,
                  }}
                >
                  <Typography variant='h6'>Endobits</Typography>
                  {bioconsciousExperience.projects[1].descriptions.map(
                    (description, index) => (
                      <p key={index}>{description}</p>
                    )
                  )}
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
                  sx={{ backgroundColor: colors.skills }}
                >
                  App Store
                </Button>

                <Button
                  variant='contained'
                  href='https://play.google.com/store/apps/details?id=com.diabits'
                  target={'_blank'}
                  rel='noreferrer'
                  sx={{ backgroundColor: colors.skils }}
                >
                  Google Play
                </Button>
              </List>
              {/* List of frameworks and tools used at work */}
              <SkillContainer>
                {bioconsciousExperience.tools.map((tool, index) => (
                  <SkillItem key={index}>{tool}</SkillItem>
                ))}
              </SkillContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
