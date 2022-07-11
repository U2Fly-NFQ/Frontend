import discountSlice, {
  initialState,
  fetchDiscounts,
  deleteDiscount,
  createDiscount,
} from '../discountSlice/index'
import axiosInstance from '../../../api'
import { store } from '../../store'
import MockAdapter from 'axios-mock-adapter'

const mockNetWorkResponse = () => {
  const mock = new MockAdapter(axiosInstance)

  mock.onGet(`/discounts/1`).reply(200, {
    status: '',
    data: [],
  })

  mock.onGet(`/discounts`).reply(200, {
    status: '',
    data: [],
  })

  mock.onPost(`/discounts`).reply(200, {
    status: '',
    data: [],
  })

  mock.onDelete(`/discounts/1`).reply(200, {
    status: '',
    data: [],
  })
}

describe('DiscountSlice', () => {
  beforeAll(() => {
    mockNetWorkResponse()
  })

  test('Should return initial state', () => {
    expect(
      discountSlice.reducer(undefined, {
        type: undefined,
      })
    ).toEqual(initialState)
  })

  it('Should be able fetch all discounts', async () => {
    const result = await store.dispatch(fetchDiscounts())

    expect(result.type).toBe('discounts/fetchDiscounts/fulfilled')
  })

  it('Should be able delete discount by id', async () => {
    const result = await store.dispatch(deleteDiscount(1))

    expect(result.type).toBe('discounts/deleteDiscount/fulfilled')
  })

  it('Should be able creaet discount', async () => {
    const result = await store.dispatch(createDiscount({}))

    expect(result.type).toBe('discounts/createDiscount/fulfilled')
  })
})
