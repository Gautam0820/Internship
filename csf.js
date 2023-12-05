import React from 'react';
import { useRouter } from 'next/router';
import { Button, Table } from 'antd';
import 'antd/dist/antd.css';


const csf = () => {
    const route = useRouter();
    console.log('route', route.query.id);

    const data = [
        {
            key: '8',
            factor: 'Communication',
            rating: '0',
            description: 'Share information at the right time, expresses thought clearly, writes clearly and concisely. Communication clearly, keeps superior appropriately informed. Listens to other peoples view points.',
        },
        {
            key: '9',
            factor: 'Attitude to work',
            rating: '0',
            description: 'A positive, enthusiastic and willing attitude to work with receptivity to new ideas. Is cheerful and energetic. Refuses to engage in gossip.',
        },
        {
            key: '10',
            factor: 'Judgement and Dependability',
            rating: '0',
            description: 'Reliable in following through assignments and instructions. Consistency in meeting targets. Ability to think intelligently and make logical decisions concerning own and related work.',
        },
        // Add more data items as needed
    ];

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12">
                    <div className='lll'>
                        <br/><br/>
                        <Table className='tbl-aaa' style={{ border: '1px solid black', height: '50px', width: '100%', borderCollapse: 'collapse', borderRadius: '10px', padding: '10px', overflow: 'hidden' }}>
                            <br/><br/>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginRight: '30px' }}>
                                <p>Name:</p>
                                <p>EmpNo:</p>
                            </div>
                            <br/>
                            <h2 className='head' style={{ textAlign: 'center', marginBottom: '20px' }}>
                                <u>CRITICAL SUCCESS FACTORS : APRIL 2022 TO MARCH 2023</u>
                            </h2>
                            <p style={{ textAlign: 'center' }}>
                                These are measures that focus on how the job is to be accomplished and include skills, knowledge and behaviour that improve job effectiveness/performance
                            </p>
                            <p style={{ textAlign: 'left', marginLeft: '20px' }}>
                                <br/><b>Rate each of the 10 items using the following scale and circle the number corresponding to the rating against each item.</b> <br/>
                                1. <u>Unsatisfactory :</u> Fails to achieve results expected; deficient in meeting minimum expectations. Improvement needed to reach competent level. Requires more than expected supervision <br/>
                                2.<u> Improvement Needed:</u> Mostly meets basic standards. Never surpasses expectations. Improvement is necessary in many work related areas. <br/>
                                3.<u>Good:</u> Meets basic standards and requirements consistently. occasionally surpasses expectations in quality and deliverance of work. <br/>
                                4. <u>Very Good:</u> High quality performance on a consistent basis. Surpasses expectations most of the times. <br/>
                                5.<u>Outstanding:</u> Achievements consistently exceed expectations. Takes significant contributions well beyond job responsibilities.
                            </p>
                            <br/>

                            <Table className='tbl-cst' style={{ padding: '10px' }} dataSource={data}>
                                <Table.Column title="Factor" dataIndex="factor" key="factor" />
                                <Table.Column title="Description" dataIndex="description" key="description" />
                                <Table.Column title="Rating" dataIndex="rating" key="rating" />
                            </Table>

                            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                                <p>TOTAL</p>
                                <p>Critical Success Factors Score = Total X 25</p>
                                <p>Total Critical Success Factors Score = 0.0/25</p>
                            </div>
                        </Table>
                        <div style={{ textAlign: 'center', marginTop: '10px' }}>
                            <Button style={{ marginRight: '10px', height: '50', width: '100px' }}>Previous</Button>
                            <Button style={{ marginLeft: '10px', height: '50', width: '100px' }}>Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default csf;
