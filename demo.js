import React from 'react'
import Axios from 'axios';
import DemoComponent from '../pages/DemoComponent';
/*export const getServerSideProps = (async (context) => {
    const res = await fetch('http://localhost:3000/api/demo')
    const repo = await res.json()
    return { props: { repo } }
  })*/
const demo = ({repo}) => {
    
    
  return (
    <>
    <DemoComponent/>
    </>
  )
}

export default demo