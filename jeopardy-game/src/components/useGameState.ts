import { ReactElement, useState } from "react";

//--> custom hook to capture stateful game data
export default function useGameState(steps: ReactElement[]) {

  //--> useState to remember which "step" or round we are on
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  //--> fxn to go forward one round
  function next() {
    setCurrentStepIndex(i => {
      if (i >= steps.length - 1) return i
      return i + 1
    })
  }

    //--> fxn to go back one round
  function back() {
    setCurrentStepIndex(i => {
      if (i <= 0) return i
      return i - 1
    })
  }

    //--> fxn
  function goTo(index: number) {
    setCurrentStepIndex(index)
  }

    //--> return state info
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  }
}

//?ref
//https://www.youtube.com/watch?v=uDCBSnWkuH0&list=PLkYD_cLvRIQM5MuMrs9Jg55qkcVcTXUFY&index=6

//code from OG
