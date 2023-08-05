import React from 'react'
import ProjectCard from './ProjectCard'
import MoreProjectsCard from './MoreProjectsCard'
import styles from "./Projects.module.css";

const Projects = () => {

    const demoProjects: Array<Project> = [];
    return (
        <>
            <section id="projects" className={styles.projects}>
                <div className="wrapper">
                    <header>
                        <h2>Projects</h2>
                    </header>
                    <div className="content">
                        <div className={styles.cards}>
                            {demoProjects?.map((project, index) => {
                                return <ProjectCard name={project.name} description={project.description} image={project.image} technologies={project.technologies} github={project.github} demo={project.demo} key={index} />
                            })}
                            <MoreProjectsCard />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;