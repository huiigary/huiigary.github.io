'use client'
import {
  Card,
  Grid,
  CardMedia,
  Typography,
  CardContent,
  CardHeader,
  CardActions,
  IconButton,
  Button,
} from '@mui/material'
import React from 'react'
import '../styles/Projects.css'
import { colors } from '../../../colors'

const projects = [
  {
    name: 'Simple Weather App',
    imageURL: './weatherapp.png',
    description:
      'Used React to display the current weather and future weathers in a given city. Used OpenWeather API to get weather data',
    listOfTech: ['React', 'Next.js', 'OpenWeather API', 'MUI'],
    url: 'https://github.com/huiigary/weatherApp',
  },
  {
    name: 'Daily Todo List',
    imageURL: './todolist.png',
    description:
      'A simple way to create a todo list to be completed. Includes CRUD functionality for creating, deleting, and editing tasks.',
    listOfTech: ['PostgreSQL', 'Express.js', 'React', 'Node.js'],
    url: 'https://github.com/huiigary/ToDoList',
  },
  {
    name: 'Simple Blog',
    imageURL: './simpleblog.png',
    description:
      'A blog to create posts of images and paragraphs for exceptional memories to remember',
    listOfTech: [
      'React',
      'Next.js',
      'MUI',
      'Prisma ORM',
      'Railway.App',
      'Typescript',
    ],
    url: 'https://github.com/huiigary/simpleblog_nextjs',
  },
]

const DESCRIPTION_DEFAULT_TEXT = 'A new project coming soon!'
const IMAGE_DEFAULT_URL = './defaultImage.png'
const TITLE_DEFAULT_TEXT = 'Project title COMING SOON'

export default function Projects() {
  return (
    <div>
      <Grid
        id='Projects'
        container
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        padding={{ xs: 5, md: 10 }}
        // backgroundColor={'red'}
      >
        <Typography
          variant='h3'
          fontWeight={'bold'}
          color={colors.primary}
          marginBottom={2}
        >
          Projects
        </Typography>

        {/* Display projects as cards */}
        <Grid
          item
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignitems: 'center',
            gap: 5,
            backgroundColor: colors.background,
          }}
        >
          {/*display list of projects  */}
          {projects.map((project) => (
            <Card
              key={project.id}
              onClick={() => {
                console.log('clicked card')
                window.open(project.url, '_blank')
              }}
              sx={{
                backgroundColor: colors.background,
                border: '2px solid black',
                boxShadow: '2px 3px 6px black',
                borderRadius: '25px',
                align: 'center',
                // padding: 10,
              }}
            >
              {/* title  */}
              <CardHeader
                title={project.name || TITLE_DEFAULT_TEXT}
                action={<IconButton aria-label='settings'></IconButton>}
                sx={{ textAlign: 'center', fontWeight: 'bold' }}
              ></CardHeader>

              {/* image of project */}
              <CardMedia
                component={'img'}
                image={project.imageURL ? project.imageURL : IMAGE_DEFAULT_URL}
                title={project.name}
                sx={{
                  width: '100%',
                  maxHeight: '50vh', // Update this value or imgs for consistent sizing
                  display: 'block',
                  objectFit: 'cover',
                }}
              />

              {/*  description */}
              <CardContent>
                <h3 style={{ fontSize: 'large' }}>
                  {project.description || DESCRIPTION_DEFAULT_TEXT}
                </h3>

                {/* list of tech*/}
                {/*  NOTE: Use of flex causes the overflow issue  */}
                <div
                  style={{
                    marginTop: 10,
                  }}
                >
                  <p>Tech used: </p>
                  {project.listOfTech.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </div>
              </CardContent>

              {project.url ? (
                <CardActions>
                  <Button
                    variant='contained'
                    size='large'
                    url={project.url}
                    target={'_blank'}
                    fullWidth={true}
                    className='btn' // Note: class 'btn' is able to access the "social.css" file without it imported here somehow
                    sx={{ borderRadius: '15px', paddingY: 1, marginBottom: 2 }}
                  >
                    View Project
                  </Button>
                </CardActions>
              ) : null}
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  )
}
