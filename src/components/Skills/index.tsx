import React from 'react'
import SkillCard from './SkillCard'


const Skills = () => {

    const skills: Skill[] = [
        {
            name: "HTML5",
            description: "HTML5 is a hypertext markup language, which we use totag the elements of the page and build it.",
            src: "./assets/images/html.png",
            alt: "HTML5 Icon."
        },
        {
            name: "CSS3",
            description: "CSS3 is a style language used to describe the presentation of page elements by styling them.",
            src: "./assets/images/css.png",
            alt: "CSS3 Icon."
        },
        {
            name: "JavaScript",
            description: "JavaScript is an interpreted programming language used in web development to describe features and page behaviors.",
            src: "./assets/images/js.png",
            alt: "Javascript Icon."
        },
    ]
    return (
        <>
            <section id="skills">
                <div className="wrapper">
                    <header>
                        <h2>Skills / Knowledge</h2>
                    </header>
                    <div className="content">
                        <div className="cards">
                            {skills.map((skill, index) => {
                                return (<SkillCard src={skill.src} alt={skill.alt} name={skill.name} description={skill.description} key={index} />)
                            })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;