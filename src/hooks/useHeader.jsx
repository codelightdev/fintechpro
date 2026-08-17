import { useContext } from "react"
import { HeaderContext } from "../context/HeaderContext/HeaderContext"


function useHeader() {
  return useContext(HeaderContext)
}

export default useHeader