import React from 'react'

const FilterContext = React.createContext('?')

type FilterProviderType = {
  children: React.ReactChild
}

const FilterProvider = ({ children }: FilterProviderType) => {
  return <FilterContext.Provider value={'?'}>{children}</FilterContext.Provider>
}

export default FilterProvider
