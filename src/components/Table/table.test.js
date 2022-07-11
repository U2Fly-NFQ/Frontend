import React from 'react'

import Table from './'
import renderer from 'react-test-renderer'

describe('Table page', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Table />)

    expect(tree).toMatchSnapshot()
  })
})
