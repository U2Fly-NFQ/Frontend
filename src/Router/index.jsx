// import React from 'react'

import React, { Suspense, lazy } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { PageLoadingAnimation } from '../components'

import {
  Login,
  Register,
  NoMatch,
  AdminDashboard,
  Booked,
  Booking,
  BookingSuccessPage,
} from '../pages'

const HomeLayout = lazy(() => import('../layouts/Home'))
const AdminLayout = lazy(() => import('../layouts/Admin'))
const Home = lazy(() => import('../pages/Home'))
const FlightList = lazy(() => import('../pages/FlightList'))

const RoutesApp = () => {
  return (
    <Router>
      <Suspense fallback={<PageLoadingAnimation />}>
        <Routes>
          {/* Public */}
          <Route path="/" element={<HomeLayout />}>
            <Route path="" element={<Home />} />
            <Route path="flights" element={<FlightList />} />
            <Route path="/booking-success" element={<BookingSuccessPage />} />
            <Route path="flights-booking" element={<Booking />} />
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
      </Suspense>
    </Router>
  )
}

export default RoutesApp
