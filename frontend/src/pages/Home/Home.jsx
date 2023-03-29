import React from 'react'
import styles from './Home.module.css'
import {Link, useNavigate} from 'react-router-dom'
import Card from '../../components/shared/Card/Card'
import Button from '../../components/shared/Button/Button'


const Home = () => {
  const signinlinkstyle = {
    color : '#0077ff',
    fontWeight:'bold',
    textDecoration : 'None',
    marginLeft:'10px'
  }

  const navigate = useNavigate();
  function startRegister() {
    navigate('/authenticate');
 
  }

  return (
      <div className={styles.cardWrapper}>
        <Card title="Welcome to VideoChat!" icon="logo">
        <p className={styles.text}>
            Welcome to VideoChat! Connect to your friends have chit-chat , 
            enjoy the video with snacks.
          </p>
          <div>
            <Button onClick={startRegister} text="Let's Go" />
          </div>

          <div className={styles.signinwrapper}>
            <span className={styles.invite}>Have an invite text?</span>
          </div>
        </Card>
      </div>
  )
}

export default Home