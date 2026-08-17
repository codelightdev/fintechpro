import './Info.css'
function Info() {
  return (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" width="64" height="64">
            <circle className="circle-info" cx="26" cy="26" r="23"/>
            <circle className="dot-info" cx="26" cy="16" r="2"/>
            <line className="stem-info" x1="26" y1="23" x2="26" y2="36"/>
        </svg>

    </>
  )
}

export default Info