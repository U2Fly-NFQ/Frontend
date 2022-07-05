import { Collapse, Steps } from 'antd'
import React from 'react'
import { converrtDuritionToTIme } from '../../../../utils'
import './index.scss'
import vietnameairline from '../../../../assets/images/system/vip.png'
export default function FlightTrip() {
  const { Panel } = Collapse
  const { Step } = Steps

  const treeData = [
    {
      title: (
        <div className="detail-flights__container__trip">
          <div className="detail-flights__container__trip__from">
            <p>From</p>
            <h3>HCM</h3>
            <h6>Hồ Chí minh</h6>
            {/* <h3>{departure.city}</h3>
      <h6>{departure.name}</h6> */}
          </div>
          <div className="detail-flights__container__trip__icon">
            <i className="fa-solid fa-circle-arrow-right"></i>
            <h6>non stop</h6>
            {/* <p>{converrtDuritionToTIme(allDataFight.duration)}</p> */}
            <p>{converrtDuritionToTIme(1.5)}</p>
          </div>
          <div className="detail-flights__container__trip__to">
            <p>To</p>
            {/* <h3>{arrival.city}</h3>
      <p>{arrival.name} </p> */}
            <h3>HCN</h3>
            <h6>Hà Nội </h6>
          </div>
          <div className="detail-flights__container__trip__detail">
            <h5>
              <a>Detail</a>
            </h5>
          </div>
        </div>
      ),
      key: '0-0',
      children: [
        {
          title: 'leaf 0-0',
          key: '0-0-0',
          isLeaf: true,
        },
        {
          title: 'leaf 0-1',
          key: '0-0-1',
          isLeaf: true,
        },
      ],
    },
    {
      title: 'Flgiht 2',
      key: '0-1',
      children: [
        {
          title: 'leaf 1-0',
          key: '0-1-0',
          isLeaf: true,
        },
        {
          title: 'leaf 1-1',
          key: '0-1-1',
          isLeaf: true,
        },
      ],
    },
  ]
  return (
    <Collapse defaultActiveKey={['1']} ghost>
      <Panel
        showArrow={false}
        header={
          <div className="detail-flights__container__trip">
            <div className="detail-flights__container__trip__from">
              <p>From</p>
              <h3>HCM</h3>
              <h6>Hồ Chí minh</h6>
              {/* <h3>{departure.city}</h3>
      <h6>{departure.name}</h6> */}
            </div>
            <div className="detail-flights__container__trip__icon">
              <i className="fa-solid fa-circle-arrow-right"></i>
              <h6>non stop</h6>
              {/* <p>{converrtDuritionToTIme(allDataFight.duration)}</p> */}
              <p>{converrtDuritionToTIme(1.5)}</p>
            </div>
            <div className="detail-flights__container__trip__to">
              <p>To</p>
              {/* <h3>{arrival.city}</h3>
      <p>{arrival.name} </p> */}
              <h3>HCN</h3>
              <h6>Hà Nội </h6>
            </div>
            <div className="detail-flights__container__trip__detail">
              <h5>
                <a>Detail</a>
              </h5>
            </div>
          </div>
        }
        key="1"
      >
        <Steps progressDot direction="vertical" current={1}>
          <Step
            title={
              <div className="info-plane_trip">
                <div className="info-plane_trip-icon__rotate">
                  <i
                    class="fa-solid fa-plane-up"
                    style={{ transform: 'rotate(45deg);' }}
                  ></i>
                </div>

                <span>Ho Chi Minh City</span>
              </div>
            }
          />
          <Step
            description={
              <div className="info-plane_trip">
                <div className="info-plane_trip__info">
                  <div className="info-plane_trip__title">
                    <img src={vietnameairline} alt="" />
                    <h5>Vietnam Airlines</h5>
                  </div>
                  <div className="info-plane_trip__body">
                    <span>204 | Airbus A321</span>
                  </div>
                  <div className="info-plane_trip__footer">
                    <span>Economy class</span>
                  </div>
                </div>
              </div>
            }
          />
          <Step
            title={
              <div className="info-plane_trip">
                <div className="info-plane_trip-icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>

                <span>Ho Chi Minh City</span>
              </div>
            }
          />
        </Steps>
      </Panel>
      <Panel
        showArrow={false}
        header={
          <div className="detail-flights__container__trip">
            <div className="detail-flights__container__trip__from">
              <p>From</p>
              <h3>HCM</h3>
              <h6>Hồ Chí minh</h6>
              {/* <h3>{departure.city}</h3>
      <h6>{departure.name}</h6> */}
            </div>
            <div className="detail-flights__container__trip__icon">
              <i className="fa-solid fa-circle-arrow-right"></i>
              <h6>non stop</h6>
              {/* <p>{converrtDuritionToTIme(allDataFight.duration)}</p> */}
              <p>{converrtDuritionToTIme(1.5)}</p>
            </div>
            <div className="detail-flights__container__trip__to">
              <p>To</p>
              {/* <h3>{arrival.city}</h3>
      <p>{arrival.name} </p> */}
              <h3>HCN</h3>
              <h6>Hà Nội </h6>
            </div>
            <div className="detail-flights__container__trip__detail">
              <h5>
                <a>Detail</a>
              </h5>
            </div>
          </div>
        }
        key="2"
      >
        <Steps progressDot direction="vertical" current={1}>
          <Step
            title={
              <div className="info-plane_trip">
                <div className="info-plane_trip-icon__rotate">
                  <i
                    class="fa-solid fa-plane-up"
                    style={{ transform: 'rotate(45deg);' }}
                  ></i>
                </div>

                <span>Ho Chi Minh City</span>
              </div>
            }
          />
          <Step
            description={
              <div className="info-plane_trip">
                <div className="info-plane_trip__info">
                  <div className="info-plane_trip__title">
                    <img src={vietnameairline} alt="" />
                    <h5>Vietnam Airlines</h5>
                  </div>
                  <div className="info-plane_trip__body">
                    <span>204 | Airbus A321</span>
                  </div>
                  <div className="info-plane_trip__footer">
                    <span>Economy class</span>
                  </div>
                </div>
              </div>
            }
          />
          <Step
            title={
              <div className="info-plane_trip">
                <div className="info-plane_trip-icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>

                <span>Ho Chi Minh City</span>
              </div>
            }
          />
        </Steps>
      </Panel>
    </Collapse>
  )
}
