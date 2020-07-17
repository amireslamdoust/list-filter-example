import React from 'react'
type CheckboxType = {
  labelText: string
  name: string
  value: string
  onClick: any
  isActive: any
}
const Checkbox = ({
  labelText = '',
  name = '',
  value = '',
  onClick = () => {},
  isActive = false,
}: CheckboxType) => {
  return (
    <label className="flex-wrap flex relative pl-1 cursor-pointer text-base" onClick={onClick}>
      <div className="mx-2">
        <input className="left-0 absolute opacity-0" type="checkbox" name={name} value={value} />
        <span
          className={`absolute top-0 left-0 mt-1 h-4 w-4 rounded ${
            isActive ? 'border-gray-200 bg-indigo-600 border-4' : 'bg-gray-200'
          }`}
        />
      </div>
      <div className="mx-2">{labelText}</div>
    </label>
  )
}
export default Checkbox
