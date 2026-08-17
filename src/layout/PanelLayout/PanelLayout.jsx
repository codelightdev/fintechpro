import { Outlet } from "react-router-dom"
import './PanelLayout.css'
import Header from "../../components/Header/Header"

function PanelLayout() {
  return (
    <>
        <Header />
        <section id="panelSection">
            <Outlet />
        </section>
    </>
  )
}

export default PanelLayout