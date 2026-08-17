import { Outlet } from "react-router-dom"
import AuthContextProvider from "../../context/AuthContext/AuthContextProvider"
import AlertContextProvider from "../../context/AlertContext/AlertContextProvider"

function RootLayout() {
  return (
    <>
        <div className="app">
          <AlertContextProvider>
            <AuthContextProvider>
              <Outlet />
            </AuthContextProvider>
          </AlertContextProvider>
        </div>
    </>
  )
}

export default RootLayout