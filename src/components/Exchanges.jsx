import React from 'react'
import millify from 'millify'
import { Collapse, Row, Col, Typography } from 'antd'
import { useGetExchangesQuery } from '../services/cryptoCoinHistory';

const { Text, Title } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  if (isFetching) return "Loading..."

  const exchangesList = data.data.items;
  return (
    <>
      <Row>
        <Col className='exchanges-header' span={6}>Exchanges</Col>
        <Col className='exchanges-header' span={6}>24h Trade Volume</Col>
        <Col className='exchanges-header' span={6}>Open Interest</Col>
        <Col className='exchanges-header' span={6}>Website</Col>
      </Row>
      <Row>
        {exchangesList.map((exchange,i) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={(
                  <Row key={exchange.id}>
                    <Col span={6}>
                      <Text><strong>{i+1}. </strong></Text>
                      <Text><strong>{exchange.exchange_name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(exchange.vol_spot_24h)}</Col>
                    <Col span={6}>${millify(exchange.open_interest)}</Col>
                    <Col span={6}><a href={exchange.website}>{exchange.exchange_name}.com</a></Col>
                  </Row>
                )}>
                    <Title level={3}>Other Details</Title>
                    <Row><strong>Rating: </strong>{exchange.rating_spot}</Row>
                    <Row><strong>Volume Derivatives: </strong>{millify(exchange.vol_derivatives_24h)}</Row>
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Exchanges