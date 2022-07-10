import renderer from 'react-test-renderer'
import React from 'react'
import i18n from '../../translations'
import { I18nextProvider } from 'react-i18next'
import NotFoundFlight from './'

describe('Not found page test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <NotFoundFlight />
        </I18nextProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
