import React, { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { store } from '../../../redux/store'
import i18n from '../../../translations'
import BookingCoupon from './'
describe('Sub nav bar test', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <Router>
              <Suspense>
                <BookingCoupon />
              </Suspense>
            </Router>
          </I18nextProvider>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  // test('it should finish', () => {
  //   render(
  //     <Router>
  //       <Provider store={store}>
  //         <BookingCoupon />
  //       </Provider>
  //     </Router>
  //   )
  //   const form = screen.queryByTestId('bookingCoupon')
  //   const input = screen.queryByTestId('inputDiscount')

  //   fireEvent.change(input, { target: { value: 2 } })
  //   fireEvent.submit(form)
  //   expect(input.value).toBe('2')
  //   expect(window.scrollY).toBe(0)
  // })
})
