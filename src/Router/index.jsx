import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomeLayout from '../layouts/Home'
import AdminLayout from '../layouts/Admin'

import {
  Login,
  Home,
  FlightList,
  Register,
  NoMatch,
  Booking,
  AdminDashboard,
} from '../pages'

const RoutesApp = () => {
  return (
    <Routes>
      {/* For users */}
      <Route path="/" element={<HomeLayout />}>
        <Route path="" element={<Home />} />
        <Route path="flights" element={<FlightList />} />
        <Route path="/booking-flights" element={<Booking />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* For admins */}
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        {/*<Route path="users" element={<AdminDashboard />} />*/}
      </Route>

      {/* Invalid route */}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default RoutesApp
