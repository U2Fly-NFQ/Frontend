import renderer from 'react-test-renderer'
import FooterInformation from '../FooterInformation'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../translations'

describe('FooterInformation test', () => {
  it('FooterInformation component renders correctly', () => {
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <FooterInformation />
        </I18nextProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
