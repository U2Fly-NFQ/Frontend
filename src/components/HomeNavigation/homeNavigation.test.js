import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'
import React, { Suspense } from 'react'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import HomeNavigation from './'
import { ConfigProvider } from 'antd'

import EnzymeToJson from 'enzyme-to-json'
import Enzyme, { mount } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new EnzymeAdapter() })

describe('Home navigation', () => {
  it('renders correctly', () => {
    const tree = mount(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ConfigProvider>
            <Router>
              <Suspense>
                <HomeNavigation />
              </Suspense>
            </Router>
          </ConfigProvider>
        </Provider>
      </I18nextProvider>
    )

    expect(EnzymeToJson(tree)).toMatchSnapshot()
  })
})
