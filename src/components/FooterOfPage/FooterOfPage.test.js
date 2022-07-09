import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'
import renderer from 'react-test-renderer'
import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import FooterOfPage from './'

describe('Booking Passenger bar test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <Router>
            <Suspense>
              <FooterOfPage />
            </Suspense>
          </Router>
        </I18nextProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
