import React, { useContext, useState } from "react"
import styles from "./aisle.module.css"
import { ailes, booths } from "@/lib/data"
import { Context } from "@/app/provider"

const Aisle = () => {
  const [activeAisle, setActiveAisle] = useState(ailes[0])

  const {phase, area, floor } = useContext<any>(Context)

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
              return (
                <div key={`${phase}-${area}-${pavillion}-${pavillionFloor}-${activeAisle}-${index+1}`} className={styles.booth} onClick={() => console.log(`${phase}-${area}-${pavillion}-${pavillionFloor}-${activeAisle}-${index+1}`)}>
                  {booth}
                </div>
              )
            })}
          </div>
        </div>
        <button onClick={handleNextClick}>
          Next <br /> Aisle
        </button>
      </div>
    </div>
  )
}

export default Aisle
