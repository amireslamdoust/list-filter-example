import { useState, useEffect } from 'react'
import { getList } from '../services/listAPI'

export default function useLists(q: string = '') {
  const [data, setData] = useState({
    totalItems: 168,
    currentPage: 1,
    locales: ['de', 'en', 'fr', 'it'],
    list: [],
  })

  useEffect(() => {
    getList(q).then((res) => {
      setData(res)
    })
    console.log('fetch')
  }, [q])

  return { data, setData }
}
