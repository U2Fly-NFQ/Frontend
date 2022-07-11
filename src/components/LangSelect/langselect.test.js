import renderer from 'react-test-renderer'
import LangSelect from './'

describe('Flight page search test', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LangSelect />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
