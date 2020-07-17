import { useState, useEffect } from 'react'
import { getList } from '../services/listAPI'

export default function useLists() {
  const [list, setList] = useState({
    totalItems: 168,
    currentPage: 1,
    locales: ['de', 'en', 'fr', 'it'],
    list: [],
  })

  useEffect(() => {
    getList('').then((res) => {
      setList(res)
    })
  }, [])

  return { list }
}
