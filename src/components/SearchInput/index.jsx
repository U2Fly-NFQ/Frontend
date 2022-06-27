import { Input } from 'antd'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const { Search } = Input

const SearchCustom = (props) => {
  const { style } = props
  const [text, setText] = useState('')
  const { t } = useTranslation()

  const firstUpdate = useRef(true)

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }

    const timerId = setTimeout(() => {}, 500)

    return () => clearTimeout(timerId)
  }, [text])

  return (
    <Search
      placeholder={t('cta.place-holder-search')}
      enterButton={t('cta.search')}
      value={text}
      onChange={(e) => setText(e.target.value)}
      style={{ ...style }}
    />
  )
}

export default SearchCustom
