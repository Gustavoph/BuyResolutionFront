import { Routes, Route } from "react-router-dom";

import { Login } from '../views/Login';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}