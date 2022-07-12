import React, { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import renderer from 'react-test-renderer'
import i18n from '../../translations'
import configureStore from 'redux-mock-store'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './'
const mockStore = configureStore([])

describe('Home page test', () => {
  let store
  let component
  beforeEach(() => {
    store = mockStore({
      airports: {
        data: [
          {
            id: 2,
            iata: 'HAN',
            name: 'Noi Bai International Airport',
            city: 'Ha Noi',
            image: 'https://wallpapercave.com/wp/wp2691201.jpg',
          },
        ],
      },
    })
  })
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <ConfigProvider>
              <Router>
                <Suspense>
                  <Home />
                </Suspense>
              </Router>
            </ConfigProvider>
          </Provider>
        </I18nextProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should onClick correctly', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ConfigProvider>
            <Router>
              <Suspense>
                <Home />
              </Suspense>
            </Router>
          </ConfigProvider>
        </Provider>
      </I18nextProvider>
    )
    const imageHome = await screen.findByTestId('imageHome')
    fireEvent.click(imageHome)
  })
})
