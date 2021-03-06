import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'
import renderer from 'react-test-renderer'
import FlightListBanner from './'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <I18nextProvider i18n={i18n}>
        <FlightListBanner />
      </I18nextProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
