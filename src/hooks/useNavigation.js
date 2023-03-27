import { useNavigate } from 'react-router'

const useNavigation = () => {
  const navigate = useNavigate()

  return {
    toHome: () => navigate(`/home`),
    goBack: () => navigate(-1),
    toPath: (path) => navigate(path),
    toPathWithQuery: (path, query) => {
      navigate({ pathname: path, search: query })
    },
  }
}

export default useNavigation