import { useContext } from "react"
import { AlertContext } from "../context/AlertContext/AlertContext"


function useAlert() {
  return useContext(AlertContext)
}

export default useAlert