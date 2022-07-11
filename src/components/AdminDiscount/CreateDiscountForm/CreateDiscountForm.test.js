import React, { Suspense } from 'react'

import CreateDiscountForm from './CreateDiscountForm'

import renderer from 'react-test-renderer'

describe('Admin discount Layout', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Suspense>
        <CreateDiscountForm />
      </Suspense>
    )

    expect(tree).toMatchSnapshot()
  })
})
