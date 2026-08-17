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

  // Initialize formData directly using initial currentUser state (no useEffect needed)
  const [formData, setFormData] = useState(() => ({
    username: currentUser?.username || "",
    password: "",
    currency: currentUser?.currency || "USD $",
    modeToggle: currentUser?.modeToggle || false,
  }));

  const { showAlert } = useAlert();

  const currencySymbol = (currentUser?.currency || "USD $").split(" ")[1] || "$";;

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
        currency: "USD $",
        modeToggle: false,
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

  const updateProfile = (e) => {
        e.preventDefault();
        if (!currentUser) return;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Fallback to currentUser values if the user leaves an input blank
        const newUsername = formData.username.trim() || currentUser.username;
        const newCurrency = formData.currency.trim() || currentUser.currency || "USD $";
        const newPassword = formData.password.trim() || currentUser.password;

        // 1. Password check: only enforce length IF they typed a new password
        if (formData.password.trim() !== "" && formData.password.trim().length < 8) {
            showAlert("Error", "New password must be at least 8 characters");
            return;
        }

        // 2. Prevent duplicate username across other accounts
        const isUsernameTaken = users.some(
            (user) => user.id !== currentUser.id && user.username.toLowerCase() === newUsername.toLowerCase()
        );
        if (isUsernameTaken) {
            showAlert("Error", "Username is already taken by another account");
            return;
        }

        // 3. Check if anything actually changed
        if (
            newUsername === currentUser.username &&
            newCurrency === currentUser.currency &&
            newPassword === currentUser.password
        ) {
            showAlert("Warning", "No changes were made");
            return;
        }

        // 4. Update the current user while preserving all other properties and users
        const updatedUser = {
            ...currentUser,
            username: newUsername,
            currency: newCurrency,
            password: newPassword,
        };

        const updatedUsers = users.map((user) =>
            user.id === currentUser.id ? updatedUser : user
        );

        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setCurrentUser(updatedUser);
        
        // Clear the password field for security after save
        setFormData((prev) => ({ ...prev, password: "" }));
        showAlert("Success", "Profile updated successfully!");
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
        currencySymbol,
        handleChange,
        handleSubmit,
        changeAuthState,
        logout,
        updateProfile,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;