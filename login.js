import React from 'react';
import { useRouter } from 'next/router';
import { Form, Button, Input } from 'antd';
import 'antd/dist/antd.css';

const Login = () => {
  const router = useRouter();

  const handleclk = () => {
    router.push('/navigatepg');
  };

  const formItemLayout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };

  const formStyle = {
    border: '1px solid black', // Add a black border
    padding: '20px', // Add some padding for spacing
  };

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
          <div style={formStyle}> {/* Apply the style to the Form */}
            <h2 className='lll' style={{ textAlign: 'center', color: 'blue' }}>
              PERFORMANCE MANAGEMENT FORM
              <br />
              (Level GS1 - GS4)
            </h2>
            <div className='ooo'>
              <Form {...formItemLayout}>
                <Form.Item label="Name">
                  <Input placeholder="" />
                </Form.Item>

                <Form.Item label="Emp Code">
                  <Input placeholder="" />
                </Form.Item>

                <Form.Item label="Level">
                  <Input placeholder="" />
                </Form.Item>
              </Form>
            </div>
            <br /> <br />
            <div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '10px' }}>
              <Button type="primary">Proceed</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
  