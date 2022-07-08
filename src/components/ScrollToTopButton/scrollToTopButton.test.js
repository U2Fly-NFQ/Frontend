import renderer from 'react-test-renderer'
import React from 'react'
import ScrollToTopButton from './'

describe('Scroll to to top button test', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ScrollToTopButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
