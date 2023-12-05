import React from 'react';
import { useRouter } from 'next/router';
import { Button, Table, Input, Radio } from 'antd';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DevelopemntForm from '../components/devlopment/DevelopemntForm';






const { TextArea } = Input;

const Index = () => {
  

  return (
   <>
   <div className='mainpage'>
   <Container>
      <Row>
        <DevelopemntForm/>
      </Row>
    </Container>

    
   </div>
   
   </>
   
  );
};

export default Index;
