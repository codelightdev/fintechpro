import './Dashboard.css'
import DashboardStats from '../../components/DashboardStats/DashboardStats'
function Dashboard() {
  return (
    <>
        <div className="dashboard">
            <div className="heading">
                <h2>Financial Overview</h2>
                <p>Real-time tracking application</p>
            </div>
            <DashboardStats />
        </div>
    </>
  )
}




export default Dashboard