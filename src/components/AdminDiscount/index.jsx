import React, { useEffect, useState } from 'react'
import {
  Table,
  Typography,
  Button,
  Modal,
  Form,
  message,
  Popconfirm,
} from 'antd'

import { DeleteOutlined } from '@ant-design/icons'
import moment from 'moment'

import CreatgeDiscountForm from './CreateDiscountForm'

import { useDispatch, useSelector } from 'react-redux'
import {
  fetchDiscounts,
  createDiscount,
  deleteDiscount,
} from '../../redux/slices/discountSlice'
import { discountSelector, discountStatusSelector } from '../../redux/selectors'

function AddminDiscount() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  let data = useSelector(discountSelector)
  if (data && data.length > 0) {
    data = data.map((discount) => ({
      ...discount,
      percent: discount.percent * 100,
      key: discount.id,
    }))
  }

  const status = useSelector(discountStatusSelector)
  useEffect(() => {
    if (data && data.length === 0) {
      dispatch(fetchDiscounts())
    }
  }, [])

  const handleDelete = (record) => {
    dispatch(deleteDiscount(record.id))
    message.info(`${record.name} has been deleted!`)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onFinish = (values) => {
    const discount = {
      name: values.name,
      percent: values.value / 100,
    }
    dispatch(createDiscount(discount))
    setIsModalVisible(false)
  }

  const onFinishFailed = (errorInfo) => {
    message.error('Create discount failed')
    console.log('Failed', errorInfo)
    setIsModalVisible(false)
  }

  const columns = [
    {
      title: 'Code',
      dataIndex: 'name',
      render: (text) => <Typography.Paragraph>{text}</Typography.Paragraph>,
    },
    {
      title: 'Value',
      dataIndex: 'percent',
      render: (text) => (
        <Typography.Paragraph>{text + '%'}</Typography.Paragraph>
      ),
    },
    {
      title: 'Date created',
      dataIndex: 'createdAt',
      render: (text) => (
        <Typography.Paragraph>
          {moment(text).format('MMMM Do YYYY, h:mm:ss')}
        </Typography.Paragraph>
      ),
    },
    {
      title: 'Actions',
      render: (_, record) => (
        <Popconfirm
          title="Are you sure to delete this discount?"
          onConfirm={() => handleDelete(record)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="text" style={{ color: 'red' }}>
            <DeleteOutlined />
          </Button>
        </Popconfirm>
      ),
    },
  ]

  return (
    <>
      <div
        style={{
          marginBottom: '10px',
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <Button
          type="primary"
          onClick={() => setIsModalVisible(true)}
          style={{
            borderRadius: '12px',
          }}
        >
          Add a discount
        </Button>
      </div>

      <Modal
        visible={isModalVisible}
        okText="Create"
        onCancel={handleCancel}
        title="Create discount"
        onOk={form.submit}
      >
        <CreatgeDiscountForm
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        />
      </Modal>
      <Table
        columns={columns}
        dataSource={data}
        loading={status === 'pending'}
      />
    </>
  )
}

export default AddminDiscount
