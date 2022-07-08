import filterSlice, { initialState, fetchAllFilter } from '../filterSlice'
import { store } from '../../store'
import axiosInstance from '../../../api'
import MockAdapter from 'axios-mock-adapter'

const mockNetWorkResponse = () => {
  const mock = new MockAdapter(axiosInstance)

  mock.onGet(`/airlines`).reply(200, {
    status: 'success',
    data: [],
  })
}

test('Should return initial state', () => {
  expect(
    filterSlice.reducer(undefined, {
      type: undefined,
    })
  ).toEqual(initialState)
})

describe('FilterSlice', () => {
  beforeAll(() => {
    mockNetWorkResponse()
  })

  it('Should be able to get all filter', async () => {
    const result = await store.dispatch(fetchAllFilter())

    expect(result.type).toBe('filter/fetchAllFilter/fulfilled')

    const state = store.getState().filter

    expect(state.airlines).toEqual([])
  })
})
