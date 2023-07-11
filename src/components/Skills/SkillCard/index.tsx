import React from 'react'


const SkillCard = (props: Skill) => {
    return (
        <div className="card">
            <img src={props.src} alt={props.alt} />

            <h3>{props.name}</h3>
            <p>
                {props.description}
            </p>
        </div>
    )
}

export default SkillCard