import renderer from 'react-test-renderer'
import FooterCopyRight from '../FooterCopyRight'

describe('FooterCopyRight test', () => {
  it('FooterCopyRight component renders correctly', () => {
    const tree = renderer.create(<FooterCopyRight />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
