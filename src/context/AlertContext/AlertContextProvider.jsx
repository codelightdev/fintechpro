import { useState, useEffect } from "react";
import { AlertContext } from "./AlertContext";
import AlertPopup from "../../components/AlertPopup/AlertPopup";

function AlertContextProvider(props) {
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [isClosing, setIsClosing] = useState(false);

  // Call this function anywhere in your app to show an alert
  const triggerAlert = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setIsClosing(false);
    setShowAlert(true);
  };

  // Starts the fade-out animation, then hides the alert
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowAlert(false);
      setIsClosing(false);
    }, 300); // 300ms matches the fade-out CSS
  };

  // Auto-close after 4 seconds whenever an alert opens
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        handleClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <AlertContext.Provider value={{ showAlert: triggerAlert }}>
      {props.children}

      {/* Renders the popup globally when showAlert is true */}
      {showAlert && (
        <AlertPopup
          type={alertType}
          message={alertMessage}
          isClosing={isClosing}
          onClose={handleClose}
        />
      )}
    </AlertContext.Provider>
  );
}

export default AlertContextProvider;