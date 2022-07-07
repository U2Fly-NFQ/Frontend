import renderer from 'react-test-renderer'
import LoginBanner from '.'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'

describe('LoginBanner test', () => {
  it('LoginBanner component renders correctly', () => {
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <LoginBanner />
        </I18nextProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
