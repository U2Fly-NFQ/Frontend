// import React from 'react'

import React, { Suspense, lazy } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { PageLoadingAnimation } from '../components'

import {
  Login,
  Register,
  NoMatch,
  AdminDashboard,
  Booking,
  BookingSuccessPage,
  UserProfile,
  UserBooking,
  UserHistory,
  UserProfileDetail,
} from '../pages'

const HomeLayout = lazy(() => import('../layouts/Home'))
const AdminLayout = lazy(() => import('../layouts/Admin'))
const FlightList = lazy(() => import('../pages/FlightList'))

const RoutesApp = () => {
  const token = localStorage.getItem('token')

  return (
    <Router>
      <Suspense fallback={<PageLoadingAnimation />}>
        <Routes>
          {/* Public */}
          <Route path="/" element={<HomeLayout />}>
            <Route path="" element={<FlightList />} />
            <Route path="/flights" element={<FlightList />} />
            <Route
              path="booking-success/:ticketId"
              element={<BookingSuccessPage />}
            />
            <Route path="flights-booking" element={<Booking />} />
            <Route path="flights-booking/:ticketId" element={<Booking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* For users */}
            {token && (
              <Route path="profile" element={<UserProfile />}>
                <Route index element={<UserProfileDetail />} />
                <Route path="booking" element={<UserBooking />} />
                <Route path="history" element={<UserHistory />} />
              </Route>
            )}
          </Route>

          {/* For admins */}
          {token && (
            <Route path="admin" element={<AdminLayout />}>
              <Route path="" element={<AdminDashboard />} />
            </Route>
          )}

          {/* Invalid route */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default RoutesApp
