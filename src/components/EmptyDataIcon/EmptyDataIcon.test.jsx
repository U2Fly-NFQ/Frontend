import renderer from 'react-test-renderer'
import AddminDiscount from './'

describe('Test snapshot', () => {
  it('Should match snapshot', () => {
    const tree = renderer.create(<AddminDiscount />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
