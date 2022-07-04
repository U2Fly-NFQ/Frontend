export const updateLocalStorage = (key, value) => {
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
