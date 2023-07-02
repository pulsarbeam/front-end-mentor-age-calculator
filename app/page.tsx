'use client'

import { useState } from 'react'
import Footer from './Footer'

export default function Home() {
  const [elapsed, setElapsed] = useState<{
    days: number | undefined
    months: number | undefined
    years: number | undefined
  }>({
    days: undefined,
    months: undefined,
    years: undefined,
  })
  const [filled, setFilled] = useState(true)
  const [validDate, isValidDate] = useState(true)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const { day, month, year } = Object.fromEntries(formData)

    if (!day || !month || !year) {
      // Empty fields
      setFilled(false)
      isValidDate(true)
      return
    } else {
      setFilled(true)
    }

    const inputDate = new Date(`${year}-${month}-${day}`)
    inputDate.setUTCHours(0, 0, 0, 0) // Set time to 00:00:00

    const currentDate = new Date()
    currentDate.setUTCHours(0, 0, 0, 0) // Set time to 00:00:00

    if (inputDate > currentDate || isNaN(inputDate.getTime())) {
      // Invalid date
      setFilled(true)
      isValidDate(false)
      setElapsed({
        days: undefined,
        months: undefined,
        years: undefined,
      })
      return
    } else {
      isValidDate(true)
    }

    let yearsDiff = currentDate.getFullYear() - inputDate.getFullYear()
    let monthsDiff = currentDate.getMonth() - inputDate.getMonth()
    let daysDiff = Math.abs(currentDate.getDate() - inputDate.getDate()) // Use absolute difference

    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      yearsDiff--
      monthsDiff += 12
    }

    setElapsed({
      days: daysDiff,
      months: monthsDiff,
      years: yearsDiff,
    })
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-200 ">
        <div className="bg-white rounded-2xl lg:rounded-br-[200px] rounded-br-[100px] lg:p-8 p-6 font-poppins">
          <form onSubmit={handleSubmit} className="font-bold">
            <div className="flex lg:gap-6 gap-3 justify-center lg:justify-normal">
              <div
                className="flex flex-col gap-2 ml-2 "
                style={{ height: '74px' }}
              >
                <label
                  className={`text-xs tracking-widest ${
                    validDate && filled ? 'text-gray-400' : 'text-red-500'
                  } `}
                >
                  DAY
                </label>
                <input
                  className={`lg:w-28 w-[83px] py-2 px-4 border ${
                    validDate ? 'border-gray-400' : 'border-red-500'
                  } rounded-lg text-l lg:text-2xl`}
                  name="day"
                  id="day"
                  placeholder="DD"
                ></input>
                {!validDate && (
                  <span className="text-red-500 text-[9px] lg:text-[11px] italic">
                    Must be a valid date
                  </span>
                )}
                {!filled && (
                  <span className="text-red-500 text-[9px] lg:text-[11px] italic ">
                    Please fill all fields
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className={`text-xs tracking-widest ${
                    validDate && filled ? 'text-gray-400' : 'text-red-500'
                  } `}
                >
                  MONTH
                </label>
                <input
                  className={`lg:w-28 w-[83px] py-2 px-4 border ${
                    validDate ? 'border-gray-400' : 'border-red-500'
                  } rounded-lg text-l lg:text-2xl`}
                  name="month"
                  id="year"
                  placeholder="MM"
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  className={`text-xs tracking-widest ${
                    validDate && filled ? 'text-gray-400' : 'text-red-500'
                  } `}
                >
                  YEAR
                </label>
                <input
                  className={`lg:w-28 w-[83px] py-2 px-4 border ${
                    validDate ? 'border-gray-400' : 'border-red-500'
                  } rounded-lg text-l lg:text-2xl`}
                  name="year"
                  id="year"
                  placeholder="YYYY"
                ></input>
              </div>
            </div>
            <div className="py-6">
              <div className="relative">
                <hr className="border-b-gray-400 my-10 lg:w-[35rem]" />
                <button className="absolute lg:right-0 right-28 lg:-top-10 -top-8 h-16 w-16 lg:h-20 lg:w-20 rounded-full bg-[#854dff]">
                  <img
                    src="/icon-arrow.svg"
                    alt="arrow"
                    className="h-8 w-8 lg:w-10 lg:h-10 m-auto"
                  />
                </button>
              </div>
            </div>
          </form>
          <div className="flex flex-col gap-4 ml-2 text-xl bold ">
            <div className="flex gap-2 items-center">
              <span className="text-[#854dff] lg:text-7xl text-5xl">
                {elapsed.years ? elapsed.years : '- -'}
              </span>
              <span className="lg:text-7xl text-5xl">years</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-[#854dff] lg:text-7xl text-5xl">
                {elapsed.months ? elapsed.months : '- -'}
              </span>
              <span className="lg:text-7xl text-5xl">months</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-[#854dff] lg:text-7xl text-5xl">
                {elapsed.days ? elapsed.days : '- -'}
              </span>
              <span className="lg:text-7xl text-5xl">days</span>
            </div>
          </div>
        </div>
        <div className="lg:w-[1000px] ">
          <Footer />
        </div>
      </main>
    </>
  )
}
