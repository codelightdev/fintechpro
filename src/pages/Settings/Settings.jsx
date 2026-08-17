import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import './Settings.css';

const CURRENCIES = [
  "USD $", "EUR €", "GBP £", "JPY ¥", "CNY ¥", "INR ₹", "NGN ₦",
  "CAD CA$", "AUD A$", "CHF CHF", "ZAR R", "GHS GH₵", "AED AED",
  "SAR SAR", "KRW ₩", "BRL R$", "MXN $", "RUB ₽", "TRY ₺",
  "THB ฿", "ILS ₪", "SEK kr", "NOK kr", "DKK kr", "PLN zł"
];

function Settings() {
  const { currentUser, formData, updateProfile, handleChange } = useContext(AuthContext);

  return (
    <div className="settings">
      <div className="heading">
        <h2>Settings</h2>
        <p>Manage your account profile and app formatting.</p>
      </div>

      <div className="profileupdateBox">
        <div className="profileBox">
          <div className="p-top">
            <h2>Profile Details</h2>
          </div>
          <form onSubmit={updateProfile}>
            <div className="form-field">
              <div className="box">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username || ''}
                  onChange={handleChange}
                  placeholder={currentUser?.username}
                />
              </div>

              <div className="box">
                <label htmlFor="currency">Currency</label>
                <select
                  name="currency"
                  value={formData.currency || currentUser?.currency || "USD $"}
                  onChange={handleChange}
                >
                  <option value="" disabled>-- Select currency --</option>
                  {CURRENCIES.map((curr) => (
                    <option key={curr} value={curr}>{curr}</option>
                  ))}
                </select>
              </div>

              <div className="box">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password || ""}
                  onChange={handleChange}
                  placeholder="Leave blank to keep current password"
                />
              </div>
            </div>

            <div className="p-btn">
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Settings;