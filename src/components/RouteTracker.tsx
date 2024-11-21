
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setCurrentPath } from "../state/majorFunctionalities/majorFunctionalities"
import { Outlet } from "react-router-dom"

const RouteTracker = () => {

    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(setCurrentPath(location.pathname))

    }, [location, dispatch])

  return (<Outlet/>)
}

export default RouteTracker