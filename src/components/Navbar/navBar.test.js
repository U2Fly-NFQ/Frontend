import renderer from 'react-test-renderer'
import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'
import { render, screen, fireEvent } from '@testing-library/react'
describe('Navigation bar test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <Router>
            <Navbar />
          </Router>
        </I18nextProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should navigate click', () => {
    render(
      <Router>
        <Suspense>
          <Navbar />
        </Suspense>
      </Router>
    )
    fireEvent.click(screen.getByTestId('u2flyIcon'))
  })
})
