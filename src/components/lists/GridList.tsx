import React, { useContext } from 'react'
import LocaleTranslate from '../../services/LocaleTranslate'
import { FilterContext } from '../../context/FilterContext'

type GridTypes = {
  list: any
}

const GridList = ({ list }: GridTypes) => {
  const { filters } = useContext(FilterContext)

  console.log('grid', filters)
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {list.map((item: any) => {
        return (
          <li
            key={item.email}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow"
          >
            <div className="flex-1 flex flex-col p-8">
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                src={item.image}
                alt=""
              />
              <h3 className="mt-6 text-gray-900 text-sm leading-5 font-medium">{item.name}</h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dd className="text-gray-500 text-sm leading-5">{item.title}</dd>
                <dd className="text-gray-500 text-sm ">
                  {item.locale.map((locale: any) => {
                    return (
                      <div
                        key={locale}
                        className="mx-4 my-1 inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                      >
                        {LocaleTranslate(locale)}
                      </div>
                    )
                  })}
                </dd>
                <dd className="text-gray-500 text-sm leading-5">Rate: {item.rate}</dd>
                <dd className="text-gray-500 text-sm leading-5">Review: {item.reviews}</dd>
                <dd className="mt-3">
                  {item.status === 'online' ? (
                    <span className="px-2 py-1 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                      Online
                    </span>
                  ) : (
                    <span className="px-2 py-1 text-teal-800 text-xs leading-4 font-medium bg-red-100 rounded-full">
                      Offline
                    </span>
                  )}
                </dd>
              </dl>
            </div>
            <div className="border-t border-gray-200">
              <div className="-mt-px flex">
                <div className="w-0 flex-1 flex border-r border-gray-200">
                  <a
                    href={`mailto:${item.email}`}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                  >
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="ml-3">Email</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href={`tel:${item.phone}`}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                  >
                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="ml-3">Call</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default GridList
