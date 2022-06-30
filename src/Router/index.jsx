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
  Booked,
} from '../pages'

import { useSelector } from 'react-redux'

const RoutesApp = () => {
  const userData = useSelector((state) => state.login)

  return (
    <Routes>
      {/* For users */}
      <Route path="/" element={<HomeLayout />}>
        <Route path="" element={<Home />} />
        <Route path="flights" element={<FlightList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* For users */}
      {userData?.roles?.include('2') && (
        <Route path="booked" element={<Booked />} />
      )}

      {/* For admins */}
      {userData?.roles?.include('1') && (
        <Route path="admin" element={<AdminLayout />}>
          <Route path="" element={<AdminDashboard />} />
        </Route>
      )}

      {/* Invalid route */}
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default RoutesApp
