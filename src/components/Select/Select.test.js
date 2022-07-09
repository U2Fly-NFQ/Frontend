import renderer from 'react-test-renderer'
import React from 'react'
import Select from './'

describe('Navigation bar test', () => {
  let option = [{ key: 1, value: 'hello' }]
  it('renders correctly', () => {
    const tree = renderer.create(<Select options={option} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
