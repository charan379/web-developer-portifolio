import styles from './AppLogo.module.css';
import React from 'react'

const AppLogo = () => {
    return (
        <a className={`${styles.logo} close`} href="#intro"> developer-name </a>
    )
}

export default AppLogo;