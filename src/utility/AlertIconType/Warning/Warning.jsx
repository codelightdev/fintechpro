import './Warning.css'

function Warning() {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" width="64" height="64">
        <path className="tri" d="M26 6 L47 43 L5 43 Z"/>
        <line className="line-warn" x1="26" y1="19" x2="26" y2="31"/>
        <circle className="dot-warn" cx="26" cy="38" r="2"/>
    </svg>

    </>
  )
}

export default Warning