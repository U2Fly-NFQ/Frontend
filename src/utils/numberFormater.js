export const convertNumberToUSD = (number) =>
  number.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
