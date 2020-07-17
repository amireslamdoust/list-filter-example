import React, { useEffect, useState } from 'react'
import useLists from '../hooks/useLists'

type ContextProps = {
  filters: any
  setFilters: any
  data: any
}

export const FilterContext = React.createContext<Partial<ContextProps>>({})

type LayoutProps = {
  children: React.ReactChild
}

const FilterProvider = ({ children }: LayoutProps) => {
  const [filters, setFilters] = useState({
    locales: [],
  })

  const [query, setQuery] = useState('?')
  const { data } = useLists(query)

  useEffect(() => {
    let q = '?'
    if (filters.locales.length > 0) {
      filters.locales.forEach((l) => {
        q += `locales=${l}&`
      })
    }
    q = q.replace(/\&+$/, '')
    setQuery(q)
  }, [filters, query])

  return (
    <FilterContext.Provider
      value={{
        filters,
        data,
        setFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider
