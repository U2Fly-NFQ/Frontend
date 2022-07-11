import { isEmpty } from 'lodash/lang'
import { bookingStatus } from '../Constants'
import { convertNumberToUSD } from './numberFormater'
import { flightDataProcessed } from './flightDataProcessing'

export const logicForUserPage = (compareData, status, action) => {
  if (compareData) {
    if (compareData === status) {
      action(true)
    } else {
      action(false)
    }
  }
}

export const processingTicketData = (ticketData, action) => {
  if (!isEmpty(ticketData)) {
    let ticketProcessedData = ticketData.map((ticket) => {
      return {
        ...ticket,
        status: bookingStatus[ticket.status],
        totalPrice: convertNumberToUSD(ticket.totalPrice),
        flights: flightDataProcessed(ticket),
      }
    })
    action(ticketProcessedData)
  }
}
