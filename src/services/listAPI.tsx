const API = 'http://localhost:8000/'

export const getList = async (queries: string) => {
  return fetch(API + queries)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error))
}

export default { getList }
