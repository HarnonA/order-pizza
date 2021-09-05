import React from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import EnhancedTableToolbar from './Toolbar'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    '& > *': {
      margin: theme.spacing(1),
    },
    '& > p': {
      width: '50%',
    },

  },
  line: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    '& > TextField': {
      maring: '10px',
    }

  },
  Text: {
    padding: '100',
  }
}))

export default function ItensOptions({ useForm, title }) {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <EnhancedTableToolbar title={title} />
      {useForm?.map(pizzaTop =>
        <div key={pizzaTop} className={classes.root}>
          {console.log(useForm)}
          <p>{pizzaTop}</p>
          <div className={classes.line}>
            <TextField multiline label="Requests" variant="outlined" />
            <ButtonGroup variant="contained" color="primary">
              <Button color='secondary'>-</Button>
              <TextField className={classes.text} size="small" id="outlined-basic" label="Quantity" variant="outlined" />
              <Button color='primary'>+</Button>
            </ButtonGroup>
          </div>
        </div>
      )}
    </Paper>
  )
}
