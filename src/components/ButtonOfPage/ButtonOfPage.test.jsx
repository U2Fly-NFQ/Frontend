import renderer from 'react-test-renderer'
import React from 'react'
import AddminDiscount from './'

describe('Test snapshot', () => {
  it('Should match snapshot', () => {
    const tree = renderer.create(<AddminDiscount />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
