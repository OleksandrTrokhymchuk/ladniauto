"use client"

import React, { useState } from 'react'
import { PatternFormat } from 'react-number-format'

interface PhoneInputProps {
  label?: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  label,
  value,
  onChange,
  placeholder = "+380 __ ___ __ __",
  className
}) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (values: { formattedValue: string; value: string; floatValue?: number; }) => {
    onChange(values.formattedValue)
  }

  return (
    <div className="mb-4">
      {label && (
        <label htmlFor="phone-input" className="block text-project-white text-lg font-bold mb-2">
          {label}
        </label>
      )}
      <PatternFormat
        id="phone-input"
        format="+380 ## ### ## ##" 
        allowEmptyFormatting
        mask="_" 
        value={value}
        onValueChange={handleChange} 
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className={`
          w-full px-4 py-2 text-project-blue bg-project-white rounded-lg pl-8
          border-2 border-transparent focus:outline-none
          transition-all duration-300 ease-in-out
          ${isFocused ? 'ring-2 ring-project-white' : ''}
          ${className}
        `}
      />
    </div>
  )
}

export default PhoneInput