"use client"

import { Context } from "@/app/provider"
import React, { useContext } from "react"

import styles from "./floors.module.css"
import Phases from "../phases/Phases"
import { areas, categories } from "@/lib/data"
import { useRouter } from "next/navigation"
import Aisle from "../aisle/Aisle"

const Floors: React.FC = () => {
  const { area, floor, setFloor, phase } = useContext<any>(Context)

  const selectedArea = areas.find((a) => a.area === area)

  const floors = selectedArea?.halls.filter(
    (hall: any) => hall.id == floor.split(".")[0]
  )[0].floors
  const pavillionFloor = floor.split(".")[1]
  const pavillion = floor.split(".")[0]

  const handleNextClick = () => {
    if (!floors) return

    const index = floors?.indexOf(pavillionFloor)
    if (index === floors.length - 1) return
    setFloor(`${pavillion}.${floors[index + 1]}`)
  }

  const handlePreviousClick = () => {
    if (!floors) return

    const index = floors?.indexOf(pavillionFloor)
    if (index === 0) return
    setFloor(`${pavillion}.${floors[index - 1]}`)
  }
  const goback = () => {}
  return (
    <div className={styles.container}>
      <div className="topHeader">
        <p className="subtext">Pazhou - Layout - Canton Fair Complex</p>
        <p className="text"> 136rd Session - Fall Season</p>
      </div>
      <Phases />
      <hr className={styles.divisor} />
      <div className={styles.floorInfo}>
        <div className={styles.area}>
          <p>Area</p>
          <span style={{ background: selectedArea?.color }}>
            {selectedArea?.area}
          </span>
        </div>
        <div className={styles.pavillionAndFloor}>
          <div className={styles.pavillion}>
            <p>Pavillion</p>
            <span>{floor.split(".")[0]}</span>
          </div>
          <div className={styles.divider}>
            <div className={styles.firstDivider}></div>
            <div className={styles.secondDivider}></div>
          </div>
          <div className={styles.floor}>
            <p>Floor</p>
            <span>.{floor.split(".")[1]}</span>
          </div>
        </div>
        <div className={styles.categoryInfo}>{categories[`Phase ${phase}`][area]}</div>
      </div>
      <p style={{ color: "grey" }}>Floors</p>
      <div className={styles.floorsContainer}>
        <button onClick={handlePreviousClick}>
          Previous <br /> Floor
        </button>
        <div className={styles.floors}>
          {floors?.map((floor: any, index: number) => {
            return (
              <div
                key={index}
                className={`${styles.floor} ${
                  pavillionFloor === floor ? styles.active : null
                }`}
              >
                {floor}
              </div>
            )
          })}
        </div>
        <button onClick={handleNextClick}>
          Next <br /> Floor
        </button>
      </div>
      <Aisle />
    </div>
  )
}

export default Floors
