import renderer from 'react-test-renderer'
import React from 'react'
import AddminHeader from './'

describe('Test snapshot', () => {
  it('Should match snapshot', () => {
    const tree = renderer.create(<AddminHeader />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
