import renderer from 'react-test-renderer'
import React from 'react'
import MessageDialog from './'

describe('Message dialog page test', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MessageDialog msg={'Hello'} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
