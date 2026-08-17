import { useState } from "react";
import { HeaderContext } from "./HeaderContext"


function HeaderContextProvider(props) {
    const [sideBarToggle, setSideBarToggle] = useState(false)

    const toggleSideBar = () => {
        setSideBarToggle(!sideBarToggle);
    }
  return (
    <HeaderContext.Provider value={{ toggleSideBar, sideBarToggle }}>
        {props.children}
    </HeaderContext.Provider>
  )
}

export default HeaderContextProvider