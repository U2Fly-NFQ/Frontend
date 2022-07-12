import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import NoMatch from './'
import { fireEvent, render, screen } from '@testing-library/react'
describe('No match image test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <NoMatch />
        </Router>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should onClick Correctly', async () => {
    render(
      <Router>
        <NoMatch />
      </Router>
    )
    const backToHome = screen.getByText('Back Home')
    fireEvent.click(backToHome)
  })
})
