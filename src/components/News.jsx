import React from 'react'
import { Typography, Row, Col, Card } from 'antd'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const { Title } = Typography;

const News = ({simplified}) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery();
  if(!cryptoNews?.data) return "Loading..."

  const newsArray = cryptoNews?.data?.items?.map((news) => news).slice(1,7)

  const showAllNews = cryptoNews?.data?.items?.map((news) => news).slice(1,25)

  const renderNews = simplified ? newsArray : showAllNews;

  return (
    <Row gutter={[24,24]}>
      { renderNews.map((news, i) =>(
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={news.source_url} target='_blank' rel='noreferrer'>
              <div className='news-image-container'>
                <Title className='news-title' level={5}>
                  {news.title.length > 60 
                      ? `${news.title.substr(0,60)}...` 
                      : news.title
                  }
                </Title>
                <img style={{maxWidth: '200px', maxHeight:'75px'}} src={news.image_url} alt='img'/>
              </div>
              <p>{news.content.length > 200
                    ? `${news.content.substr(0,190).replace(/<\/?[^>]+(>|$)/g, "")}...`
                    : news.content.replace(/<\/?[^>]+(>|$)/g, "")
                  }
              </p>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News