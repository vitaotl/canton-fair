import React from "react"
import Step2Page from "../components/step2/Step2Page"
import styles from "./step2.module.css"

import { areas } from "../../lib/data"
import Area from "../components/area/Area"

export default function Step2() {
  return (
    <div className={styles.step2container}>
      
      <Step2Page />
      <div className={styles.areas}>
        {areas.map((area) => (
          <Area key={area.area} area={area} />
        ))}
      </div>
    </div>
  )
}
