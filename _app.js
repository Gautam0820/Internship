import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Development_plan'
import './per'
import './inst'
import './critical'
import './csf'
import './login'
import { useRouter } from 'next/router';
import './custom.css'
import 'antd/dist/antd.css';

const app = ({Component,pageProps}) => {
  
  const route=useRouter()
  console.log('route',route.query.id)
  return (
    <div>
        <Component{...pageProps}/>
    </div>
  )
}

export default app