import { motion } from 'framer-motion'
import { Typography } from 'antd'

import './style.scss'
import { useTranslation } from 'react-i18next'

const { Title } = Typography

function LoginBanner() {
  const { t } = useTranslation()

  return (
    <section className="login-banner">
      <div className="grid wide">
        <motion.div
          initial={{
            opacity: 0,
            x: -200,
          }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Title level={1}>Welcome back</Title>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 200,
          }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Title level={3}>Logged in to stay in touch</Title>
        </motion.div>
      </div>
    </section>
  )
}

export default LoginBanner
