import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  colors,
} from '@mui/material'
import React from 'react'
import {
  SiPostgresql,
  SiTypescript,
  SiReact,
  SiPython,
  SiAmazonaws,
  SiDocker,
  SiAngular,
  SiNodedotjs,
  SiJavascript,
  SiGo,
} from 'react-icons/si'

import { DiJava } from 'react-icons/di'
import { Box } from '@mui/system'
// import '../styles/Colours.css'
// import 'animate.css'
// import 'animate.css/animate.min.css'
import { darkColor, lightColor, midColor } from '../constants/Colors'
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly'
import CodeIcon from '@mui/icons-material/Code'
import AccountTreeIcon from '@mui/icons-material/AccountTree'

const proficient_skills_list = [
  { icon: <SiTypescript color='yellow' />, label: 'Typescript/Javascript' },
  { icon: <SiAngular fill='red' />, label: 'Angular' },
  {
    icon: <SiReact color='blue' fontSize='1.5em' />,
    label: 'React ',
  },
  {
    icon: <SiReact color='blue' fontSize='1.5em' />,
    label: 'React-Native ',
  },
  { icon: <SiPostgresql color='blue' />, label: 'PostgreSQL' },
]
const familiar_skills_list = [
  { icon: <SiNodedotjs />, label: 'Node.js' },
  { icon: <SiAmazonaws />, label: 'AWS' },
  { icon: <SiPython />, label: 'Python' },
  { icon: <DiJava />, label: 'Java' },
  // { icon: <SiGo />, label: 'GoLang' },
  { icon: <SiDocker />, label: 'Docker' },
]

const skillCards = [
  {
    title: 'Mobile App Development',
    description:
      'Experienced using Angular and React-Native with Typescript to develop cross platform mobile applications for public and private use.',
    color: darkColor,
    icon: <MobileFriendlyIcon color='red' />,
  },
  {
    title: 'Web Development',
    description:
      'Used React to develop visual displays, business logic for a webapp that helps practioners view patients with Diabetes',
    color: midColor,
    icon: <CodeIcon color='secondary' />,
  },
  {
    title: 'Flow Diagrams',
    description:
      'Used Draw.io to create Message Sequence Charts, data flow diagrams to enable stakeholders understand the big picture of a software design',
    color: lightColor,
    icon: <AccountTreeIcon color='warning' />,
  },
]

export function Skills() {
  return (
    <Grid
      container
      direction={'column'}
      gap={1}
      id='Skills'
      // height='100vh'
    >
      <Typography variant='h4' fontWeight={'bold'}>
        What I do !
      </Typography>

      <p>Some tools and frameworks I've used to develop software:</p>

      {/* Cards showing skills in: App development, web Development, Document Design,  */}
      <Box
        sx={{
          display: 'inline-grid',
          gridTemplateColumns: 'auto auto auto',
          columnGap: 2,
        }}
      >
        {skillCards.map((skill, index) => (
          <Card
            key={index}
            variant='outlined'
            sx={{
              my: 2,
              p: 2,
              background: 'linear-gradient(to left, #f6f1d3 50%, #648880)',
              // backgroundColor: lightColor,
              border: '2px solid black',
              borderRadius: '25px',
            }}
          >
            <Box>
              <Typography variant='h6'>
                {skill.icon}
                {skill.title}
              </Typography>
            </Box>
            <CardContent>{skill.description}</CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Grid item xs={6}>
          <div className='background_light' sx={{ padding: '2rem' }}>
            <Typography variant='h6'>Proficient</Typography>
            <List>
              {proficient_skills_list.map(({ icon, label }, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar>{icon}</Avatar>
                  </ListItemAvatar>

                  {label}
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>

        {/* List of familiar skills and frameworks */}
        <Grid item xs={6}>
          <div className='background_light' sx={{ padding: '2rem' }}>
            <Typography variant='h6'>Familiar</Typography>
            <List>
              {familiar_skills_list.map(({ icon, label }, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar> {icon}</Avatar>
                  </ListItemAvatar>
                  <ListItemText>{label}</ListItemText>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Box>
    </Grid>
  )
}
