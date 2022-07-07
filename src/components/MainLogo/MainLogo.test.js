import renderer from 'react-test-renderer'
import MainLogo from '.'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'
import { BrowserRouter as Router } from 'react-router-dom'

describe('MainLogo test', () => {
  it('MainLogo component renders correctly', () => {
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <Router>
            <MainLogo />
          </Router>
        </I18nextProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
