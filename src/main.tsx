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
