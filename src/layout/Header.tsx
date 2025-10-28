import { AppLogo } from "./AppLogo"


const Header = () => {
  return (
        <div className="flex-1 w-full rounded-b-3xl bg-teal-400 flex items-center justify-center shadow-md">
          <AppLogo>Quiz App</AppLogo>
        </div>
  )
}

export default Header