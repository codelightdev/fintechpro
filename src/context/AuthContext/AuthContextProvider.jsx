import { useState } from "react";
import { AuthContext } from "./AuthContext";
import useAlert from "../../hooks/useAlert";
import { useNavigate } from "react-router-dom";

function AuthContextProvider(props) {
  const [currentAuthState, setCurrentAuthState] = useState("Login");
  
  const [currentUser, setCurrentUser] = useState(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users.find((user) => user.isLoggedIn === true) || null;
  });

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { showAlert } = useAlert();

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const changeAuthState = (e) => {
    e.preventDefault();
    if (currentAuthState === "Login") {
      setCurrentAuthState("Register");
    } else {
      setCurrentAuthState("Login");
    }
    setFormData({ username: "", password: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const username = formData.username.trim();
    const password = formData.password.trim();

    if (username === "") {
      showAlert("Error", "Please enter a username");
      return;
    }

    if (password === "") {
      showAlert("Error", "Please enter a password");
      return;
    }

    if (currentAuthState === "Register") {
      if (password.length < 8) {
        showAlert("Error", "Password must be at least 8 characters");
        return;
      }

      const existingUser = users.find((user) => user.username === username);
      if (existingUser) {
        showAlert("Error", "Username already exists in our database");
        return;
      }

      const newUser = {
        id: crypto.randomUUID(),
        username: username,
        password: password,
        isLoggedIn: false,
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      showAlert("Success", "Account created successfully! Please login.");
      setCurrentAuthState("Login");
      setFormData({ username: "", password: "" });
    } else {
      const validUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (!validUser) {
        showAlert("Error", "Incorrect username or password");
        return;
      }

      const updateUsers = users.map((user) => {
        if (user.username === validUser.username) {
          return { ...user, isLoggedIn: true };
        }
        return { ...user, isLoggedIn: false };
      });

      localStorage.setItem("users", JSON.stringify(updateUsers));
      setCurrentUser({ ...validUser, isLoggedIn: true });
      showAlert("Success", `Welcome back, ${validUser.username}!`);
      setFormData({ username: "", password: "" });
      navigate('/account/dashboard');
    }
  };

  const logout = () => {
    // 1. Update localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updateUsers = users.map((user) => ({
        ...user,
        isLoggedIn: false,
    }));
    localStorage.setItem("users", JSON.stringify(updateUsers));

    // 2. Clear React state so UI immediately reacts
    setCurrentUser(null);

    // 3. Notify and redirect
    showAlert("Success", "Logout Successful");
    navigate("/");
    };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        currentAuthState,
        formData,
        handleChange,
        handleSubmit,
        changeAuthState,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;