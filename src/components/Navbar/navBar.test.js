import renderer from 'react-test-renderer'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './'

describe('Navigation bar test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <Router>
            <Home />
          </Router>
        </I18nextProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
