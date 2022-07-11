import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'
import React, { Suspense } from 'react'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { render, screen, fireEvent } from '@testing-library/react'

import FlightSearch from '.'
import { ConfigProvider } from 'antd'

describe('Flight search', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <ConfigProvider>
              <Router>
                <Suspense>
                  <FlightSearch />
                </Suspense>
              </Router>
            </ConfigProvider>
          </Provider>
        </I18nextProvider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('change search state correct', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ConfigProvider>
            <Router>
              <Suspense>
                <FlightSearch />
              </Suspense>
            </Router>
          </ConfigProvider>
        </Provider>
      </I18nextProvider>
    )

    const radioTicketType = await screen.findByTestId('ticket-type-oneway')
    fireEvent.change(radioTicketType, {
      target: {
        value: 'roundTrip',
      },
    })
    expect(radioTicketType.value).toBe('roundTrip')

    // date picker departure
    const datePicker = await screen.findByTestId('date-picker-start')
    fireEvent.change(datePicker, {
      target: {
        value: '2022-09-17',
      },
    })
    expect(datePicker.value).toBe('2022-09-17')

    // date picker arrival
    const textDate = await screen.findByTestId('text-date')
    fireEvent.click(textDate)
    const datePickerArrival = await screen.findByTestId('date-picker-end')
    fireEvent.change(datePickerArrival, {
      target: {
        value: '2022-07-14',
      },
    })
    expect(datePickerArrival.value).toBe('2022-07-14')

    // when click search
    const searchSubmit = await screen.findByTestId('search-submit')
    fireEvent.click(searchSubmit)
  })
})
