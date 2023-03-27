export function evalQueryString(currentQueryString, params) {
    const currentParams = new URLSearchParams(currentQueryString)
    Object.keys(params).forEach((key) => {
      if (params[key] !== undefined) {
        if (Array.isArray(params[key]) || typeof params[key] === 'object') {
          currentParams.set(key, JSON.stringify(params[key]))
        } else {
          currentParams.set(key, params[key])
        }
      } else if (currentParams.has(key)) {
        currentParams.delete(key)
      }
    })

    const queryItems = new Array()
    /* eslint-disable no-restricted-syntax */
    for (const [key, value] of currentParams.entries()) {
      if (value) {
        queryItems.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      }
    }
    return queryItems.join('&')
}