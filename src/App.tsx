
import Header from "./components/Header"
import Body from "./components/Body"

function App() {

  return (
    <>
      <div className="min-h-svh h-full flex justify-center bg-slate-800">

        <div className="min-h-svh flex flex-col items-center justify-center gap-2 w-full lg:max-w-[50%] shadow-2xl shadow-black bg-teal-600">

          <Header />

          <Body />

        </div>

      </div>
    </>
  )
}

export default App
