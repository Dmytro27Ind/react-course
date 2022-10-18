import React from 'react'
import classes from './MyButton.module.css'

function MyButton({children, ...props}) {
  return (
    //* {...props} from this way we can pass all parameters to our button
    <button {...props} className={classes.myBtn}>
        {children}
    </button>
  )
}

export default MyButton