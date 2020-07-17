import React, { useState } from 'react'

type ContextProps = {
  filters: any
  setFilters: any
}

export const FilterContext = React.createContext<Partial<ContextProps>>({})

type LayoutProps = {
  children: React.ReactChild
}

const FilterProvider = ({ children }: LayoutProps) => {
  const [filters, setFilters] = useState({})

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider
