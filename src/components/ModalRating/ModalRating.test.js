import React, { Suspense } from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import ModalRating from './'

describe('Modal rating', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Suspense>
            <ModalRating visible={true} />
          </Suspense>
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should onClick icon correctly', async () => {
    render(<ModalRating visible={true} />)
    const loveIcon = screen.getByAltText('love')
  })
})
