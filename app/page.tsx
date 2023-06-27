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

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
        <div className="bg-white rounded-xl p-8">
          <form
            onSubmit={(e: any) => {
              e.preventDefault()
              const formData = new FormData(e.target as HTMLFormElement)
              const { day, month, year } = Object.fromEntries(formData)

              const inputDate = new Date(`${year}-${month}-${day}`)
              const currentDate = new Date()
              const diff = currentDate.getTime() - inputDate.getTime()

              const elapsedYears = Math.floor(
                diff / (1000 * 60 * 60 * 24 * 365)
              )
              const elapsedMonths =
                Math.floor(diff / (1000 * 60 * 60 * 24 * 30) + 12) % 12
              const elapsedDays =
                Math.floor(diff / (1000 * 60 * 60 * 24) + 30) % 30

              setElapsed({
                days: elapsedDays,
                months: elapsedMonths,
                years: elapsedYears,
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
          <div className="flex flex-col gap-6 text-4xl font-extrabold ">
            <div className="flex gap-4 items-center">
              <span className="text-purple-500">
                {elapsed.years ? elapsed.years : '- -'}
              </span>
              <span className="text-5xl font-extrabold">Years</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-purple-500">
                {elapsed.months ? elapsed.months : '- -'}
              </span>
              <span className="text-5xl font-extrabold ">Months</span>
            </div>
            <div className="flex gap-4 items-center">
              <span className="text-purple-500">
                {elapsed.days ? elapsed.days : '- -'}
              </span>
              <span className="text-5xl font-extrabold ">Days</span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
