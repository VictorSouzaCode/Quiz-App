import Header from "../layout/Header"
import Body from "../layout/Body"

export const InitialTemplate = () => {
  return (
      <div className="flex flex-col flex-1 gap-2 w-full lg:max-w-[50%] bg-teal-600">

          <Header />

          <Body />

      </div>

  )
}