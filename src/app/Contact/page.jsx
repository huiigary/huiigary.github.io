'use client'
import {
  Alert,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
} from '@mui/material'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import '../styles/contact.css'
import EmailIcon from '@mui/icons-material/Email'
import HomeIcon from '@mui/icons-material/Home'
import { darkColor, lightColor, midColor } from '../constants/Colors'

export default function Contact() {
  const contactInfoArr = [
    { title: 'Email', detail: 'gary.hui75@gmail.com', icon: <EmailIcon /> },
    { title: 'Located At', detail: 'Vancouver, BC', icon: <HomeIcon /> },
  ]

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm()

  const [willPopupSuccess, setWillPopupSuccess] = useState(false)
  const [willPopupError, setWillPopupError] = useState(false)
  const [displayIncompleteMessage, setDisplayIncompleteMessage] =
    useState(false)

  const template_id = 'react_template_id'
  const service_id = 'react_contact_detail'
  const public_key = 'gzqYDH226zm5mP9TB'

  const displaySuccessMessage = () => {
    setWillPopupSuccess(true)
    setTimeout(() => setWillPopupSuccess(false), 5000)
  }

  const displayErrorMessage = () => {
    setWillPopupError(true)
    setTimeout(() => setWillPopupError(false), 5000)
  }
  const displayIncompleteFormMessage = () => {
    setDisplayIncompleteMessage(true)
    setTimeout(() => setDisplayIncompleteMessage(false), 5000)
  }

  const sendEmail = (event) => {
    console.log('clicked submit', { event }, form.current)
    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      (result) => {
        // clear form input to prevent spam emails
        // setValue('from_name', '')
        // setValue('reply_to', '')
        setValue('message', '')
        displaySuccessMessage()
        console.log(result.text, result)
      },
      (error) => {
        displayErrorMessage()
        console.log(error.text)
      }
    )
  }

  // display message to user to complete form
  const handleSubmitError = () => {
    console.log('submit error')
    displayIncompleteFormMessage()
  }

  const form = useRef()

  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'flex-start'}
      className='formPage'
      direction={'row'}
      // spacing={10}
    >
      {/* contact cards */}

      <Grid item>
        {contactInfoArr.map((info, index) => (
          <Card key={index} className='card'>
            <CardContent>
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                {info.icon}
                <Typography fontWeight={'bold'}>{info.title}:</Typography>
              </div>
              <Typography display={'flex'}>{info.detail}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>

      {/* fill in form */}
      <Grid item>
        <form onSubmit={handleSubmit(sendEmail, handleSubmitError)} ref={form}>
          {willPopupSuccess && (
            <Alert severity='success'>
              Successfully Emailed - Looking forward to connect with you!
            </Alert>
          )}
          {willPopupError && (
            <Alert severity='error'>
              An error occured trying to send email- Try again!
            </Alert>
          )}
          {displayIncompleteMessage && (
            <Alert severity='info'>Please fill in the form to reach me!</Alert>
          )}

          {/* start of form */}
          {/* <Typography variant='h3'>Contact Form</Typography> */}

          <div style={{ marginBottom: '2rem' }}>
            <Typography variant='h5'>I am always open to discuss</Typography>
            <Typography variant='h5' fontWeight={'bold'}>
              new opportunities and create new connections
            </Typography>
          </div>

          <div className='field-holder'>
            <label>Name</label>
            <input
              className='input'
              type='text'
              placeholder='Name*'
              {...register('from_name', {
                required: true,
              })}
            />
          </div>
          <div className='field-holder'>
            <label>Email</label>
            <input
              className='input'
              type='email'
              placeholder='Email*'
              {...register('reply_to', {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              })}
            />
          </div>
          <div className='field-holder'>
            {/* Message* */}
            <label>Message</label>
            <input
              className='input'
              type='text'
              placeholder='Message*'
              {...register('message', { required: true })}
            />
          </div>
          {/* submit form button */}
          <Button type='submit' variant='contained' style={{ display: 'flex' }}>
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  )
}
