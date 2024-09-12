"use client"

import { createContext, use, useState } from "react"

interface ContextType {
  phase: number;
  setPhase: (phase: number) => void;
  area: string;
  setArea: (area: string) => void;
  floor: string;
  setFloor: (floor: string) => void;
}

export const Context = createContext<ContextType | null>(null)

export default function Provider({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<number>(1)
  const [area, setArea] = useState<string>("A")
  const [floor, setFloor] = useState<string>("1.1")

  return (
    <Context.Provider
      value={{ phase, setPhase, area, setArea, floor, setFloor }}
    >
      {children}
    </Context.Provider>
  )
}
