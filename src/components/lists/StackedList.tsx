import React from 'react'
import LocaleTranslate from '../../services/LocaleTranslate'

type ListTypes = {
  list: any
}
const StackedList = ({ list }: ListTypes) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul>
        {list.map((item: any) => {
          return (
            <li key={item.email} className="border-t border-gray-200 shadow">
              <div className="flex items-center px-4 py-4 sm:px-6">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-full" src={item.image} alt="" />
                  </div>
                  <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                    <div>
                      <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                        <span className="font-bold">{item.name}</span>
                        <span className="ml-4 text-black">{item.title}</span>
                      </div>
                      <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                        {item.status === 'online' ? (
                          <span className=" py-1 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full">
                            Online
                          </span>
                        ) : (
                          <span className=" py-1 text-teal-800 text-xs leading-4 font-medium bg-red-100 rounded-full">
                            Offline
                          </span>
                        )}
                      </div>
                      <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                        <span>Rate: {item.rate}</span>
                        <span className="ml-4">Review: {item.reviews}</span>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div>
                        <div className="text-sm leading-5 text-gray-900">
                          {item.locale.map((locale: any) => {
                            return (
                              <div
                                key={locale}
                                className="mr-2 my-1 inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600"
                              >
                                {LocaleTranslate(locale)}
                              </div>
                            )
                          })}
                        </div>
                        <a href={`mailto:${item.email}`}>
                          <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                            <svg
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span className="truncate">{item.email}</span>
                          </div>
                        </a>
                        <a href={`tel:${item.phone}`}>
                          <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                            <svg
                              className="w-5 h-5 text-gray-400"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span className="truncate">{item.phone}</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default StackedList
