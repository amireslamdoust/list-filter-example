import React, { useContext, useEffect, useState } from 'react'
import { FilterContext } from '../../context/FilterContext'

const createPagination = (currentPage: number) => {
  const pages = []
  if (currentPage < 4) {
    for (let i = 1; i < currentPage + 3; i++) {
      pages.push(i)
    }
  } else {
    pages.push(1)
    pages.push(2)
    for (let i = currentPage; i < currentPage + 3; i++) {
      pages.push(i)
    }
  }
  return pages
}

const Pagination = () => {
  const { filters, updateFilters } = useContext(FilterContext)

  const handleChangePage = (event: any, page: number) => {
    event.preventDefault()
    if (page < 1) {
      return
    }
    updateFilters({ page: page })
  }
  const [pagination, setPagination] = useState(createPagination(filters.page))
  useEffect(() => {
    setPagination(createPagination(filters.page))
  }, [filters.page])

  return (
    <nav className="mt-10 border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
      <div className="w-0 flex-1 flex">
        <button
          onClick={(event) => {
            handleChangePage(event, filters.page - 1)
          }}
          className="-mt-px border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150"
        >
          <svg className="mr-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Previous
        </button>
      </div>
      <div className="hidden md:flex">
        {pagination.map((p) => {
          return (
            <button
              key={p}
              className={`-mt-px border-t-2 transition ease-in-out duration-150 focus:outline-none pt-4 px-4 inline-flex items-center text-sm leading-5 font-medium ${
                filters.page === p
                  ? 'border-indigo-500 text-indigo-600 focus:text-indigo-800 focus:border-indigo-700 '
                  : 'border-transparent text-gray-500 focus:text-gray-700 focus:border-gray-400 hover:text-gray-700 hover:border-gray-300 '
              }`}
              onClick={(event) => {
                handleChangePage(event, p)
              }}
            >
              {p}
            </button>
          )
        })}
      </div>
      <div className="w-0 flex-1 flex justify-end">
        <button
          onClick={(event) => {
            handleChangePage(event, filters.page + 1)
          }}
          className="-mt-px border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-400 transition ease-in-out duration-150"
        >
          Next
          <svg className="ml-3 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Pagination
