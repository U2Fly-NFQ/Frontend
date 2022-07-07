import renderer from 'react-test-renderer'
import HomeBanner from '../HomeBanner'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'

describe('HomeBanner search test', () => {
  it('HomeBanner search component renders correctly', () => {
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <HomeBanner />
        </I18nextProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
