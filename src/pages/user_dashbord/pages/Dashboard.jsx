import React from 'react';

import Box from '../components/box/Box';

import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperLeft } from '../components/dashboard-wrapper/DashboardWrapper';

import { data } from '../constants';


const Dashboard = () => {
  return (
    <DashboardWrapper>
    <DashboardWrapperMain>
      <div className="row">
        <div className="col-8 col-md-12">
            <div className="row">
                {
                    data.summary.map((item, index) => (
                        <div key={`summary-${index}`} className="col-6 col-md-6 col-sm-12 mb">
                            <Box/>
                        </div>
                    ))
                }
            </div>

        </div>
      </div>
    </DashboardWrapperMain>
    <DashboardWrapperLeft>
      DashboardWapperLeft
    </DashboardWrapperLeft>
  </DashboardWrapper>
  )
}

export default Dashboard