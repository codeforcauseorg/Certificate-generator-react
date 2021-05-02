import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: theme.palette.primary.main,
    color: '#000000',
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    '&:hover': {
      backgroundColor: 'rgba(241, 0, 45, 0.9)'
    }
  }
}))

function ButtonComponent({ className, title, icon, ...rest }) {
  const classes = useStyles()
  return (
    <Button className={clsx(classes.btn, className)} {...rest}>
      {icon}
      {title}
    </Button>
  )
}

ButtonComponent.propTypes = {
  title: PropTypes.string
}

export default ButtonComponent
