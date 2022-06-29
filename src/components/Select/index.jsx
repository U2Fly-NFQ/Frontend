import { DownOutlined } from '@ant-design/icons'
import { Select } from 'antd'

const { Option } = Select

const SelectCustom = (props) => {
  const { defaultValue, style, onChange, options, suffixIcon } = props

  return (
    <>
      <Select
        suffixIcon={suffixIcon || <DownOutlined />}
        defaultValue={defaultValue}
        style={style}
        onChange={onChange}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
      >
        {options.map((option) => (
          <Option key={option.key}>
            <img
              style={{
                marginBottom: '2px',
                marginRight: '4px',
              }}
              src={option.icon}
              alt=""
            />
            {option.value}
          </Option>
        ))}
      </Select>
    </>
  )
}

export default SelectCustom
