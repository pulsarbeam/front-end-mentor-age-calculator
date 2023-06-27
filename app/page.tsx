'use client'
import { useState } from 'react'

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
  const daysInMonth = (month: number, year: number): number => {
    return new Date(year, month + 1, 0).getDate()
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100 font-poppins">
        <div className="bg-white rounded-xl p-8">
          <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
              const { day, month, year } = Object.fromEntries(formData)

              const inputDate = new Date(`${year}-${month}-${day}`)
              const currentDate = new Date()

              let yearsDiff =
                currentDate.getFullYear() - inputDate.getFullYear()
              let monthsDiff = currentDate.getMonth() - inputDate.getMonth()
              let daysDiff = currentDate.getDate() - inputDate.getDate()

              if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
                yearsDiff--
                monthsDiff += 12
              }

              setElapsed({
                days: daysDiff,
                months: monthsDiff,
                years: yearsDiff,
              })
            }}
            className=" font-bold"
          >
            <div className="flex gap-6 ">
              <div className="flex flex-col gap-1">
                <label className="text-md">DAY</label>
                <input
                  className="w-24 py-4 px-2 border border-gray-400 rounded-lg text-xl "
                  name="day"
                  id="day"
                  placeholder="DD"
                ></input>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-md">MONTH</label>
                <input
                  className="w-24 py-4 px-2 border border-gray-400 rounded-lg text-xl "
                  name="month"
                  id="year"
                  placeholder="MM"
                ></input>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-md">YEAR</label>
                <input
                  className="w-24 py-4 px-2 border border-gray-400 rounded-lg text-xl "
                  name="year"
                  id="year"
                  placeholder="YYYY"
                ></input>
              </div>
            </div>
            <div className="relative">
              <hr className="border-b-gray-400 my-10 w-[30rem]" />
              <button className=" absolute right-0 -top-10 h-20 w-20 rounded-full bg-purple-600">
                <img
                  src="/icon-arrow.svg"
                  alt="arrow"
                  className="h-10 w-10 m-auto"
                />
              </button>
            </div>
          </form>
          <div className="flex flex-col gap-6 text-xl font-extrabold ">
            <div className="flex gap-4 items-center">
              <span className="text-purple-500 text-5xl">
                {elapsed.years ? elapsed.years : '- -'}
              </span>
              <span className="font-extrabold text-7xl italic">years</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-purple-500 text-5xl">
                {elapsed.months ? elapsed.months : '- -'}
              </span>
              <span className="text-7xl italic">months</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-purple-500 text-5xl">
                {elapsed.days ? elapsed.days : '- -'}
              </span>
              <span className="text-7xl italic ">days</span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
