import { Button, Result } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoMatch = () => {
  const navigate = useNavigate()

  return (
    <>
      <Result
        style={{
          paddingTop: '128px',
        }}
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            Back Home
          </Button>
        }
      />
    </>
  )
}

export default NoMatch
