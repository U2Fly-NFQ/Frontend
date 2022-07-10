import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import NoMatch from './'

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
})
