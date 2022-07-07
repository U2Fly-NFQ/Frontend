import renderer from 'react-test-renderer'
import React from 'react'
import CreateDiscountForm from './CreateDiscountForm'

describe('Test snapshot', () => {
  it('Should match snapshot', () => {
    const tree = renderer.create(<CreateDiscountForm />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
