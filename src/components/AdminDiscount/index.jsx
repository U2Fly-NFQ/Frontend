import React, { useEffect, useState } from 'react'
import { Table, Typography, Button, Modal, Form, message } from 'antd'
import moment from 'moment'

import CreatgeDiscountForm from './CreateDiscountForm'

import { useDispatch, useSelector } from 'react-redux'
import {
  fetchDiscounts,
  createDiscount,
} from '../../redux/slices/discountSlice'
import { discountSelector, discountStatusSelector } from '../../redux/selectors'

function AddminDiscount() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const data = useSelector(discountSelector).map((discount) => ({
    ...discount,
    key: discount.id,
  }))
  const status = useSelector(discountStatusSelector)

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchDiscounts())
    }
  }, [])

  const handleDelete = (record) => {
    // dispatch(deleteDiscount(record.id))
    // dispatch(fetchDiscounts())
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onFinish = (values) => {
    const discount = {
      name: values.discount,
      percent: values.value,
    }
    dispatch(createDiscount(discount))
    dispatch(fetchDiscounts())
    setIsModalVisible(false)
  }

  const onFinishFailed = (errorInfo) => {
    message.error('Create discount failed')
    console.log('Failed', errorInfo)
    setIsModalVisible(false)
  }

  const columns = [
    {
      title: 'Discount name',
      dataIndex: 'name',
      render: (text) => (
        <Typography.Paragraph strong>{text}</Typography.Paragraph>
      ),
    },
    {
      title: 'Value',
      dataIndex: 'percent',
      sorter: {
        compare: (a, b) => a.value - b.value,
      },
      render: (text) => (
        <Typography.Paragraph strong>{text + '%'}</Typography.Paragraph>
      ),
    },
    {
      title: 'Date created',
      dataIndex: 'createdAt',
      sorter: {
        compare: (a, b) => a.createdAt - b.createdAt,
      },
      render: (text) => (
        <Typography.Paragraph strong>
          {moment(text).format('MMMM Do YYYY, h:mm:ss')}
        </Typography.Paragraph>
      ),
    },
    {
      title: 'Delete',
      render: (_, record) => (
        <Button
          type="text"
          style={{ color: 'red' }}
          onClick={() => handleDelete(record)}
        >
          Delete
        </Button>
      ),
    },
  ]

  return (
    <>
      <div
        style={{
          marginBottom: '10px',
        }}
      >
        <Button type="primary" onClick={() => setIsModalVisible(true)}>
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
