import React from 'react';
import { useRouter } from 'next/router';
import { Button, Table } from 'antd';
import 'antd/dist/antd.css';

const Index = () => {
  const router = useRouter();

  const handleclk = () => {
    router.push('/navigatepg');
  };

  const columns = [
    {
      title:(
        <span style={{ color: 'blue' }}>Sr.No</span>
      ),
      dataIndex: 'srNo',
      key: 'srNo',
    },
    {
      title: (
        <span style={{ color: 'blue' }}>KRAs (in order of priority)</span>
      ),
      dataIndex: 'kra',
      key: 'kra',
    },
    {
      title: <span style={{ color: 'blue' }}>Time Line</span>,
      dataIndex: 'timeLine',
      key: 'timeLine',
    },
    {
      title: <span style={{ color: 'blue' }}>Measure of Achievement</span>,
      dataIndex: 'achievement',
      key: 'achievement',
    },
    {
      title: (
        <span style={{ color: 'blue' }}>
          Weightage for each KRA (Total should be 100)
        </span>
      ),
      dataIndex: 'weightage',
      key: 'weightage',
    },
    {
      title: <span style={{ color: 'blue' }}>Support Required</span>,
      dataIndex: 'supportRequired',
      key: 'supportRequired',
    },
  ];

  const data = [];

  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      data.push({
        key: `${i}-${j}`,
        srNo: j === 1 ? i : '',
        kra: j === 1 ? 'KRA' : 'Activity',
        timeLine: '',
        achievement: '',
        weightage: j === 1 ? '' : '',
        supportRequired: '',
      });
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div>
            <br /> <br />
            <h2
              style={{
                textAlign: 'center',
                marginBottom: '20px',
                color: 'blue',
              }}
            >
              <u>PERFORMANCE PLAN FOR APRIL 2022 TO MARCH 2023</u>
            </h2>
            <Table
              columns={columns}
              dataSource={data}
              bordered
              pagination={false}
              summary={(pageData) => {
                let totalWeightage = 0;
                pageData.forEach((item) => {
                  if (item.weightage) {
                    totalWeightage += parseFloat(item.weightage);
                  }
                });

                return (
                  <>
                    <Table.Summary.Row>
                      <Table.Summary.Cell index={0}>TOTAL</Table.Summary.Cell>
                      <Table.Summary.Cell colSpan={4}></Table.Summary.Cell>
                      <Table.Summary.Cell>
                        <span style={{ color: 'blue' }}>
                          {totalWeightage}
                        </span>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell></Table.Summary.Cell>
                    </Table.Summary.Row>
                  </>
                );
              }}
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <p style={{ color: 'blue' }}>Signature of Appraisee:</p>
            <p style={{ color: 'blue' }}>Signature of Appraiser:</p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <Button
              style={{
                backgroundColor: 'blue',
                color: 'white',
                fontWeight: 'bold',
                height: '50px',
                width: '100px',
                border: 'none',
                marginRight: '10px',
              }}
            >
              Previous
            </Button>
            <Button
              style={{
                backgroundColor: 'blue',
                color: 'white',
                fontWeight: 'bold',
                height: '50px',
                width: '100px',
                border: 'none',
                marginLeft: '10px',
              }}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
