"use client"
import { SlidingNumber } from "@/components/sliding-number"
import type React from "react"

import { useState } from "react"

export function SlidingNumberWithSlider() {
  const [value, setValue] = useState(100)
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(1000)

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = +e.target.value
    setMinValue(newMin)
    if (value < newMin) setValue(newMin)
  }

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = +e.target.value
    setMaxValue(newMax)
    if (value > newMax) setValue(newMax)
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Min/Max Input Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-mono">Min:</label>
            <input
              type="number"
              value={minValue}
              onChange={handleMinChange}
              className="border border-gray-300 rounded px-2 py-1 font-mono"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-mono">Max:</label>
            <input
              type="number"
              value={maxValue}
              onChange={handleMaxChange}
              className="border border-gray-300 rounded px-2 py-1 font-mono"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-0">
        <div className="flex items-center gap-2 font-serif">Range:</div>
        <div className="inline-flex items-center gap-1 font-mono leading-none">
          $<SlidingNumber value={value} />
        </div>
        <input
          type="range"
          value={value}
          min={minValue}
          max={maxValue}
          step={5}
          onChange={handleSliderChange}
          className="accent-pink-500 text-justify mt-2 w-full"
        />
      </div>
    </div>
  )
}
