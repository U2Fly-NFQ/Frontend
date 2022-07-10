import LoadingGif from '../../assets/images/system/not-found.webp'
import { Typography, Row, Col } from 'antd'
import { useTranslation } from 'react-i18next'

const { Text } = Typography

const NotFoundFlight = ({ style }) => {
  const { t } = useTranslation()

  return (
    <>
      <div className="not-found-flight" style={style}>
        <Row>
          <Col span={24} justify="center">
            <Text
              style={{
                display: 'block',
                textAlign: 'center',
              }}
            >
              {t(
                "flight-list-page.Sorry we didn't find any results matching this search"
              )}
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
