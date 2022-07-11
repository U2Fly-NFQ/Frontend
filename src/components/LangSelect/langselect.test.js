import renderer from 'react-test-renderer'
import LangSelect from './'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'

describe('Flight page search test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <LangSelect />
        </I18nextProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
