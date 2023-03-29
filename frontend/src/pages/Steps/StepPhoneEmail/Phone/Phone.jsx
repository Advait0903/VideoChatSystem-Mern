import React, { useState } from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import styles from '../StepPhoneEmail.module.css'

const Phone = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  return (
    <Card title="Enter Your Phone Number" icon="phone">

          <TextInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
  
          <div>
            <div className={styles.actionButtonwrap}>
              <Button text="Next" />
            </div>
            <p className={styles.bottomParagraph}>
              By entering your number, you're agreeing to our Terms of Service and Privacy Policy. Thanks!
            </p>
            
          </div>

        </Card>
  )
}

export default Phone