import { Routes, Route } from "react-router-dom";

import { Login } from '../views/Login';
import { Market } from '../views/Market'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/market/foods" element={<Market food={true} drink={false}/>} />
      <Route path="/market/drinks" element={<Market food={false} drink={true}/>} />
      <Route path="/market" element={<Market food={false} drink={true}/>} />
    </Routes>
  )
}