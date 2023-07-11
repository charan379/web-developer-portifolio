import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {

    const demoProjects: Array<Project> = [
        {
            name: 'Orange Evolution',
            description: 'Study platform developed in the Hackathon of the FCamara Training Program 4.',
            image: './assets/images/projects/orange-evolution.gif',
            technologies: ["HTML", "CSS", "JS", "NodeJS", "Express", "SQLite"],
            github: 'https://github.com/squad-30/OrangeEvolution-Squad30',
            demo: 'https://orangeevolution-squad30.up.railway.app'
        }
    ]
    return (
        <>
            <section id="projects">
                <div className="wrapper">
                    <header>
                        <h2>Projects</h2>
                    </header>
                    <div className="content">
                        <div className="cards">
                            {demoProjects?.map((project, index) => {
                                return <ProjectCard name={project.name} description={project.description} image={project.image} technologies={project.technologies} github={project.github} demo={project.demo} key={index} />
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;