import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'
import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Register from './'
import renderer from 'react-test-renderer'

describe('Register page', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <Router>
            <Suspense>
              <Register />
            </Suspense>
          </Router>
        </I18nextProvider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
