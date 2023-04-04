import React, { useState } from 'react'
import Card from '../../../components/shared/Card/Card'
import Button from '../../../components/shared/Button/Button'
import TextInput from '../../../components/shared/TextInput/TextInput'
import {useDispatch,useSelector} from 'react-redux'
import { setName } from '../../../store/activateSlice'
import styles from './StepName.module.css'

const StepName = ({onNext}) => {
  const {name} = useSelector(state => state.activate);
  const [fullname,setFullName] = useState(name);
  const dispatch = useDispatch();

  function nextStep() {
    if(!fullname){
      return;
    }

    dispatch(setName(fullname));
    onNext();

  }
  return (
    <>
      <Card title="What's your Full name ?" icon="goggle-emoji">
        <TextInput 
          value={fullname} onChange={(e) => setFullName(e.target.value)}/>
        <p className={styles.paragraph}>
          People use real names here !        
        </p>
        <div >
          <Button onClick={nextStep} text="Next" />
        </div>
      </Card>
    </> 
  )
}

export default StepName