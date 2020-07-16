import React, { useEffect, useState } from 'react'
import { getCurrencies } from '../../services/openexchangerates'

type ConvertViewProps = {
  convertRate: any
  setConvertRate: any
}

const ConvertView = ({ convertRate, setConvertRate }: ConvertViewProps) => {
  const [second, setSecond] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setSecond(1000 * 10)
      getCurrencies()
        .then((res) => {
          if (!res) {
            return
          }
          if (!res.EUR || !res.GBP || !res.USD) {
            return
          }
          setConvertRate(res)
        })
        .catch((err) => console.error(err))
    }, second)
    return () => clearInterval(interval)
  }, [setConvertRate, second])

  return (
    <div className="my-10">
      <h3 className="text-lg leading-6 font-medium text-gray-900">Based on USD : $1</h3>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate">Euro</dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                € {Math.round((convertRate.EUR + Number.EPSILON) * 100) / 100}
              </dd>
            </dl>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div
            data-cy-value={convertRate.GBP}
            data-cy="convertRate.GBP"
            className="px-4 py-5 sm:p-6"
          >
            <dl>
              <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                Pound Sterling
              </dt>
              <dd className="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                £ {Math.round((convertRate.GBP + Number.EPSILON) * 100) / 100}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConvertView
