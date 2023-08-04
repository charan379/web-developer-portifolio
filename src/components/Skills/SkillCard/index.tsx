import React from 'react'
import styles from './SkillCard.module.css'

const SkillCard = (props: Skill) => {
    return (
        <div className={styles.card}>
            <img src={props.image} alt={`${props.name} Icon`} />

            <h3>{props.name}</h3>

            <p>
                {props.description}
            </p>
        </div>
    )
}

export default SkillCard