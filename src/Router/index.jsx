// import React from 'react'

import React, { Suspense, lazy } from 'react'
import { topbar } from 'react-router-loading'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-loading'
import { PageLoadingAnimation } from '../components'
import AdminDiscount from '../components/AdminDiscount'

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

  topbar.config({
    autoRun: false,
    barThickness: 5,
    barColors: {
      0: 'rgba(26,  188, 156, .7)',
      0.3: 'rgba(41,  128, 185, .7)',
      1.0: 'rgba(231, 76,  60,  .7)',
    },
    shadowBlur: 5,
    shadowColor: 'red',
    className: 'topbar',
  })
  return (
    <Router>
      <Suspense fallback={<PageLoadingAnimation />}>
        <Routes>
          {/* Public */}
          <Route path="/" element={<HomeLayout />}>
            <Route path="" element={<FlightList />} />
            <Route path="/flights" element={<FlightList />} />

            <Route path="flights-booking" element={<Booking />} />
            <Route
              path="flights-booking/:ticketId"
              element={<BookingSuccessPage />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* For users */}
            {token && (
              <Route path="profile" element={<UserProfile />}>
                <Route index element={<UserProfileDetail />} loading />
                <Route path="booking" element={<UserBooking />} loading />
                <Route path="history" element={<UserHistory />} loading />
              </Route>
            )}
          </Route>

          {/* For admins */}
          {token && (
            <Route path="admin" element={<AdminLayout />}>
              <Route path="" element={<AdminDashboard />} />
              <Route path="discount" element={<AdminDiscount />} />
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
