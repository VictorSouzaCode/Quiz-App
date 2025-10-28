
type AppLogoProps = {
    children?: React.ReactNode
}
export const AppLogo = ({
    children,

}:AppLogoProps) => {
  return (
    <div className="bg-teal-600 aspect-square w-full max-w-44 mx-auto rounded-full sm:max-w-64 text-xl sm:text-2xl md:text-3xl flex flex-col justify-center items-center font-medium">{children}</div>
  )
}