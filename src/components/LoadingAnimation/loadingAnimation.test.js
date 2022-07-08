import renderer from 'react-test-renderer'
import LoadingAnimation from './'

it('renders correctly', () => {
  const tree = renderer.create(<LoadingAnimation />).toJSON()
  expect(tree).toMatchSnapshot()
})
