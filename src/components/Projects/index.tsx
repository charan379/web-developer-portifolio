import React from 'react'
import ProjectCard from './ProjectCard'
import MoreProjectsCard from './MoreProjectsCard'
import styles from "./Projects.module.css";

const Projects = () => {

    const demoProjects: Array<Project> = [
        {
            name: 'Orange Evolution',
            description: 'Study platform developed in the Hackathon of the FCamara Training Program 4.',
            image: './assets/images/projects/orange-evolution.gif',
            technologies: ["HTML", "CSS", "JS", "NodeJS", "Express", "SQLite"],
            github: 'https://github.com/squad-30/OrangeEvolution-Squad30',
            demo: 'https://orangeevolution-squad30.up.railway.app'
        },
        {
            name: '21 day code challenge',
            description: 'Challenge promoted by Rocketseat with 21 different projects.',
            image: './assets/images/projects/desafio-de-codigo.jpg',
            technologies: ["HTML", "CSS", "JS", "NodeJS", "Express", "SQLite"],
            github: 'https://github.com/squad-30/OrangeEvolution-Squad30',
            demo: 'https://orangeevolution-squad30.up.railway.app'
        },
        {
            name: 'Nutritionist Roberto - Links',
            description: 'Link pages developed for client.',
            image: './assets/images/projects/roberto-links.gif',
            technologies: ["HTML", "CSS", "JS"],
            github: 'https://github.com/squad-30/OrangeEvolution-Squad30',
            demo: 'https://orangeevolution-squad30.up.railway.app'
        },
        {
            name: 'Nutritionist Roberto - Consultation page',
            description: 'Contact page for queries developed for customers.',
            image: './assets/images/projects/roberto-consulta.gif',
            technologies: ["HTML", "CSS", "JS", "NodeJS"],
            github: 'https://github.com/squad-30/OrangeEvolution-Squad30',
            demo: 'https://orangeevolution-squad30.up.railway.app'
        },
        {
            name: 'Doctor Care',
            description: 'Website project developed at Rocketseats Next Level Week Return',
            image: './assets/images/projects/doctorcare.gif',
            technologies: ["HTML", "CSS", "JS"],
            github: 'https://github.com/squad-30/OrangeEvolution-Squad30',
            demo: 'https://orangeevolution-squad30.up.railway.app'
        },
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