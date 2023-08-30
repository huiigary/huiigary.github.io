import {
  Avatar,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
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
} from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import { Box } from '@mui/system'
import { MobileFriendly, Code, AccountTree, Brush } from '@mui/icons-material'
import { colors } from '../../../colors'

const proficient_skills_list = [
  { icon: <SiTypescript color='yellow' />, label: 'TypeScript/JavaScript' },
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
  { icon: null, label: 'HTML' },
  { icon: null, label: 'CSS' },
]
const familiar_skills_list = [
  { icon: <SiNodedotjs />, label: 'Node.js' },
  { icon: <SiAmazonaws />, label: 'AWS' },
  { icon: <SiPython />, label: 'Python' },
  { icon: <DiJava />, label: 'Java' },
  // { icon: <SiGo />, label: 'GoLang' },
  { icon: <SiDocker />, label: 'Docker' },
  { icon: null, label: 'NextJs' },
]

const skillCards = [
  {
    title: 'Mobile App Development',
    description:
      'Experienced developing with Angular and React-Native with Typescript to develop cross platform mobile applications for public and public and private use.',
    icon: <MobileFriendly color='red' />,
  },
  {
    title: 'Web Development',
    description:
      'Used React for front-end development of visual displays and business logic for a web app that helps practioners view patients with Diabetes. Also used NextJS and tech stacks, like PERN, to develop personal projects for learning purposes ',
    icon: <Code color='secondary' />,
  },
  {
    title: 'Wireframe/Design',
    description:
      'Used Adbobe XD and Draw.io to design a prototype of the mobile app screens should look like and how the user flows to each screen.',
    icon: <Brush color='primary' />,
  },
  {
    title: 'Flow Diagrams',
    description:
      'Used Draw.io to create Message Sequence Charts, data flow diagrams to enable stakeholders understand the big picture of a software design.',
    icon: <AccountTree color='warning' />,
  },
]

export default function Skills() {
  const SkillItem = ({ children }) => (
    <div
      style={{
        display: 'inline-block',
        textAlign: 'center',
        padding: '2rem 2rem',
        margin: '0.5rem',
        border: '2px solid black',
        color: colors.white,
        backgroundColor: colors.skills,
      }}
    >
      {children}
    </div>
  )
  return (
    <Grid
      container
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      id='Skills'
      padding={10}
      backgroundColor={colors.white}
    >
      <Typography variant='h3' fontWeight={'bold'} color={colors.primary}>
        Skills
      </Typography>

      {/* Cards showing skills  */}
      <Grid
        item
        sx={{
          display: 'inline-grid',
          gridTemplateColumns: 'auto auto',
          columnGap: 2,
          margin: 8,
        }}
      >
        {skillCards.map((skill, index) => (
          <Card
            key={index}
            variant='outlined'
            sx={{
              my: 2,
              p: 2,
              // background: 'linear-gradient(to left, #f6f1d3 50%, #648880)',
              backgroundColor: colors.background,
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
      </Grid>

      {/* List of Languages and Tools */}
      <Typography
        fontSize={'large'}
        fontWeight='bold'
        sx={{ textAlign: 'center' }}
      >
        Languages and Tools
      </Typography>

      <Grid item>
        {proficient_skills_list.map(({ icon, label }) => (
          <SkillItem>
            {/* {icon} */}
            {label}
          </SkillItem>
        ))}
      </Grid>

      <Grid item>
        {familiar_skills_list.map(({ icon, label }) => (
          <SkillItem>
            {/* {icon} */}
            {label}
          </SkillItem>
        ))}
      </Grid>
    </Grid>
  )
}
