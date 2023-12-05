import React from 'react';
import { useRouter } from 'next/router';
import { Button, Table } from 'antd';
import 'antd/dist/antd.css';

const CSF = () => {
  const router = useRouter();
  console.log('route', router.query.id);

  const columns = [
    {
      title: '',
      dataIndex: 'item',
      key: 'item',
      width: '5%',
    },
    {
      title: '',
      dataIndex: 'criticalSuccessFactors',
      key: 'criticalSuccessFactors',
      width: '65%',
    },
    {
      title: '',
      dataIndex: 'rating',
      key: 'rating',
      width: '10%',
    },
  ];

  const data = [
    {
      key: '8',
      item: '8',
      criticalSuccessFactors: (
        <span style={{ color: 'blue' }}>Communication</span>
      ),
      rating: '0',
    },
    {
      key: '8-details',
      item: '',
      criticalSuccessFactors: (
        <div>
          Share information at the right time, express thoughts clearly, write
          clearly and concisely. Communication clearly, keeps superiors
          appropriately informed. Listens to other people’s viewpoints.
        </div>
      ),
      rating: '',
    },
    {
      key: '9',
      item: '9',
      criticalSuccessFactors: (
        <span style={{ color: 'blue' }}>Attitude to Work</span>
      ),
      rating: '0',
    },
    {
      key: '9-details',
      item: '',
      criticalSuccessFactors: (
        <div>
          A positive, enthusiastic, and willing attitude to work with receptivity
          to new ideas. Is cheerful and energetic. Refuses to engage in gossip.
        </div>
      ),
      rating: '',
    },
    {
      key: '10',
      item: '10',
      criticalSuccessFactors: (
        <span style={{ color: 'blue' }}>Judgment and Dependability</span>
      ),
      rating: '0',
    },
    {
      key: '10-details',
      item: '',
      criticalSuccessFactors: (
        <div>
          Reliable in following through assignments and instructions. Consistency
          in meeting targets. Ability to think intelligently and make logical
          decisions concerning own and related work.
        </div>
      ),
      rating: '',
    },
  ];

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='lll'>
            <br /> <br />
            <h2
              style={{
                textAlign: 'center',
                marginBottom: '20px',
                color: 'blue',
              }}
            >
              <u>CRITICAL SUCCESS FACTORS : APRIL 2022 TO MARCH 2023</u>
            </h2>
            <p style={{ textAlign: 'center' }}>
              These are measures that focus on how the job is to be accomplished
              and include skills, knowledge, and behavior that improve job
              effectiveness/performance
            </p>
            <p style={{ textAlign: 'left', marginLeft: '20px' }}>
              <br />
              <b>
                Rate each of the 10 items using the following scale and circle
                the number corresponding to the rating against each item.
              </b>{' '}
              <br />
              1. <u>Unsatisfactory :</u> Fails to achieve results expected;
              deficient in meeting minimum expectations. Improvement needed to
              reach competent level. Requires more than expected supervision
              <br />
              2. <u>Improvement Needed:</u> Mostly meets basic standards. Never
              surpasses expectations. Improvement is necessary in many work
              related areas.
              <br />
              3. <u>Good:</u> Meets basic standards and requirements
              consistently. Occasionally surpasses expectations in quality and
              deliverance of work.
              <br />
              4. <u>Very Good:</u> High-quality performance on a consistent
              basis. Surpasses expectations most of the time.
              <br />
              5. <u>Outstanding:</u> Achievements consistently exceed
              expectations. Takes significant contributions well beyond job
              responsibilities.
            </p>
            <br />
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              bordered
              size='middle'
            />
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <p style={{ color: 'blue', fontWeight: 'bold' }}>TOTAL</p>
              <p>
                Critical Success Factors Score = Total X 25 ={' '}
                <span style={{ color: 'blue' }}>0.0/25</span>
              </p>
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
    </div>
  );
};

export default CSF;
