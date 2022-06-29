import React, { useEffect, useState } from 'react'
import { Col, Row, Table, Layout, Button, Dropdown, Menu } from 'antd'
import {
  DeleteOutlined,
  DownOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons'
import { useDispatch } from 'react-redux'

const { Content } = Layout

function AdminFlights() {
  //initiation
  const dispatch = useDispatch()
  const [disabledActions, setDisabledActions] = useState(true)
  const [loading, setLoading] = useState(true)
  //Logical handling functions
  const handleSelectChange = () => {}
  const handleDelete = () => {}

  //Data for UI
  const flightListColumn = [
    {
      title: 'ID',
      dataIndex: 'key',
      width: 50,
      sorter: (a, b) => a.key - b.key,
    },
    {
      title: 'Code',
      dataIndex: 'code',
      width: 100,
      sorter: (a, b) => a.code.length - b.code.length,
    },
    {
      title: 'Arrival',
      dataIndex: 'arrival',
      width: 200,
      sorter: (a, b) => a.arrival.length - b.arrival.length,
    },
    {
      title: 'Start Time',
      dataIndex: 'startTime',
      width: 200,
      sorter: (a, b) => a.startTime.length - b.startTime.length,
    },
    {
      title: 'Departure',
      dataIndex: 'departure',
      width: 250,
      sorter: (a, b) => a > b,
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      width: 250,
      sorter: (a, b) => a.duration - b.duration,
    },
    {
      title: 'Airline',
      dataIndex: 'airline',
      width: 250,
      sorter: (a, b) => a.airline.length - b.airline.length,
    },
  ]
  const actionForMenu = {
    // eslint-disable-next-line no-use-before-define
    actionDelete: handleDelete,
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      // dispatch(fetchFlights())
    }, 500)
  }, [dispatch])

  const menu = (
    <Menu
      onClick={(e) => actionForMenu[e.key]()}
      items={[
        {
          key: 'actionDelete',
          icon: <DeleteOutlined />,
          label: 'Delete',
        },
      ]}
    />
  )

  const data = [
    {
      key: 1,
      code: 'VN-487',
      arrival: 'VCA',
      departure: 'SGN',
      duration: 1.5,
      startTime: '2022-03-26 18:14:29',
      airline: 'Vietnam Airlines',
    },
    {
      key: 2,
      code: 'VN-567',
      arrival: 'VCA',
      departure: 'SGN',
      duration: 1.5,
      startTime: '2022-03-26 20:14:29',
      airline: 'Vietnam Airlines',
    },
    {
      key: 3,
      code: 'VJ-123',
      arrival: 'VCA',
      departure: 'HAN',
      duration: 3,
      startTime: '2022-03-26 21:30:29',
      airline: 'Vietnam Airlines',
    },
    {
      key: 4,
      code: 'BA-567',
      arrival: 'SGN',
      departure: 'HAN',
      duration: 3,
      startTime: '2022-03-27 00:00:29',
      airline: 'Vietjet Air',
    },
    {
      key: 5,
      code: 'VN-123',
      arrival: 'HAN',
      departure: 'SGN',
      duration: 3,
      startTime: '2022-03-27 02:30:29',
      airline: 'Vietjet Air',
    },
    {
      key: 6,
      code: 'VJ-767',
      arrival: 'HAN',
      departure: 'VCA',
      duration: 4,
      startTime: '2022-03-27 06:30:29',
      airline: 'Bamboo Airline',
    },
    {
      key: 7,
      code: 'BA-789',
      arrival: 'VCA',
      departure: 'HAN',
      duration: 4,
      startTime: '2022-03-28 11:15:29',
      airline: 'Bamboo Airline',
    },
  ]
  return (
    <Content className="admin-flights">
      <Row className="admin-flights-action">
        <Col span={12} className="admin-flights-action-left">
          <Dropdown disabled={disabledActions} overlay={menu}>
            <Button icon={<DownOutlined />}>Actions</Button>
          </Dropdown>
        </Col>
        <Col span={12} className="admin-flights-action-right">
          <Button
            icon={<PlusCircleOutlined />}
            type="primary"
            // onClick={() => setVisibleAdd(true)}
          >
            Add
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table
            rowSelection={{
              onChange: handleSelectChange,
            }}
            columns={flightListColumn}
            dataSource={data}
            // loading={loading}
          />
        </Col>
      </Row>
    </Content>
  )
}

export default AdminFlights
