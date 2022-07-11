import renderer from 'react-test-renderer'
import LangSelect from './'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'
import { render, fireEvent, screen } from '@testing-library/react'

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

  it('change lang correctly', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <LangSelect />
      </I18nextProvider>
    )

    const langSelect = await screen.findByTestId('lang-select')

    fireEvent.select(langSelect, ['vi'])

    expect(LangSelect.value).toBe(undefined)
  })
})
