import renderer from 'react-test-renderer'
import FooterEmail from '../FooterEmail'

describe('FooterEmail test', () => {
  it('FooterEmail component renders correctly', () => {
    const tree = renderer.create(<FooterEmail />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
