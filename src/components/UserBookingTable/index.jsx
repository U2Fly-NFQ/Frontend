import React, { useState } from 'react'
import { UserBookingDetail } from '../index'
import { Button, Space, Table } from 'antd'

function UserBookingTable({ loading, data }) {
  //initiation
  const [expandedRowKeys, setExpandedRowKeys] = useState([])

  //Data for UI
  const bookingListColumn = [
    {
      title: 'Booking ID',
      dataIndex: 'key',
      align: 'center',
      sorter: (a, b) => a.code - b.code,
    },
    {
      title: 'Journey',
      dataIndex: 'flights',
      align: 'center',
      render: (_, { flights }) => (
        <>
          {flights[0].departure}
          {flights.length === 2 ? (
            <i
              style={{ padding: '0 10px' }}
              className="fa-solid fa-arrow-right-arrow-left"
            ></i>
          ) : (
            <i
              style={{ padding: '0 10px' }}
              className="fa-solid fa-arrow-right-long"
            ></i>
          )}
          {flights[0].arrival}
        </>
      ),
    },
    {
      title: 'Booking Amount (USD)',
      dataIndex: 'total_price',
      align: 'center',
      sorter: (a, b) => a.total_price - b.total_price,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      align: 'center',
      sorter: (a, b) => a.status.length - b.status.length,
    },
    {
      title: 'Action',
      key: 'action',
      width: 100,
      align: 'center',
      render: (_, record) => (
        <Space>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Button
            danger
            type="primary"
            shape="default"
            // onClick={() => ()}
          >
            Cancel
          </Button>
          {}
        </Space>
      ),
    },
  ]
  const onExpandRowKey = (expanded, record) => {
    expanded ? setExpandedRowKeys(record.id) : setExpandedRowKeys([])
  }
  return (
    <Table
      columns={bookingListColumn}
      rowKey={(record) => record.id}
      expandable={{
        expandedRowRender: (record) => (
          <UserBookingDetail detailData={record} />
        ),
        expandedRowKeys: expandedRowKeys,
        onExpand: onExpandRowKey,
      }}
      dataSource={data}
      loading={loading}
      scroll={{
        x: 'max-content',
      }}
    />
  )
}

export default UserBookingTable
