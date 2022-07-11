import renderer from 'react-test-renderer'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavLinkDropDown from './'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'
describe('Navigation bar test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <Router>
            <NavLinkDropDown Title={{ title: 'home', path: '/hello' }} />
          </Router>
        </I18nextProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
