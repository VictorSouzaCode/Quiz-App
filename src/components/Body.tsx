

import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { CategoryContainer } from "../shared/ui"
import { categoryChoice } from "../data/categoryChoice"

const Body = () => {
  return (
        <div className="flex-grow w-full grid grid-cols-2 p-3 gap-3 rounded-t-3xl bg-teal-400 h-full">

          {categoryChoice.map((category) => (
            <CategoryContainer 
            key={category.id} 
            toLink={category.route}
            >
              {category.render}
            </CategoryContainer>
          ))}
        </div>
  )
}

export default Body