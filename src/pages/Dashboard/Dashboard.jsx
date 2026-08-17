import './Dashboard.css'
import DashboardStats from '../../components/DashboardStats/DashboardStats'
import useAuth from '../../hooks/useAuth'
function Dashboard() {
    const { currencySymbol } = useAuth();
  return (
    <>
        <div className="dashboard">
            <div className="heading">
                <h2>Financial Overview</h2>
                <p>Real-time tracking application</p>
            </div>
            <DashboardStats currencySymbol={currencySymbol}/>
        </div>
    </>
  )
}




export default Dashboard