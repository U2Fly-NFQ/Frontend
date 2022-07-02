export const converrtDuritionToTIme = (duration) => {
  let time = 60 * duration
  return ` ${Math.floor(time / 60)} hours ${time % 60} minutes`
}
