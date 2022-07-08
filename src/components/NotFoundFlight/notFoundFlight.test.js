import renderer from 'react-test-renderer'
import React from 'react'
import NotFoundFlight from './'

describe('Not found page test', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NotFoundFlight />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
