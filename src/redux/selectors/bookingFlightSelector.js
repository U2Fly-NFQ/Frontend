export const getInfoUserInBookingFight = (state) =>
  state.bookingFlight.userInformation

export const getInfoFlightInBookingFight = (state) =>
  state.bookingFlight.dataFlight
// code: '',
// departure: {},
// arrival: {},
// flightRules: [],
// duration: 1.5,
// airline: {},
// seat: {},
// price: 30.5,
// airplane: {},

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

/// discount information

export const getDiscountForBookingAirline = (state) =>
  state.bookingFlight.discountInfo

///  get user information

export const getUserInformation = (state) => state.bookingFlight.userInformation
