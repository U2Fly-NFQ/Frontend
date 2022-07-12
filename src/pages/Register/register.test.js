import { I18nextProvider } from 'react-i18next'
import i18n from '../../translations'
import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, fireEvent, screen } from '@testing-library/react'

import Register from './'
import renderer from 'react-test-renderer'

describe('Register page', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <I18nextProvider i18n={i18n}>
          <Router>
            <Suspense>
              <Register />
            </Suspense>
          </Router>
        </I18nextProvider>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('form validate correctly', async () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Router>
          <Suspense>
            <Register />
          </Suspense>
        </Router>
      </I18nextProvider>
    )

    const testData = {
      idNum: '123123123',
      name: 'Johnny Depp',
      genderRadio: 'male',
      birthDay: '2022-09-17',
      address: 'Can Tho',
      email: 'nfq@asisa',
      password: '123456',
      confirmPassword: '123456',
    }

    const idNum = await screen.findByPlaceholderText('ID number')
    const name = await screen.findByPlaceholderText('Display name')
    const genderRadio = await screen.findByLabelText('Male')
    const birthDay = await screen.findByTestId('birthday-picker')
    const address = await screen.findByPlaceholderText('Address')
    const email = await screen.findByPlaceholderText('Email')
    const password = await screen.findByPlaceholderText('Password')
    const confirmPassword = await screen.findByPlaceholderText(
      'Confirm password'
    )

    fireEvent.change(idNum, {
      target: {
        value: testData.idNum,
      },
    })
    expect(idNum.value).toBe(testData.idNum)

    fireEvent.change(name, {
      target: {
        value: testData.name,
      },
    })
    expect(name.value).toBe(testData.name)

    fireEvent.change(genderRadio, {
      target: {
        value: testData.genderRadio,
      },
    })
    expect(genderRadio.value).toBe(testData.genderRadio)

    fireEvent.change(password, {
      target: {
        value: testData.password,
      },
    })
    expect(password.value).toBe(testData.password)

    fireEvent.change(confirmPassword, {
      target: {
        value: testData.confirmPassword,
      },
    })
    expect(confirmPassword.value).toBe(testData.confirmPassword)
  })
})
