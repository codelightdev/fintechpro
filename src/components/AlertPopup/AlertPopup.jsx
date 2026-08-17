import Error from "../../utility/AlertIconType/Error/Error";
import Info from "../../utility/AlertIconType/Info/Info";
import Success from "../../utility/AlertIconType/Success/Success";
import Warning from "../../utility/AlertIconType/Warning/Warning";
import "./AlertPopup.css";

function AlertPopup(props) {
  const { type, message, isClosing, onClose } = props;

  // Capitalize the first letter for the title (e.g., 'error' -> 'Error')
//   const title = type ? type.charAt(0).toUpperCase() + type.slice(1) : "Notice";

  return (
    <div className="alertpopup-container">
      <div className={`alertpopup ${isClosing ? "fade-out" : "fade-in"}`}>
        <div className="tooltip-arrow"></div>

        <div className="icon">
            {type === "Success" ? <Success /> : type === "Error" ? <Error /> : type === "Warning" ? <Warning /> : <Info />}
        </div>

        <div className="alert-info">
          <h2>{type}</h2>
          <p>{message}</p>
        </div>

        <button className="close-btn" onClick={onClose} aria-label="Close">
          &times;
        </button>
      </div>
    </div>
  );
}

export default AlertPopup;