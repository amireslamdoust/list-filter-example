import React, { useState } from 'react'
import gridIcon from '../images/grid-list.png'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import GridList from '../components/lists/GridList'
import StackedList from '../components/lists/StackedList'
import Filter from '../components/filters/Filters'
import useLists from '../hooks/useLists'
import FilterProvider from '../context/FilterContext'

const Dashboard = () => {
  const { list } = useLists()

  const [filterView, setFilterView] = useState('grid')

  const handleChangeFilterView = (event: any) => {
    event.preventDefault()
    if (filterView === 'grid') {
      setFilterView('stacked')
    } else {
      setFilterView('grid')
    }
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto my-8">
        <div className="flex flex-wrap w-full flex-row-reverse my-4 px-10 lg:px-1">
          <div className="cursor-pointer">
            <img className="w-6" src={gridIcon} alt="grid-icon" onClick={handleChangeFilterView} />
          </div>
        </div>
        <FilterProvider>
          <div className="flex flex-wrap w-full">
            <div className="w-full lg:w-1/4">
              <Filter />
            </div>
            <div className="w-full lg:w-3/4">
              <div>
                {filterView === 'grid' ? (
                  <GridList list={list.list} />
                ) : (
                  <StackedList list={list.list} />
                )}
              </div>
            </div>
          </div>
        </FilterProvider>
      </div>

      <Footer />
    </div>
  )
}
export default Dashboard
