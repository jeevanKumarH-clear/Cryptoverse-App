import React from 'react'
import { Line } from 'react-chartjs-2'
import { Col, Row, Typography } from 'antd'
import { useGetCryptoCoinHistoryQuery } from '../services/cryptoCoinHistory';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);
const { Title } = Typography;

const LineChart = ({coinName, currentPrice, priceChange}) => {
const currency = coinName.toLowerCase() 
const { data: currencyHistory , error, isLoading } = useGetCryptoCoinHistoryQuery({ currency, length : '90'});

if (isLoading) return "Loading...";
if (error) return `Error: ${error.message}`;

const coinPrice = [];
const coinTimeStamp = [];

    if (currencyHistory?.data?.market_chart) {
        currencyHistory.data.market_chart.map((entry) => {
          coinPrice.push(entry.price);
          coinTimeStamp.push(new Date(entry.timestamp).toLocaleDateString());
          return null;
        });
      }
  
    const data = {
      labels: coinTimeStamp,
      datasets: [
        {
          label: `Price of ${coinName} in USD`,
          data: coinPrice,
          fill: false,
          backgroundColor: '#0071bd',
          borderColor: '#0071bd',
        },
      ],
    };
  
    const options = {
      scales: {
        x: {
          type: 'category',
          labels: coinTimeStamp,
        },
        y: {
          beginAtZero: true,
        },
      },
    }; 

    return (
    <>
        <Row className='chart-header'>
            <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
            <Col className='price-container'>
                <Title level={5} className='price-change'>{priceChange}%</Title>
                <Title level={5} className='current-price'>Current {coinName} Price: $ {currentPrice}</Title>
            </Col>
        </Row>
        <Line data={data} options={options}/>
    </>
  )
}

export default LineChart