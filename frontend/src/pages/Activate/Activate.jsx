import React, { useState } from 'react'
import Stepname from '../Steps/StepName/StepName'
import StepAvatar from '../Steps/StepAvatar/StepAvatar'

const steps = {
  1:Stepname,
  2:StepAvatar
}




const Activate = () => {
  const [step,setStep] = useState(1)
  const Step = steps[step];

  function onNext() {
    setStep(step + 1);
  }

  return (
    <div className='cardWrapper'>
      <Step onNext = {onNext}></Step>
    </div>
  )
}

export default Activate