import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./quizOutput.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Sports from './pages/Sports.tsx'
import Movies from './pages/Movies.tsx'
import Science from './pages/Science.tsx'
import General from './pages/General.tsx'
import { quizStore } from './state/quizStore.ts'
import { Provider } from 'react-redux'
import RouteTracker from './components/RouteTracker.tsx'

/* Quiz App with Score Tracking, AI instructions

Concepts: Redux to manage user interactions, data flow, and state updates across multiple screens.

Challenge: Create a quiz application where users can answer multiple-choice questions. Use Redux to manage the current question, track the user's answers, and show the final score.

Extensions: Add features like difficulty levels, time limits for each question, or saving progress.

*/

const myCustomRouter = createBrowserRouter([
  {
    element: <RouteTracker/>,
    children: [

      {
        path: "/",
        element: <App/>
      },
      {
        path: "/sports",
        element: <Sports/>
      },
      {
        path: "/science",
        element: <Science/>
      },
      {
        path: "/movies",
        element: <Movies/>
      },
      {
        path: "/general",
        element: <General/>
      }
      
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={quizStore}>
    <RouterProvider router={myCustomRouter} />
    </Provider>
  </StrictMode>,
)
