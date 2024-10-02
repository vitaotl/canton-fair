import React, { useContext, useEffect, useState } from "react"
import styles from "./aisle.module.css"
import { ailes, booths } from "@/lib/data"
import { Context } from "@/app/provider"
import DescriptionModal from "../modal/Modal"
import getStandDescriptions from "@/utils/getStandDescriptions"
import SignUpModal from "../SignUpModal/SignUpModal"

const Aisle = () => {
  const { phase, area, floor, setDescriptions, descriptions, userInfo } =
    useContext<any>(Context)
  const loggedUser = JSON.parse(
    localStorage.getItem("cantonFairUser") || "null"
  )
  useEffect(() => {
    if (!loggedUser) return
    const getDescriptions = async () => {
      // if (!userInfo) {
      //   const descriptions = JSON.parse(
      //     localStorage.getItem("descriptions") || "[]"
      //   )
      //   setDescriptions(descriptions)
      //   return
      // }
      try {
        const response = await getStandDescriptions(loggedUser.userId, area, phase)
        setDescriptions(response)
        localStorage.setItem("descriptions", JSON.stringify(response))
        console.log("desc: ", response)
      } catch (error: any) {
        console.error("Error:", error.message)
      }
    }

    if (area && phase) {
      getDescriptions()
    }
  }, [area, phase])

  // console.log('phase ', phase)
  // console.log('area ', area)

  const [activeAisle, setActiveAisle] = useState(ailes[0])
  const [selectedBooth, setSelectedBooth] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [userModalIsOpen, setUserModalIsOpen] = useState(false)
  const [identifier, setIdentifier] = useState("")
  const [boothNumber, setBoothNumber] = useState(0)

  const pavillionFloor = floor.split(".")[1]
  const pavillion = floor.split(".")[0]

  const handlePrevClick = () => {
    const index = ailes.indexOf(activeAisle)
    if (index === 0) return
    setActiveAisle(ailes[index - 1])
  }
  const handleNextClick = () => {
    const index = ailes.indexOf(activeAisle)
    if (index === ailes.length - 1) return
    setActiveAisle(ailes[index + 1])
  }

  const handleBoothClick = (
    booth: any,
    identifier: string,
    boothNumber: any
  ) => {
    const userLogged = checkUserInfo()
    if (userLogged) return

    setIdentifier(identifier)
    setSelectedBooth(booth)
    setBoothNumber(boothNumber)
    setModalIsOpen(true)
  }

  const handleSaveDescription = (description: any) => {
    setSelectedBooth((prevBooth: any) => ({ ...prevBooth, description }))
  }

  const isKeyInDescriptions = (key: any, descriptions: any) => {
    return descriptions.filter(
      (description: any) => description.identifier === key
    )
  }

  const checkUserInfo = () => {
    if (!loggedUser) {
      setUserModalIsOpen(true)
      return true
    }
  }

  useEffect(() => {
    checkUserInfo()
  }, [])

  return (
    <div className={styles.aisleContainer}>
      <p>Aisle</p>
      <div className={styles.aisle}>
        <button onClick={handlePrevClick}>
          Previous <br /> Aisle
        </button>
        <div className={styles.boothsContainer}>
          <div className={styles.boothName}>{activeAisle}</div>
          <div className={styles.booths}>
            {booths.map((booth, index) => {
              const key = `${phase}-${area}-${pavillion}-${pavillionFloor}-${activeAisle}-${
                index + 1
              }`
              const isKeyPresent = isKeyInDescriptions(key, descriptions)
              return (
                <div
                  key={`${phase}-${area}-${pavillion}-${pavillionFloor}-${activeAisle}-${
                    index + 1
                  }`}
                  className={styles.booth}
                  style={
                    isKeyPresent.length > 0
                      ? { backgroundColor: "#32cd32" }
                      : {}
                  }
                  onClick={() =>
                    handleBoothClick(
                      isKeyPresent[0],
                      `${phase}-${area}-${pavillion}-${pavillionFloor}-${activeAisle}-${
                        index + 1
                      }`,
                      index + 1
                    )
                  }
                >
                  {booth}
                </div>
              )
            })}
          </div>
          <DescriptionModal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            onSave={handleSaveDescription}
            booth={selectedBooth}
            identifier={identifier}
            boothNumber={boothNumber}
          />
          <SignUpModal
            isOpen={userModalIsOpen}
            onRequestClose={() => setUserModalIsOpen(false)}
          />
        </div>
        <button onClick={handleNextClick}>
          Next <br /> Aisle
        </button>
      </div>
    </div>
  )
}

export default Aisle
