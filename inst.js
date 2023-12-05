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
      title: 'Section',
      dataIndex: 'section',
      key: 'section',
      width: '25%',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: '75%',
    },
  ];

  const data = [
    {
      key: '1',
      section: (
        <span style={{ color: 'blue' }}>Performance Evaluation</span>
      ),
      description:
        'The appraiser has to assess the performance of the Appraisee with regard to Key Result Areas, amounting to a maximum score of 75 points.',
    },
    {
      key: '2',
      section: (
        <span style={{ color: 'blue' }}>Critical Success Factors</span>
      ),
      description:
        'The appraiser has to assess the Appraisee in relation to the factors conducive to good performance on the job, assigning each factor a maximum of 5 points, totaling to a maximum score of 25 points.',
    },
    {
      key: '3',
      section: (
        <span style={{ color: 'blue' }}>KRA (Key Result Areas)</span>
      ),
      description:
        'KRAs for the next review period with specific time lines and weightages need to be worked out, in agreement between the appraiser and appraisee.',
    },
    {
      key: '4',
      section: (
        <span style={{ color: 'blue' }}>Development Plan</span>
      ),
      description:
        'The appraiser assists in identifying specific opportunities for development and improvement of Appraisee, and helps to arrive at a specific action plan to achieve the set goals.',
    },
    {
      key: '5',
      section: (
        <span style={{ color: 'blue' }}>Guidelines</span>
      ),
      description:
        'Read the performance manual before filling up the form. Complete the process in one sitting. The appraisal is required to be carried out by the immediate superior (Appraiser) in discussion with the Appraisee. The performance plan, outlining KRAs for the review period shall be drawn during the course of the appraisal meeting. The discussion will also be used to arrive at the developmental needs of the appraisee. A representative from the HR department will be part of the appraisal discussion and Performance planning for review period facilitator.',
    },
  ];

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
                color: '#87CEFA',
                fontSize: '1.5rem',
              }}
            >
              PERFORMANCE MANAGEMENT FORM <br />
              REVIEW PERIOD APRIL 2022 TO MARCH 2023 <br />
              LEVEL GS1-GS4, TT, GT, ET, PGT
            </h2>

            <div
              style={{
                backgroundColor: '#87CEEB',
                padding: '10px',
                borderRadius: '5px',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              (To be filled jointly by the appraiser and appraisee)
            </div>
            <p>
              The objective of the Performance Management System is to provide
              clarity, help an individual plan his/her performance and to
              provide regular feedback and evaluation on performance. This system
              also aims to identify Development opportunities for each
              individual.
              <br />
              <br /> This form has the following sections.
              <br /> <br />
            </p>

            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              bordered
              size='middle'
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <Button
              style={{
                backgroundColor: '#87CEFA',
                color: 'white',
                fontWeight: 'bold',
                height: '50px',
                width: '100px',
                border: 'none',
              }}
              onClick={handleclk}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
