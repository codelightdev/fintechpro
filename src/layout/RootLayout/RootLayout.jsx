import { Outlet } from "react-router-dom"
import AuthContextProvider from "../../context/AuthContext/AuthContextProvider"
import AlertContextProvider from "../../context/AlertContext/AlertContextProvider"
import HeaderContextProvider from "../../context/HeaderContext/HeaderContextProvider"

function RootLayout() {
  return (
    <>
        <div className="app">
          <AlertContextProvider>
            <HeaderContextProvider>
              <AuthContextProvider>
                <Outlet />
              </AuthContextProvider>
            </HeaderContextProvider>
          </AlertContextProvider>
        </div>
    </>
  )
}

export default RootLayout