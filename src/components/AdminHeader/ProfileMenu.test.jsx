import renderer from 'react-test-renderer'
import React from 'react'
import ProfileMenu from './ProfileMenu'

describe('Test snapshot', () => {
  it('Should match snapshot', () => {
    const tree = renderer.create(<ProfileMenu />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
