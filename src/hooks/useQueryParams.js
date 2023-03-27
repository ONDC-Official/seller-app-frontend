import { useLocation } from 'react-router-dom'

const useQueryParams = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search || location.hash)
  const obj = {}
  /* eslint-disable no-restricted-syntax */
  for (const [key, value] of searchParams.entries()) {
    try {
      obj[key] = JSON.parse(value)
    } catch (err) {
      obj[key] = value
    }
  }
  return obj
}

export default useQueryParams