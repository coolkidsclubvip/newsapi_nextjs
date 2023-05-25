import React from 'react'
import UpperHeader from './UpperHeader'
import LowerHeader from './LowerHeader'
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.container}>
     <div className='container-fluid'>
     <UpperHeader/>
     <LowerHeader/>
    </div>
    </div>
  )
}

export default Header