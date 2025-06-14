import React from 'react'
import { ClipLoader } from 'react-spinners'

const override ={
  display: 'block',
  margin: '100pa auto'
}

const Spinner = ({loading}) => {
  return (
   <ClipLoader
   color='lightblue'
   loading={loading}
   cssOverride={override}
   size={250}
   />
  )
}

export default Spinner