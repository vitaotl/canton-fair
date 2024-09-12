"use client"

import Link from "next/link"
import React, { useContext } from "react"

import styles from "./homepage.module.css"
import getPhases from "@/utils/getPhases"
import { Context } from "@/app/provider"
import { areas } from "@/lib/data"

const HomePage: React.FC = () => {
  const phases = getPhases(136)
  console.log(areas) 

  const { phase, setPhase } = useContext<any>(Context)

  return (
    <div className="container">
      <div className="topHeader">
        <p className="subtext">Pazhou - Layout - Canton Fair Complex</p>
        <p className="text"> 136rd Session - Fall Season</p>
      </div>
      <div className="step">Step 1</div>
      <div className={styles.welcome}>
        Welcome to the <br /> <span className={styles.edition}>136 rd</span> of
        Canton Fair. <br /> Choose the Phase Below
      </div>
      <div className={styles.phases}>
        {phases.map((phase, index) => {
          return (
            <Link
              onClick={() => setPhase(index + 1)}
              href="step2"
              className={styles.phase}
              key={phase.id}
            >
              <p className={styles.phaseTitle}>{phase.name}</p>
              <div className={styles.phaseDescription}>
                <div className={styles.colored}></div>
                <p>{phase.startEnd}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage
