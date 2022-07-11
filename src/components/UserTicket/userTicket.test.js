import React from 'react'

import FLightListFilter from './'

import EnzymeToJson from 'enzyme-to-json'
import { mount } from 'enzyme'

// Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('Admin Layout', () => {
  it('renders correctly', () => {
    const tree = mount(<FLightListFilter />)

    expect(EnzymeToJson(tree)).toMatchSnapshot()
  })
})
