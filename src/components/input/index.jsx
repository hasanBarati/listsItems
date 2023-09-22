import React from 'react'

export default function Input({
    label,
    type="text",
    name,
    value,
    onChange
}) {
    

    return (
        <div className="flex flex-col justify-start mb-4">
        <label  className="block text-gray-700 text-sm font-bold mb-2 text-left" >
          {label}
        </label>
        <input data-testid={name} value={value} onChange={onChange} name={name} type={type} className="w-[20rem] max-md:w-full shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
    )
}
