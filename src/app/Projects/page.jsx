'use client'
import {
  Card,
  Grid,
  Box,
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

const projects = [
  {
    name: 'Simple Weather App',
    imageURL: '',
    description:
      'Used React to display the current weather and future weathers in a given city. Used OpenWeather API to get weather data',
    listOfTech: ['React', 'OpenWeather API', 'MUI'],
    url: 'https://github.com/huiigary/weatherApp',
  },
  {
    name: 'DNS-Client',
    imageURL: '',
    description:
      'Simple recursive DNS-Client used to query messages from a given domain address. Project developed for a 300-level UBC course',
    listOfTech: ['Java', 'DNS'],
    url: 'https://github.com/huiigary/DNS-Client',
  },
  {
    name: 'Upcoming!',
    imageURL: '',
    description: '',
    listOfTech: ['N/A'],
    url: null,
  },
]

const DESCRIPTION_DEFAULT_TEXT = 'A new project coming soon!'
const IMAGE_DEFAULT_URL = './defaultImage.png'
const TITLE_DEFAULT_TEXT = 'Project title COMING SOON'

export default function Projects() {
  const card_height = 400
  const card_width = 400
  const card_image_height = 150

  return (
    <div>
      <Grid
        container
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        paddingY={15}
      >
        <Typography variant='h3' fontWeight={'bold'}>
          Projects
        </Typography>

        <Box
          sx={{
            // gridTemplateColumns: 'repeat(3, auto)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignitems: 'center',
            gap: 5,
            border: '2px solid black',
            marginTop: 2,
          }}
        >
          {/*display list of projects  */}
          {projects.map((project) => (
            <div key={project.id}>
              <Card
                onClick={() => {
                  console.log('clicked card')
                  window.open(project.url, '_blank')
                }}
                sx={{
                  maxWidth: 500,
                  width: card_width,
                  height: card_height,
                  backgroundColor: 'light grey',
                }}
              >
                {/* title  */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <CardHeader
                    title={project.name || TITLE_DEFAULT_TEXT}
                    action={<IconButton aria-label='settings'></IconButton>}
                    sx={{ textAlign: 'center', fontWeight: 'bold' }}
                  ></CardHeader>
                </div>

                {/* image of project */}
                <CardMedia
                  component={'img'}
                  image={
                    project.imageURL ? project.imageURL : IMAGE_DEFAULT_URL
                  }
                  title={project.name}
                  sx={{
                    height: card_image_height,
                    width: card_width,
                  }}
                ></CardMedia>

                {/*  description */}
                <CardContent>
                  <Typography variant=''>
                    {project.description || DESCRIPTION_DEFAULT_TEXT}
                  </Typography>

                  {/* list of tech */}
                  <div
                    style={{
                      // marginTop: 10,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                    }}
                  >
                    {project.listOfTech.map((tech, index) => (
                      <Typography
                        variant='body2'
                        key={index}
                        sx={{ marginX: 1 }}
                      >
                        #{tech}
                      </Typography>
                    ))}
                  </div>
                </CardContent>

                {project.url ? (
                  <CardActions>
                    <Button
                      variant='outlined'
                      url={project.url}
                      target={'_blank'}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                      }}
                    >
                      View Project
                    </Button>
                  </CardActions>
                ) : null}
              </Card>
            </div>
          ))}
        </Box>
      </Grid>
    </div>
  )
}
