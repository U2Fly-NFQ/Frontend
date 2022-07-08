import renderer from 'react-test-renderer'
import React from 'react'
import SmokeAnimation from './'

describe('Smoke animation test', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SmokeAnimation />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
