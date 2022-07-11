import { getBoardingDateTime, getEndDateTime } from './flight'
import moment from 'moment'

export const flightDataProcessed = (ticket) => {
  return ticket.flights.map((flight) => {
    let ETD = `${flight.startTime} ${flight.startDate}`
    let endDate = getEndDateTime(flight.duration, ETD)
    let boardingTime = getBoardingDateTime(ETD)
    return {
      ...flight,
      departure: `${flight.departure.city} (${flight.departure.iata})`,
      arrival: `${flight.arrival.city} (${flight.arrival.iata})`,
      ETD: moment(ETD).format('MM-DD-YYYY hh:mm A'),
      ETA: moment(endDate).format('MM-DD-YYYY hh:mm A'),
      boardingTime: moment(boardingTime).format('MM-DD-YYYY hh:mm A'),
      isRating: ticket.status !== 3 || flight.ticketFlight.isRating,
    }
  })
}

export const checkTimeForCancelBooking = (startDate, startTime) => {
  return (
    (new Date(`${startDate} ${startTime}`) - new Date()) / 1000 / 60 / 60 < 2
  )
}

export const getURLForBookingAgain = (ticket) => {
  let departure = ticket.flights[0].departure.substring(
    ticket.flights[0].departure.length - 4,
    ticket.flights[0].departure.length - 1
  )
  let arrival = ticket.flights[0].arrival.substring(
    ticket.flights[0].arrival.length - 4,
    ticket.flights[0].arrival.length - 1
  )
  let seatType = ticket.seatType.toLowerCase()
  let startDate = moment().format('YYYY-MM-DD')
  let ticketType = 'oneWay'
}
