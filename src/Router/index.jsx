// import React from 'react'

import React, { Suspense, lazy } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
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
import { getLsObj } from '../utils/localStorage'

const HomeLayout = lazy(() => import('../layouts/Home'))
const AdminLayout = lazy(() => import('../layouts/Admin'))
const FlightList = lazy(() => import('../pages/FlightList'))
const AdminTicket = lazy(() => import('../pages/AdminTicket'))
const RoutesApp = () => {
  const token = localStorage.getItem('token')
  const user = getLsObj('user')

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
            {token && Object.values(user.roles).indexOf('ROLE_USER') > -1 && (
              <Route path="profile" element={<UserProfile />}>
                <Route index element={<UserProfileDetail />} />
                <Route path="booking" element={<UserBooking />} />
                <Route path="history" element={<UserHistory />} />
              </Route>
            )}
          </Route>

          {/* For admins */}
          {token && Object.values(user.roles).indexOf('ROLE_ADMIN') > -1 && (
            <Route path="admin" element={<AdminLayout />}>
              <Route path="" element={<AdminDashboard />} />
              <Route path="discount" element={<AdminDiscount />} />
              <Route path="ticket" element={<AdminTicket />} />
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
