export const addDays = (date, days) => {
  let result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export const capitalize = (word) =>
  word[0].toUpperCase() + word.slice(1).toLowerCase()

export const formatPrice = (price) =>
  new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'MXN',
    currencyDisplay: 'narrowSymbol',
  }).format(price)

export const formatDate = (date) =>
  new Intl.DateTimeFormat('es-MX').format(date)

export const isEmpty = (obj) => Object.keys(obj).length === 0

export const toPercentage = (amount) => 1 - amount / 100
