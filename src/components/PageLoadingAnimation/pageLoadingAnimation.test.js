import renderer from 'react-test-renderer'
import React from 'react'
import PageLoadingAnimation from './'

describe('Page loading animation test', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<PageLoadingAnimation />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
