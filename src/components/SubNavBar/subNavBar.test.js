import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'
import renderer from 'react-test-renderer'
import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import SubNavBar from './'

describe('Sub nav bar test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <Router>
            <Suspense>
              <SubNavBar />
            </Suspense>
          </Router>
        </I18nextProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
