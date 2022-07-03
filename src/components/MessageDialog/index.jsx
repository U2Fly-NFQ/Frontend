import { message } from 'antd'

const success = (msg) => {
  message.success({
    content: { msg },
    className: 'custom-class',
    style: {
      marginTop: '20vh',
    },
  })
}

export default success
