import { IoSettingsOutline } from "react-icons/io5"
import { MdOutlineDashboard } from "react-icons/md"
import { RiStackFill } from "react-icons/ri"
import { NavLink } from "react-router-dom"


function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <RiStackFill />
          <div className="logo-text">
            <h3>Fintech Pro</h3>
            <h4>Enterprise Finance</h4>
          </div>
        </div>
        <div className="menu-list">
          <NavLink to='/account/dashboard'>
            <MdOutlineDashboard /> 
            <span>Dashboard</span>
          </NavLink>
          <NavLink to='/account/settings'>
            <IoSettingsOutline />
            <span>Settings</span>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Sidebar