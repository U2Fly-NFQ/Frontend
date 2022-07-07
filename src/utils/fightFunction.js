export const converrtDuritionToTIme = (duration) => {
  let time = 60 * duration
  return ` ${Math.floor(time / 60)} hours ${time % 60} minutes`
}

export const getEndDateTime = (duration, ETD) => {
  let currentDateTime = new Date(ETD)
  currentDateTime.setMinutes(currentDateTime.getMinutes() + duration * 60)
  return currentDateTime
}
export const getBoardingDateTime = (duration, ETD) => {
  let currentDateTime = new Date(ETD)
  currentDateTime.setMinutes(currentDateTime.getMinutes() - duration * 60)
  return currentDateTime
}
