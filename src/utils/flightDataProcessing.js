import { getBoardingDateTime, getEndDateTime } from './fightFunction'
import moment from 'moment'

export const flightDataProcessed = (flightsData) => {
  return flightsData.map((flight) => {
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
    }
  })
}
