import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'
import React, { Suspense } from 'react'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import AdminHeader from './'
import { ConfigProvider } from 'antd'
import renderer from 'react-test-renderer'

describe('Admin header Layout', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ConfigProvider>
            <Router>
              <Suspense>
                <AdminHeader />
              </Suspense>
            </Router>
          </ConfigProvider>
        </Provider>
      </I18nextProvider>
    )

    expect(tree).toMatchSnapshot()
  })
})
