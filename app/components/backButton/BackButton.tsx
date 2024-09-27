import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"
import React from "react"

const BackButton: React.FC = () => {
  const router = useRouter()

  const handleBackClick = () => {
    router.back()
  }

  return (
    <button onClick={handleBackClick} className="backButton">
      <FontAwesomeIcon icon={faArrowLeft} /> Back
    </button>
  )
}

export default BackButton
