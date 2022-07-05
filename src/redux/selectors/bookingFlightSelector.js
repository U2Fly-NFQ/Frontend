export const getInfoUserInBookingFight = (state) =>
  state.bookingFlight.userInformation

export const getInfoFlightInBookingFight = (state) =>
  state.bookingFlight.dataFlight

export const getInfoFlightInBookingArrival = (state) =>
  state.bookingFlight.dataFlight.arrival

export const getInfoFlightInBookingDeparture = (state) =>
  state.bookingFlight.dataFlight.departure

export const getInfoFlightInBookingAirplane = (state) =>
  state.bookingFlight.dataFlight.airplane

export const getInfoFlightInBookingAirline = (state) =>
  state.bookingFlight.dataFlight.airline

export const getInfoFlightInBookingSeat = (state) =>
  state.bookingFlight.dataFlight.seat

export const getInfoPriceAfterDiscount = (state) =>
  state.bookingFlight.priceAfterDiscount

export const getInfoStartTime = (state) =>
  state.bookingFlight.dataFlight.startTime

export const getDiscountForBookingAirline = (state) =>
  state.bookingFlight.discountInfo

export const getCurrentMethodInBookingFlight = (state) =>
  state.bookingFlight.currentMethods
///  get user information

export const getLoaddingMethodInBookingFlight = (state) =>
  state.bookingFlight.loadding

export const getUserInformation = (state) => state.bookingFlight.userInformation
