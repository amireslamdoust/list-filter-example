import React, { useEffect, useState } from 'react'
import useLists from '../hooks/useLists'

type ContextProps = {
  filters: any
  updateFilters: any
  data: any
}

export const FilterContext = React.createContext<Partial<ContextProps>>({})

type LayoutProps = {
  children: React.ReactChild
}

const FilterProvider = ({ children }: LayoutProps) => {
  const [query, setQuery] = useState('?')
  const { data } = useLists(query)
  const [filters, setFilters] = useState({
    locales: [],
    online: false,
    reviewSort: 'asc',
    rate: 0,
    page: data.currentPage,
  })
  const updateFilters = (data: any) => {
    const newFilter = { ...filters, ...data }
    setFilters(newFilter)
  }

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
        updateFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider
