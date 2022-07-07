import renderer from 'react-test-renderer'
import InputOfPage from '../InputOfPage'

describe('InputOfPage search test', () => {
  it('InputOfPage search component renders correctly', () => {
    const tree = renderer.create(<InputOfPage />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
