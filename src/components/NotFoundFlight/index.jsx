import LoadingGif from '../../assets/images/system/not-found.webp'
import { Typography, Row, Col } from 'antd'

const { Text } = Typography

const NotFoundFlight = ({ style }) => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          ...style,
        }}
      >
        <Row>
          <Col span={24} justify="center">
            <Text
              style={{
                display: 'block',
                textAlign: 'center',
              }}
            >
              Sorry we didn't find any results matching this search
            </Text>
            <img
              style={{
                display: 'block',
                margin: 'auto',
                maxWidth: '100%',
                maxHeight: '300px',
                objectFit: 'contain',
              }}
              src={LoadingGif}
              alt="Loading GIF"
            />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default NotFoundFlight
