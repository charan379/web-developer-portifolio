import { EyeSvgIcon } from '@/assets/icons/Eye'
import { GithubSvgIcon } from '@/assets/icons/Github'
import React from 'react'
import styles from "./ProjectCard.module.css";

const ProjectCard = (props: Project) => {
    return (
        <div className={styles.card}>
            <h3>{props.name}</h3>
            <div className={styles.imgWrapper}>
                <img src={props.image} alt={`Image of ${props.name}`} />
                <div className={styles.buttons}>
                    <a href={props.github} target="_blank" title="Github repository">
                        <GithubSvgIcon />
                    </a>
                    <a href={props.demo} target="_blank" title="View Project Demo">
                        <EyeSvgIcon />
                    </a>
                </div>
            </div>
            <p>{props.description}</p>
            <p>{props.technologies?.map((technology) => technology).join(" - ")}</p>
        </div>
    )
}

export default ProjectCard