import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomeLayout from '../layouts/Home'
import AdminLayout from '../layouts/Admin'

import Login from '../pages/Login'
import HomePage from '../pages/Home'
import FlightListPage from '../pages/FlightList'
import Register from '../pages/Register'
import NoMatch from '../pages/NoMatch'
import Admin from '../pages/Admin'

const RoutesApp = () => {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* For users */}
      <Route path="/" element={<HomeLayout />}>
        <Route path="" element={<HomePage />} />
        <Route path="flights" element={<FlightListPage />} />
      </Route>

      {/* For admins */}
      <Route path="admin" element={<AdminLayout />}>
        <Route path="" element={<Admin />} />
      </Route>

      {/* Invalid route */}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default RoutesApp
