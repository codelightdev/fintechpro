import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./layout/RootLayout/RootLayout"
import Auth from "./pages/Auth/Auth"
import PanelLayout from "./layout/PanelLayout/PanelLayout"
import Dashboard from "./pages/Dashboard/Dashboard"
import Settings from "./pages/Settings/Settings"

function App() {
  const router = createBrowserRouter (
    createRoutesFromElements (
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Auth />} />
        <Route path="/account" element={<PanelLayout />}>
          {/* Automatically redirect /account to /account/dashboard */}
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App