import { useTranslation } from 'react-i18next'
import { Select } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import englishIcon from '../../assets/icons/united-kingdom.png'
import vietnameIcon from '../../assets/icons/vietnam.png'

import './style.scss'
import { useEffect } from 'react'

const { Option } = Select
const languageOptions = [
  {
    key: 'vi',
    value: 'VIE',
    icon: vietnameIcon,
  },
  {
    key: 'en',
    value: 'ENG',
    icon: englishIcon,
  },
]

const LanguageSelect = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  useEffect(() => {
    i18n.changeLanguage('en')
  }, [])

  return (
    <Select
      className="lang-select"
      size="small"
      suffixIcon={
        <DownOutlined
          style={{
            color: '#fff',
          }}
        />
      }
      value={i18n.language}
      onChange={changeLanguage}
      styles={{ menuPortal: (base) => ({ ...base, zIndex: 99 }) }}
    >
      {languageOptions.map((option) => (
        <Option key={option.key}>
          <img
            style={{
              marginBottom: '2px',
              marginRight: '4px',
            }}
            src={option.icon}
            value={option.key}
          />
          {option.value}
        </Option>
      ))}
    </Select>
  )
}

export default LanguageSelect
