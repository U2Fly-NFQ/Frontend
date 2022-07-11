import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import UserTicket from './'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'

const mockStore = configureStore([])

describe('My Connected React-Redux Component', () => {
  let store
  let component

  component = renderer.create(
    <I18nextProvider i18n={i18n}>
      <UserTicket
        visible={true}
        setViewTicket={() => {}}
        ticketData={{
          passenger: { name: 'John' },
          flights: { airline: { image: '' } },
        }}
      />
    </I18nextProvider>
  )

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
