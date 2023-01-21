import React from 'react';
import Box from '../components/box/Box';
import { Bar } from 'react-chartjs-2';
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperLeft } from '../components/dashboard-wrapper/DashboardWrapper';
import SummaryBox, { SummaryBoxSecial } from '../components/summary-box/SummaryBox';
import { colors,data } from '../constants';
import OverallList from '../components/overal-list/OverallList';
import RevenueList from '../components/revenue-list/RevenueList';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend

} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)


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
                            <SummaryBox item={item}/>
                        </div>
                    ))
                }
              </div>
            </div>
            <div className="col-4 hide-md">
              <SummaryBoxSecial item={data.revenueSummary}/>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Box>
                <RevenueByMontsChart/>
              </Box>
            </div>
          </div>
    </DashboardWrapperMain>
    <DashboardWrapperLeft>
      <div className="title mb">Overall</div>
      <div className="mb">
            <OverallList/>
      </div>
      <div className="title mb">Revenue by channel</div>
      <div className="mb">
            <RevenueList/>
      </div>
    </DashboardWrapperLeft>
  </DashboardWrapper>
  )
}

export default Dashboard

const RevenueByMontsChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
            display: false,
            drawBorder: false
        }
      },
      yAxes: {
        grid: {
            display: false,
            drawBorder: false
        }
      }
    },
    Plugins: {
      legend: {
        display: false
      },
      title: {
        display: false
      }
    },
    elements: {
      bar: {
        backgroundColor: colors.orange,
        borderRadius: 20,
        borderSkipped: 'bottom'

      }
    }
  }

  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [
      {
        label: 'Revenue',
        data: data.revenueByMonths.data
      }
    ]
  }
  return (
    <>
        <div className="title mb">
          Revenue by months
        </div>
        <div>
          <Bar options={chartOptions} data={chartData} height={`300px`} />
        </div>
    </>
      
  )
}