import React from 'react'
import Axios from 'axios';
import { Button } from 'antd';
const DemoComponent = () => {
    const [demoData,setDemoData]=React.useState(null)
    React.useEffect(()=>{
        Axios.get('api/demo')
        .then(({data})=>{
            console.log('apidta',data)
        })
    },[])
    const postDDData=(id)=>{
        try {
            Axios.post('api/demo/demo1',{rt:id})
        .then(({data})=>{
            console.log('apipost-dta',data)
            setDemoData(data)
        })
        } catch (error) {
            
        }
    }
  return (
    <div>

        <Button 
        onClick={()=>postDDData('NN')}
        >Post DT Data</Button>

        <div>
            {demoData!==null?demoData.map((d,idx)=>
            <p key={idx}>Wordno:{d.DL01}</p>
            ):<></>}
        </div>
    </div>
  )
}

export default DemoComponent