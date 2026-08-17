import './Error.css'
function Error() {
  return (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" width="64" height="64">
            <g className="error-wrap">
                <circle className="circle-error" cx="26" cy="26" r="23"/>
                <path className="cross-line" d="M18 18l16 16"/>
                <path className="cross-line" d="M34 18l-16 16"/>
            </g>
        </svg>

    </>
  )
}

export default Error