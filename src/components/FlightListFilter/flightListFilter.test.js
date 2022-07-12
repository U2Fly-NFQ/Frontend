import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'
import React, { Suspense } from 'react'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import FLightListFilter from './'
import { ConfigProvider } from 'antd'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'

/**
 * @jest-environment jsdom
 */

describe('Flight list filter', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <Provider store={store}>
            <ConfigProvider>
              <Router>
                <Suspense>
                  <FLightListFilter />
                </Suspense>
              </Router>
            </ConfigProvider>
          </Provider>
        </I18nextProvider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('price change correctly', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ConfigProvider>
            <Router>
              <Suspense>
                <FLightListFilter />
              </Suspense>
            </Router>
          </ConfigProvider>
        </Provider>
      </I18nextProvider>
    )

    const maxPriceInput = await screen.findByTestId('maxPriceInput')
    const minPriceInput = await screen.findByTestId('minPriceInput')

    fireEvent.change(maxPriceInput, {
      target: {
        value: 100,
      },
    })

    fireEvent.change(minPriceInput, {
      target: {
        value: 10,
      },
    })

    expect(maxPriceInput.value).toEqual('100')
    expect(minPriceInput.value).toEqual('10')
    return
  })

  it('time radio change correctly', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ConfigProvider>
            <Router>
              <Suspense>
                <FLightListFilter />
              </Suspense>
            </Router>
          </ConfigProvider>
        </Provider>
      </I18nextProvider>
    )

    const timeRadioMorning = await screen.findByTestId('morning-time')

    fireEvent.change(timeRadioMorning, {
      target: {
        value: 'afternoon',
      },
    })
    expect(timeRadioMorning.value).toEqual('afternoon')
  })

  it('checkbox have initial correctly', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ConfigProvider>
            <Router>
              <Suspense>
                <FLightListFilter />
              </Suspense>
            </Router>
          </ConfigProvider>
        </Provider>
      </I18nextProvider>
    )

    const airlineCheckbox = await screen.findByTestId('airline-checkbox')

    expect(airlineCheckbox.checked).toEqual(undefined)
  })
})
