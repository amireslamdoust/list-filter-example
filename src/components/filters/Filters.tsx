import React, { useContext } from 'react'
import { FilterContext } from '../../context/FilterContext'
import { locales } from '../../config/locales'
import LocaleTranslate from '../../services/LocaleTranslate'
import Checkbox from '../inputs/CheckBox'
import RadioBox from '../inputs/CheckBox'

const rates = ['0', '1', '2', '3', '4', '5']

const Filter = () => {
  const { filters, updateFilters } = useContext(FilterContext)

  const handleLocale = (event: any, locale: string) => {
    event.preventDefault()
    const locales = filters.locales || []
    if (Object.values(locales).find((f) => f === locale)) {
      const index = locales.indexOf(locale)
      locales.splice(index, 1)
    } else {
      locales.push(locale)
    }
    updateFilters({ locales: locales })
  }

  const handleOnline = (event: any) => {
    event.preventDefault()
    updateFilters({ online: !filters.online })
  }

  const handleReview = (event: any) => {
    event.preventDefault()
    let reviewSort = 'asc'
    if (filters.reviewSort === 'asc') {
      reviewSort = 'desc'
    }
    updateFilters({ reviewSort: reviewSort })
  }
  const handleRate = (event: any, rate: string) => {
    event.preventDefault()
    updateFilters({ rate: rate })
  }

  return (
    <div className="mx-4">
      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 my-6">
        <div>
          <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">language</h3>
        </div>
        <div className="my-6">
          {Object.keys(locales).map((locale) => {
            return (
              <div key={locale}>
                <Checkbox
                  labelText={LocaleTranslate(locale)}
                  name={locale}
                  value={locale}
                  onClick={(event: any) => {
                    handleLocale(event, locale)
                  }}
                  isActive={
                    filters.locales && Object.values(filters.locales).find((f) => f === locale)
                  }
                />
              </div>
            )
          })}
        </div>
      </div>

      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 my-6">
        <div>
          <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">Status</h3>
        </div>
        <div className="my-6">
          <Checkbox
            labelText="Online"
            name="Online"
            value="online"
            onClick={handleOnline}
            isActive={filters.online}
          />
        </div>
      </div>

      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 my-6">
        <div>
          <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">Sort By review</h3>
        </div>
        <div className="my-6">
          <Checkbox
            labelText="Descending"
            name="review"
            value="review"
            onClick={handleReview}
            isActive={filters.reviewSort === 'desc'}
          />
        </div>
      </div>

      <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 my-6">
        <div>
          <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">Rate</h3>
        </div>
        <div className="my-6">
          {rates.map((rate) => {
            return (
              <div key={rate}>
                <RadioBox
                  labelText={rate === '5' ? '5' : `${rate} Or Upper`}
                  name="rate"
                  value="rate"
                  onClick={(event: any) => {
                    handleRate(event, rate)
                  }}
                  isActive={filters.rate === rate}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Filter
