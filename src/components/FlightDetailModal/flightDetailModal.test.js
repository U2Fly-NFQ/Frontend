import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'
import React, { Suspense } from 'react'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import FlightDetailModal from './'
import { ConfigProvider } from 'antd'

describe('Flight detail modal', () => {
  const flight = {
    id: 1,
    code: 'VN156',
    arrival: {
      id: 2,
      iata: 'HAN',
      name: 'Noi Bai International Airport',
      city: 'Ha Noi',
      image: 'https://wallpapercave.com/wp/wp2691201.jpg',
    },
    departure: {
      id: 3,
      iata: 'VCA',
      name: 'Can Tho International Airport',
      city: 'Can Tho',
      image:
        'https://tourcantho.vn/wp-content/uploads/tour-cho-noi-cai-rang-miet-vuon.jpg',
    },
    startTime: '07:00:00',
    startDate: '2022-07-09',
    duration: 1.5,
    airplane: {
      id: 1,
      name: 'Boeing 787',
    },
    airline: {
      id: 1,
      name: 'Vietnam Airlines',
      icao: 'HVN',
      rating: 4,
      image:
        'https://www.vietnamairlines.com/~/media/Images/VNANew/Home/Logo%20Header/logo_vna-mobile.png',
    },
    seat: {
      id: 1,
      name: 'Economy',
      price: 59,
      seatAvailable: 47,
      discount: 0.1,
    },
  }
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <ConfigProvider>
              <Router>
                <Suspense>
                  <FlightDetailModal
                    data={flight}
                    visible={false}
                    setIsModalVisible={() => true}
                  />
                </Suspense>
              </Router>
            </ConfigProvider>
          </Provider>
        </I18nextProvider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
