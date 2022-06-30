import React, { useEffect, useState } from 'react'
import { Col, Row, Table, Layout, Button, Dropdown, Menu } from 'antd'
import {
  DeleteOutlined,
  DownOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFlights } from '../../redux/slices'
import { flightDataSelector } from '../../redux/selectors'
import { isEmpty } from 'lodash/lang'

const { Content } = Layout

function AdminFlights() {
  //initiation
  const dispatch = useDispatch()
  const flightsData = useSelector(flightDataSelector)

  const [loading, setLoading] = useState(false)
  const [flights, setFlights] = useState([])
  const [selectedKeys, setSelectedKeys] = useState([])

  //Logical handling functions
  const handleSelectChange = (selectedRowKeys) => {
    setSelectedKeys(selectedRowKeys)
  }
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

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      dispatch(fetchFlights())
    }, 500)
  }, [dispatch])

  useEffect(() => {
    if (!isEmpty(flightsData)) {
      let flightsProcessed = flightsData.map((flightData) => ({
        ...flightData,
        key: flightData.id,
        airline: flightData.airline.name,
      }))
      setFlights(flightsProcessed)
      setLoading(false)
    }
  }, [flightsData])

  return (
    <Content className="admin-flights">
      <Row className="admin-flights-action">
        <Col span={12} className="admin-flights-action-left">
          <Dropdown disabled={isEmpty(selectedKeys)} overlay={menu}>
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
            dataSource={flights}
            loading={loading}
          />
        </Col>
      </Row>
    </Content>
  )
}

export default AdminFlights
