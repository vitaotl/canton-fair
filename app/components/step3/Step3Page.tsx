"use client"

import { Context } from "@/app/provider"
import React, { useContext } from "react"

import styles from "./step3.module.css"
import Phases from "../phases/Phases"
import { areas } from "@/lib/data"
import IndividualArea from "../individualArea/IndividualArea"
import BackButton from "../backButton/BackButton"

const Step3Page: React.FC = () => {
  const { area, floor } = useContext<any>(Context)
  const selectedArea = areas.find((a) => a.area === area)
  console.log(selectedArea)
  return (
    <div className={styles.container}>
      <BackButton />
      <div className="topHeader">
        <p className="subtext">Pazhou - Layout - Canton Fair Complex</p>
        <p className="text"> 136rd Session - Fall Season</p>
      </div>
      <Phases />
      <hr className={styles.divisor} />
      <div className="step">Step 3</div>
      <p className={styles.welcome}>
        Welcome to <span className={styles.phaseNumber}>{area} Area</span>.{" "}
        <br /> Choose the Pavillion and Floor Bellow.
      </p>
      <IndividualArea area={selectedArea}/>
    </div>
  )
}

export default Step3Page
