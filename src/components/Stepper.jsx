import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper' 
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import List from './List'
import ItensOptions from './ItensOptions'


const tutorialSteps = [
  {
    label: 'Dough type',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Size',
    type: 'options',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Top',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'Accompaniment',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Review',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    padding: theme.spacing(6),
    // height: '80%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    paddingTop: theme.spacing(1),
  },
  img: {
    height: '80%',
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}))

export default function TextMobileStepper() {
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = tutorialSteps.length
  const [useForm, setUseForm] = React.useState()
  console.log(useForm)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <div className={classes.root}>
      {/* <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper> */}
      {tutorialSteps[activeStep].type === 'options' ?
      <>
        <ItensOptions useForm={useForm} title={tutorialSteps[activeStep].label} />
        </>
        : <List 
          setUseForm={setUseForm}
          title={tutorialSteps[activeStep].label}
          />
      }
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          activeStep === maxSteps - 1 ?
            <Button size="small" onClick={handleNext}>
              Send
            </Button>
            :
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  )
}