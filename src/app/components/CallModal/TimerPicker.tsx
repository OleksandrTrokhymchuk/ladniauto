// components/TimePicker.tsx
import React, { useState, useRef, useEffect } from 'react'

const TimePicker: React.FC = () => {
  const [selectedHour, setSelectedHour] = useState<string>('09')
  const [selectedMinute, setSelectedMinute] = useState<string>('00')
  const [isHourOpen, setIsHourOpen] = useState<boolean>(false) 
  const [isMinuteOpen, setIsMinuteOpen] = useState<boolean>(false)

  const hourRef = useRef<HTMLDivElement>(null)
  const minuteRef = useRef<HTMLDivElement>(null)

  const generateHourOptions = () => {
    const hours = []
    for (let i = 8; i < 23; i++) {
      const hour = i < 10 ? `0${i}` : `${i}`
      hours.push(
        <div
          key={hour}
          className={`
            py-1 px-2 cursor-pointer hover:bg-project-blue hover:text-project-white transition-colors duration-200
            ${selectedHour === hour ? 'bg-project-blue text-project-white' : ''}
          `}
          onClick={() => {
            setSelectedHour(hour)
            setIsHourOpen(false)
          }}
        >
          {hour}
        </div>
      )
    }
    return hours
  }

  const generateMinuteOptions = () => {
    const minutes = []
    for (let i = 0; i < 60; i += 5) {
      const minute = i < 10 ? `0${i}` : `${i}`
      minutes.push(
        <div
          key={minute}
          className={`
            py-1 px-2 cursor-pointer hover:bg-project-blue hover:text-project-white transition-colors duration-200
            ${selectedMinute === minute ? 'bg-project-blue text-project-white' : ''}
          `}
          onClick={() => {
            setSelectedMinute(minute)
            setIsMinuteOpen(false)
          }}
        >
          {minute}
        </div>
      )
    }
    return minutes
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (hourRef.current && !hourRef.current.contains(event.target as Node)) {
        setIsHourOpen(false)
      }
      if (minuteRef.current && !minuteRef.current.contains(event.target as Node)) {
        setIsMinuteOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="flex items-center space-x-1.5 text-project-blue text-lg">
      <div className="relative" ref={hourRef}>
        <div
          className="bg-project-white rounded-lg px-2 py-1 cursor-pointer shadow-md flex items-center justify-between min-w-[55px]"
          onClick={() => setIsHourOpen(!isHourOpen)}
        >
          {selectedHour}
          <svg
            className={`w-4 h-4 ml-2 transition-transform duration-300 ${isHourOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {isHourOpen && (
          <div className="absolute z-10 bg-project-white rounded-lg  max-h-60 overflow-y-auto w-full border border-gray-200 animate-fade-in-down">
            {generateHourOptions()}
          </div>
        )}
      </div>

      <span className='text-project-white'>:</span>

      <div className="relative" ref={minuteRef}>
        <div
          className="bg-project-white rounded-lg px-2 py-1 cursor-pointer shadow-md flex items-center justify-between min-w-[55px]"
          onClick={() => setIsMinuteOpen(!isMinuteOpen)}
        >
          {selectedMinute}
          <svg
            className={`w-4 h-4 ml-2 transition-transform duration-300 ${isMinuteOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {isMinuteOpen && (
          <div className="absolute z-10 bg-project-white rounded-lg  max-h-60 overflow-y-auto w-full border border-gray-200 animate-fade-in-down">
            {generateMinuteOptions()}
          </div>
        )}
      </div>
    </div>
  )
}

export default TimePicker