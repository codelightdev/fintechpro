import { RiCloseFill, RiLoginBoxLine, RiStackFill } from 'react-icons/ri'
import './Header.css'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoIosMenu } from 'react-icons/io'
import useAuth from '../../hooks/useAuth'
import useHeader from '../../hooks/useHeader'
function Navbar() {
    const { currentUser, logout } = useAuth()
    const { toggleSideBar, sideBarToggle } = useHeader()
  return (
    <>
        <header>
            <nav>
                <div className="logo">
                    <RiStackFill />
                    <h3>Fintech Pro</h3>
                </div>
                <div className="nav-right">
                    <div className="username">
                        <h3>{currentUser.username}</h3>
                    </div>
                    <button onClick={logout}><RiLoginBoxLine /> Logout</button>
                </div>
                <div className="nav-button">
                    <div className="navbtn sidebar-btn" onClick={toggleSideBar}>
                        {sideBarToggle ? (
                            <RiCloseFill />
                        ) : (
                            <IoIosMenu />
                        )}
                    </div>
                    <div className="navbtn profile">
                        <FaRegUserCircle />
                    </div>
                    <div className="navbtn logout" onClick={logout}>
                        <RiLoginBoxLine />
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar