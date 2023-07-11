import { EyeSvgIcon } from '@/assets/icons/Eye'
import { GithubSvgIcon } from '@/assets/icons/Github'
import React from 'react'

const ProjectCard = (props: Project) => {
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <div className="img-wrapper">
                <img src={props.image} alt={`Image of ${props.name}`} />
                <div className="buttons">
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