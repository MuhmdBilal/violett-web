import React from 'react'
import { Navigate } from 'react-router-dom'
function Protected({ children }:any) {
  if (!localStorage.getItem('token')) {
    return <Navigate to="/" replace />
  }
  return children
}
export default Protected