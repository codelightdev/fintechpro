import './Settings.css'
function Settings() {
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
                <form action="">
                    <div className="form-field">
                        <div className="box">
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username' placeholder="" />
                        </div>
                        <div className="box">
                            <label htmlFor="currency">Currency</label>
                            <select name="currency" id="">
                                <option value="USD $" selected>USD $</option>
                                <option value="EUR €">EUR €</option>
                                <option value="GBP £">GBP £</option>
                                <option value="JPY ¥">JPY ¥</option>
                                <option value="CNY ¥">CNY ¥</option>
                                <option value="INR ₹">INR ₹</option>
                                <option value="NGN ₦">NGN ₦</option>
                                <option value="CAD CA$">CAD CA$</option>
                                <option value="AUD A$">AUD A$</option>
                                <option value="CHF CHF">CHF CHF</option>
                                <option value="ZAR R">ZAR R</option>
                                <option value="GHS GH₵">GHS GH₵</option>
                                <option value="AED AED">AED AED</option>
                                <option value="SAR SAR">SAR SAR</option>
                                <option value="KRW ₩">KRW ₩</option>
                                <option value="BRL R$">BRL R$</option>
                                <option value="MXN $">MXN $</option>
                                <option value="RUB ₽">RUB ₽</option>
                                <option value="TRY ₺">TRY ₺</option>
                                <option value="THB ฿">THB ฿</option>
                                <option value="ILS ₪">ILS ₪</option>
                                <option value="SEK kr">SEK kr</option>
                                <option value="NOK kr">NOK kr</option>
                                <option value="DKK kr">DKK kr</option>
                                <option value="PLN zł">PLN zł</option>
                                <option value="CZK Kč">CZK Kč</option>
                                <option value="HUF Ft">HUF Ft</option>
                                <option value="NZD NZ$">NZD NZ$</option>
                                <option value="SGD S$">SGD S$</option>
                                <option value="HKD HK$">HKD HK$</option>
                                <option value="MYR RM">MYR RM</option>
                                <option value="IDR Rp">IDR Rp</option>
                                <option value="PHP ₱">PHP ₱</option>
                                <option value="VND ₫">VND ₫</option>
                                <option value="PKR ₨">PKR ₨</option>
                                <option value="BDT ৳">BDT ৳</option>
                                <option value="EGP E£">EGP E£</option>
                                <option value="KES KSh">KES KSh</option>
                                <option value="UGX USh">UGX USh</option>
                                <option value="TZS TSh">TZS TSh</option>
                                <option value="RWF RF">RWF RF</option>
                                <option value="XOF CFA">XOF CFA</option>
                                <option value="XAF FCFA">XAF FCFA</option>
                                <option value="MAD MAD">MAD MAD</option>
                                <option value="QAR QR">QAR QR</option>
                                <option value="KWD KD">KWD KD</option>
                                <option value="OMR RO">OMR RO</option>
                                <option value="BHD BD">BHD BD</option>
                                <option value="CLP $">CLP $</option>
                                <option value="COP $">COP $</option>
                                <option value="PEN S/">PEN S/</option>
                                <option value="ARS $">ARS $</option>
                            </select>
                        </div>
                        </div>
                    <div className="p-btn">
                        <button>Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Settings