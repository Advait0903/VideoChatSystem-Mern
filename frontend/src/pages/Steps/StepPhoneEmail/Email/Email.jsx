import React, {useState} from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import styles from '../StepPhoneEmail.module.css'

const Email = () => {''
  const [email, setEmail] = useState('');
  return (
    <Card title="Enter your email id" icon="email-emoji">

          <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
        
          <div>
            <div className={styles.actionButtonwrap}>
              <Button text="Next" />
            </div>
            <p className={styles.bottomParagraph}>
              By entering your email id, you're agreeing to our Terms of Service and Privacy Policy. Thanks!
            </p>
          </div>

        </Card>
  )
}

export default Email