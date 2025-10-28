
type QuizTemplateProps = {
  children: React.ReactNode
}

export const QuizTemplate = ({
  children,

}:QuizTemplateProps) => {

  return (
    <div className="w-full lg:max-w-[50%] shadow-2xl shadow-black flex flex-col justify-between min-h-screen">{children}</div>
  )
}