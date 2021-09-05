import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
}))

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles()

  return (
    <Toolbar>
      <Paper square elevation={0} className={classes.root}>
        <Typography variant='h5'>{props.title}</Typography>
      </Paper>
    </Toolbar>
  )
}

export default EnhancedTableToolbar;
