import { phases } from "../lib/data"

const getPhases = (edition) => {
  return phases.filter(phase => phase.edition === edition)
}

export default getPhases