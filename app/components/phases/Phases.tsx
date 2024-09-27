import React, { useContext } from "react"

import styles from "./phases.module.css"
import { Context } from "@/app/provider"
import getPhases from "@/utils/getPhases"

const Phases: React.FC = () => {
  const { phase, setPhase } = useContext<any>(Context)
  const phases = getPhases(136)

  return (
    <div className={styles.phases}>
      {phases.map((p, index) => {
        return (
          <div
            className={styles.phase}
            key={p.id}
            style={
              phase === index + 1
                ? { borderBottom: "2px solid var(--green)", fontSize: "18px" }
                : undefined
            }
            onClick={() => setPhase(index + 1)}
          >
            <div className={styles.colored}></div>
            <p className={styles.phaseTitle}>{p.name}</p>
            <div className={styles.phaseDescription}>
              <p>{p.startEnd}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Phases
