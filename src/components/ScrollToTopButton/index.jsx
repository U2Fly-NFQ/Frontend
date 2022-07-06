import { Button } from 'antd'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import './style.scss'

const ScrollToTopButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', updatePosition)

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {scrollPosition > 100 && (
        <motion.div
          className="scroll-to-top-container"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
          exit={{ y: -100, opacity: 0, transition: { duration: 0.6 } }}
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 1 }}
        >
          <Button size="large" type="primary" shape="circle" onClick={goToTop}>
            <i className="fa-solid fa-arrow-up"></i>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default ScrollToTopButton
