import React from 'react'
type CheckBoxType = {
  label: string
  value: string
  description?: string
  onChange?: any
}
const CheckBox = ({ value, label, description, onChange = () => {} }: CheckBoxType) => {
  return (
    <div className="mt-4">
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            onChange={onChange}
            id={label}
            value={value}
            type="checkbox"
            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
          />
        </div>
        <div className="ml-3 text-sm leading-5">
          <label htmlFor={label} className="font-medium text-gray-700">
            {label}
          </label>
          {description && <p className="text-gray-500">{description}</p>}
        </div>
      </div>
    </div>
  )
}
export default CheckBox
