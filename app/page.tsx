export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-blue-100">
        <div className="bg-white rounded-xl">
          <form>
            <label>DAY</label>
            <input name="day" id="day" placeholder="DD"></input>
            <label>MONTH</label>
            <input name="month" id="year" placeholder="MM"></input>
            <label>YEAR</label>
            <input name="year" id="year" placeholder="YYYY"></input>
          </form>
        </div>
      </main>
    </>
  )
}
