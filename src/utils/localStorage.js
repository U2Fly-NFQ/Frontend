export const updateLs = (key, value) => {
  const item = localStorage.getItem(key)
  if (typeof value === 'string') localStorage.setItem(key, value)
  if (typeof value === 'object') {
    let existingJSON = JSON.parse(item)
    localStorage.setItem(
      key,
      JSON.stringify({
        ...existingJSON,
        ...value,
      })
    )
  }
}

export const getLsObj = (key) => {
  return JSON.parse(localStorage.getItem(key) || '[]')
}

export const setLs = (key, value) => {
  if (typeof value === 'string') localStorage.setItem(key, value)
  if (typeof value === 'object') {
    localStorage.setItem(key, JSON.stringify(value))
  }
}
