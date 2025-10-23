

import { Link } from "react-router-dom"
import { motion } from "motion/react"

// First i will create another branch
// Second i will see How to properly structure the folders
// Then i will create some reusable components

const Body = () => {
  return (
        <div className="flex-grow w-full grid grid-cols-2 p-3 gap-3 rounded-t-3xl bg-teal-400 h-full">

          <motion.div className="rounded-3xl shadow-md bg-teal-600 flex items-center justify-center text-3xl font-medium cursor-pointer"
          whileHover={{
            scale: 1.03,
          }}>
            <Link to="/sports" className="w-full h-full flex items-center justify-center rounded-3xl">
            <p>Sports</p>
            </Link>
          </motion.div>

          <motion.div className="rounded-3xl shadow-md bg-teal-600 flex items-center justify-center text-3xl font-medium cursor-pointer"
          whileHover={{
            scale: 1.02,
          }}>
            <Link to="/movies" className="w-full h-full flex items-center justify-center rounded-3xl">
            <p>Movies</p>
            </Link>
          </motion.div>

          <motion.div className="rounded-3xl shadow-md bg-teal-600 flex items-center justify-center text-3xl font-medium cursor-pointer"
          whileHover={{
            scale: 1.03,
          }}>
            <Link to="/general" className="w-full h-full flex items-center justify-center rounded-3xl">
            <p>General</p>
            </Link>
          </motion.div>

          <motion.div className="rounded-3xl shadow-md bg-teal-600 flex items-center justify-center text-3xl font-medium cursor-pointer"
          whileHover={{
            scale: 1.03,
          }}>
            <Link to="/science" className="w-full h-full flex items-center justify-center rounded-3xl">
            <p>Science</p>
            </Link>
          </motion.div>
            
        </div>
  )
}

export default Body