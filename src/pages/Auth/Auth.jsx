import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { AuthContext } from "../../context/AuthContext/AuthContext";

function Auth() {
  const {
    currentUser,
    currentAuthState,
    formData,
    handleChange,
    handleSubmit,
    changeAuthState,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (currentUser && currentUser.isLoggedIn) {
      navigate("/account", { replace: true });
    }
  }, [currentUser, navigate]);

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <div className="auth-top">
          {currentAuthState === "Login" ? (
            <>
              <h2>Welcome Back</h2>
              <p>Login to fintech pro</p>
            </>
          ) : (
            <>
              <h2>Create Account</h2>
              <p>Join Fintech Pro</p>
            </>
          )}
        </div>

        <div className="form-box">
          <div className="form-field">
            <div className="box">
              <label htmlFor="username">
                {currentAuthState === "Login" ? "Username" : "Choose a Username"}
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="box">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-btn">
            <button
              type="submit"
              className={currentAuthState === "Login" ? "login" : "register"}
            >
              {currentAuthState === "Login" ? "Login" : "Register"}
            </button>
          </div>
        </div>

        <div className="oth">
          {currentAuthState === "Login" ? (
            <p>
              Don't have an account?{" "}
              <Link to="/" onClick={changeAuthState} className="login">
                Register here
              </Link>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <Link to="/" onClick={changeAuthState} className="register">
                Login here
              </Link>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Auth;