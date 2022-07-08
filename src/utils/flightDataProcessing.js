import { getBoardingDateTime, getEndDateTime } from './flight'
import moment from 'moment'

export const flightDataProcessed = (ticket) => {
  return ticket.flights.map((flight) => {
    let ETD = `${flight.startTime} ${flight.startDate}`
    let endDate = getEndDateTime(flight.duration, ETD)
    let boardingTime = getBoardingDateTime(flight.duration, ETD)
    return {
      ...flight,
      departure: `${flight.departure.city} (${flight.departure.iata})`,
      arrival: `${flight.arrival.city} (${flight.arrival.iata})`,
      ETD: moment(ETD).format('DD/M/YYYY hh:mm A'),
      ETA: moment(endDate).format('DD/M/YYYY hh:mm A'),
      boardingTime: moment(boardingTime).format('DD/M/YYYY hh:mm A'),
      isRating: ticket.status === 1 || flight.ticketFlight.isRating,
    }
  })
}
