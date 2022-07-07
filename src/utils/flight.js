import moment from 'moment'

export const getDurationFormat = (duration) => {
  let time = 60 * duration
  if (time < 60) return `${time % 60}m`
  return `${Math.floor(time / 60)}h ${time % 60}m`
}

export const addHourToTime = (time, hours) => {
  return moment(time, 'HH:mm:ss')
    .add(hours * 60, 'minutes')
    .format('HH:mm')
}

export const getPriceWithDiscount = (price, discount) => {
  return (price * (1 - discount)).toFixed(2)
}
