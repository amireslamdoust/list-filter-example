import React, { useContext } from 'react'
import { FilterContext } from '../../context/FilterContext'

const Filter = () => {
  const { filters, setFilters } = useContext(FilterContext)

  const handleClocl = (event: any) => {
    event.preventDefault()
    setFilters(['d'])
  }
  console.log('xc', filters)
  return (
    <div>
      <div onClick={handleClocl}>hello</div>
    </div>
  )
}

export default Filter
