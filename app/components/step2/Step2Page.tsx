"use client"

import { Context } from "@/app/provider"
import React, { useContext } from "react"

import styles from "./step2.module.css"
import Phases from "../phases/Phases"
import BackButton from "../backButton/BackButton"

const Step2Page: React.FC = () => {
  const { phase, setPhase } = useContext<any>(Context)
  

  return (
    <div className={styles.container}>
      <BackButton />
      <div className="topHeader">
        <p className="subtext">Pazhou - Layout - Canton Fair Complex</p>
        <p className="text"> 136rd Session - Fall Season</p>
      </div>
      <Phases />
      <hr className={styles.divisor} />
      <div className="step">Step 2</div>
      <p className={styles.welcome}>
        Welcome to <span className={styles.phaseNumber}>Phase {phase}</span>.{" "}
        <br /> Choose the Pavillion Bellow.
      </p>
    </div>
  )
}

export default Step2Page
