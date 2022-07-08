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

function RegisterBanner() {
  const { t } = useTranslation()

  const x = useMotionValue(0)
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
  const { scrollYProgress } = useViewportScroll()

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
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
            <Title level={1}>{t('Register your account')}</Title>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 200,
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Title level={3}>To join a whole new world</Title>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default RegisterBanner
