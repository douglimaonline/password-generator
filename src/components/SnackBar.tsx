import React from 'react'
import '../styles/SnackBar.css'

interface SnackBarProps {
  showSnackBar: string
}

const SnackBar = (props: SnackBarProps) => {
  return (
    <div className={props.showSnackBar ? 'show' : ''} id="snackbar">
      Senha Copiada
    </div>
  )
}

export default SnackBar
