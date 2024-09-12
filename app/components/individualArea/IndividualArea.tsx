"use client"
import React, { useContext } from "react"

import styles from "./area.module.css"
import { Context } from "@/app/provider"
import Link from "next/link"

const IndividualArea = ({ area }: any) => {
  const { setArea, setFloor } = useContext<any>(Context)

  return (
    <Link
      key={area.area}
      className={styles.area}
      title={`Area ${area.area}`}
      href="floors"
    >
      <h3 className={styles.title} style={{ backgroundColor: area.color }}>
        {area.area} Area
      </h3>
      <p className={styles.titleFloors}>Floors</p>
      <div className={styles.floors}>
        {area.halls.map((hall: any, index: number) => {
          return (
            <div key={index} className={styles.pavillion}>
              <p
                className={styles.pavillionNumber}
                style={{ backgroundColor: area.color }}
              >
                {hall.id}
              </p>
              <div className={styles.pavillionFloor}>
                {hall.floors.map((floor: any, index: number) => {
                  return (
                    <div
                      onClick={() => setFloor(`${hall.id}.${floor}`)}
                      key={`${hall.id}.${floor}`}
                      className={styles.pavillionFloorNumber}
                    >
                      {floor}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </Link>
  )
}

export default IndividualArea
