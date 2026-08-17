import { RiBankFill, RiErrorWarningLine, RiFileList3Line, RiMoneyDollarCircleLine } from 'react-icons/ri'
function DashboardStats() {
  return (
          <>
              <div className="stats">
                  <div className="stats-box">
                      <div className="icon">
                          <RiBankFill />
                      </div>
                      <div className="stats-info">
                          <h4>Current Balance</h4>
                          <h2>0$</h2>
                      </div>
                  </div>
                  <div className="stats-box">
                      <div className="icon">
                          <RiMoneyDollarCircleLine />
                      </div>
                      <div className="stats-info">
                          <h4>Total Income</h4>
                          <h2>0$</h2>
                      </div>
                  </div>
                  <div className="stats-box">
                      <div className="icon">
                          <RiErrorWarningLine />
                      </div>
                      <div className="stats-info">
                          <h4>Total Expense</h4>
                          <h2>0$</h2>
                      </div>
                  </div>
                  <div className="stats-box">
                      <div className="icon">
                          <RiFileList3Line />
                      </div>
                      <div className="stats-info">
                          <h4>Total Transaction</h4>
                          <h2>0$</h2>
                      </div>
                  </div>
              </div>
          </>
      )
}

export default DashboardStats