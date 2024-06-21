import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({simplified}) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({count: simplified ? 6 : 20 });

  console.log(cryptoNews)
  if(!cryptoNews?.data) return "Loading..."

  return (
    <Row gutter={[24,24]}>
      {cryptoNews.data.map((news, i) =>(
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.url} target='_blank' rel='noreferrer'>
              <div className='news-image-container'>
                <Title className='news-title' level={4}>{news.title}</Title>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News