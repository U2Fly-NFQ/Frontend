import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Typography } from 'antd'
import './style.scss'

const { Title, Text } = Typography

function FlightListBanner() {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="flight-list-banner">
        <div className="grid wide">
          <div className="flight-list-banner__text">
            <motion.div
              initial={{
                opacity: 0,
                x: -200,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Title level={1}>
                {t('flight-list-page.flight-banner.EXPLORE THE WORLD WITH US')}
              </Title>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                x: 200,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Title level={3}>
                {' '}
                {t(
                  'flight-list-page.flight-banner.Amazing journeys. Every day.'
                )}
              </Title>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default FlightListBanner
