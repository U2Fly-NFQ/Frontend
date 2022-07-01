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
  AdminDashboard,
  UserProfile,
  Booking,
  UserBooking,
} from '../pages'

import { useSelector } from 'react-redux'

const RoutesApp = () => {
  const userData = useSelector((state) => state.login)

  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<HomeLayout />}>
        <Route path="" element={<Home />} />
        <Route path="flights" element={<FlightList />} />
        <Route path="/booking-flights" element={<Booking />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* For users */}
        <Route path="profile" element={<UserProfile />}>
          {/*<Route index element={<UserBooking />} />*/}
          <Route path="booking" element={<UserBooking />} />
        </Route>
      </Route>

      {/* For admins */}
      <Route path="admin" element={<AdminLayout />}>
        <Route path="" element={<AdminDashboard />} />
      </Route>

      {/* Invalid route */}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default RoutesApp
