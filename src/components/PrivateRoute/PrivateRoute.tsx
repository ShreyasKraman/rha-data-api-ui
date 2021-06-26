import React from "react"
import { navigate } from "gatsby"

const PrivateRoute = ({isAuthUser, Component}) => {
  if (!isAuthUser && location.pathname !== `/dashboard/login`) {
    navigate("/dashboard/login")
    return null
  }

  return <Component />
}
export default PrivateRoute