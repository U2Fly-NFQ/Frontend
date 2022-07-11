import React from 'react'
import renderer from 'react-test-renderer'

import ButtonOfPage from './'

describe('Button of page', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ButtonOfPage />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
