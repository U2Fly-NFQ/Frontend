import { useTranslation } from 'react-i18next'
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import { Typography } from 'antd'
import './style.scss'

const { Title, Text } = Typography

function FlightListBanner() {
  const { t } = useTranslation()

  const x = useMotionValue(0)
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
  const { scrollYProgress } = useViewportScroll()

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

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
              <Title level={3}>Amazing journeys. Every day.</Title>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default FlightListBanner
