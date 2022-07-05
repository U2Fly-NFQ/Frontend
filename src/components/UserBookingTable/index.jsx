import React from 'react'
import { UserBookingDetail } from '../index'
import { Button, Space, Table } from 'antd'

function UserBookingTable({ loading, data }) {
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
      title: 'Booking Amount',
      dataIndex: 'bookingAmount',
      align: 'center',
      sorter: (a, b) => a.bookingAmount - b.bookingAmount,
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
  return (
    <Table
      columns={bookingListColumn}
      expandable={{
        expandedRowRender: (record) => (
          <UserBookingDetail detailData={record} />
        ),
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
