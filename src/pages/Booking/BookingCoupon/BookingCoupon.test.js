import { I18nextProvider } from 'react-i18next'
import i18n from '../../../translations'
import renderer from 'react-test-renderer'
import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import BookingCoupon from './'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'

describe('Sub nav bar test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <Router>
              <Suspense>
                <BookingCoupon />
              </Suspense>
            </Router>
          </I18nextProvider>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
