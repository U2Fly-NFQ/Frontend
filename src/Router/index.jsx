import React from 'react'
// import { Route, Routes } from 'react-router-dom'
import { Routes, Route, topbar } from 'react-router-loading'
import HomeLayout from '../layouts/Home'
import AdminLayout from '../layouts/Admin'

import {
  Login,
  Home,
  FlightList,
  Register,
  NoMatch,
  AdminDashboard,
  Booked,
  Booking,
  BookingSuccessPage,
} from '../pages'

import { useSelector } from 'react-redux'

const RoutesApp = () => {
  const userData = useSelector((state) => state.login)
  topbar.config({
    autoRun: false,
    barThickness: 5,
    barColors: {
      1.0: '#8b3eea',
      // 0: 'rgba(26,  188, 156, .7)',
    },
    className: 'topbar',
  })
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<HomeLayout />}>
        <Route path="" element={<Home />} loading />
        <Route path="flights" element={<FlightList />} loading />
        <Route path="/flights-booking" element={<Booking />} loading />
        <Route
          path="/booking-success"
          element={<BookingSuccessPage />}
          loading
        />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* For users */}
      <Route path="/user/booked" element={<Booked />} />

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
