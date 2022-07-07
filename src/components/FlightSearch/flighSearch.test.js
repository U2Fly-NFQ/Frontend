import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'
import renderer from 'react-test-renderer'
import React, { Suspense } from 'react'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { screen } from '@testing-library/react'
import FlightSearch from './'
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

    expect(screen.getByRole('heading')).toHaveTextContent(/Doggy Directory/)
    expect(screen.getByRole('combobox')).toHaveDisplayValue('Select a breed')
    expect(screen.getByRole('button', { name: 'Search' })).toBeDisabled()
    expect(screen.getByRole('img')).toBeInTheDocument()

    expect(tree).toMatchSnapshot()
  })
})
