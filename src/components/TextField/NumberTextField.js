import { TextField } from '@material-ui/core'
import React from 'react'

const NumberTextField = ({ value, handleChange, ...rest }) => {
  return (
    <TextField
      id="fontSize"
      name="size"
      label="fontSize"
      value={value}
      type="number"
      onChange={handleChange}
      variant="outlined"
      {...rest}
    />
  )
}

export default NumberTextField
