import React, { useEffect, useState } from 'react'
import useLists from '../hooks/useLists'

type ContextProps = {
  filters: any
  updateState: any
  data: any
}

export const FilterContext = React.createContext<Partial<ContextProps>>({})

type LayoutProps = {
  children: React.ReactChild
}

const FilterProvider = ({ children }: LayoutProps) => {
  const [filters, setFilters] = useState({
    locales: [],
    online: false,
    reviewSort: 'asc',
    rate: 0,
    page: 1,
  })

  const updateState = (data: any) => {
    const newFilter = { ...filters, ...data }
    setFilters(newFilter)
  }

  const [query, setQuery] = useState('?')
  const { data } = useLists(query)

  useEffect(() => {
    let q = '?'
    if (filters.locales && filters.locales.length > 0) {
      filters.locales.forEach((l) => {
        q += `locales=${l}&`
      })
    }
    if (filters.online) {
      q += 'status=online&'
    }
    if (filters.reviewSort === 'desc') {
      q += `locales=${filters.reviewSort}&`
    }
    if (filters.rate > 0) {
      q += `rate=${filters.rate}&`
    }
    if (filters.page > 0) {
      q += `page=${filters.page}&`
    }
    q = q.replace(/&+$/, '')
    setQuery(q)
  }, [filters, query])

  return (
    <FilterContext.Provider
      value={{
        filters,
        data,
        updateState,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider
