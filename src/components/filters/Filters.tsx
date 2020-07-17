import React, { useContext } from 'react'
import { FilterContext } from '../../context/FilterContext'
import CheckBox from '../inputs/CheckBox'
import { locales } from '../../config/locales'
import LocaleTranslate from '../../services/LocaleTranslate'

const Filter = () => {
  const { filters, setFilters } = useContext(FilterContext)

  const handleLocale = (event: any, locale: string) => {
    const locales = filters.locales
    if (Object.values(locales).find((f) => f === locale)) {
      const index = locales.indexOf(locale)
      locales.splice(index)
    } else {
      locales.push(locale)
    }
    setFilters({ locales: locales })
  }

  return (
    <div className="mx-2 my-2">
      {Object.keys(locales).map((locale) => {
        return (
          <div key={locale}>
            <CheckBox
              onChange={(event: any) => {
                handleLocale(event, locale)
              }}
              value={locale}
              label={LocaleTranslate(locale)}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Filter
