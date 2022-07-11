import { fireEvent, render, screen } from '@testing-library/react'
import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
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

  it('close when cancel', async () => {
    render(
      <Router>
        <Suspense>
          <ModalRating visible={true} setIsModalVisible={() => {}} rating={5} />
        </Suspense>
      </Router>
    )

    const ratingModal = await screen.findByTestId('rating-modal')
    const commentBox = await screen.findByTestId('comment-box')

    fireEvent.change(commentBox, {
      target: {
        value: 'comment',
      },
    })
    expect(commentBox.value).toBe('comment')

    fireEvent.click(screen.queryByText('Cancel'))
    expect(ratingModal).toBeInTheDocument()
  })
})
