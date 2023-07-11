import React from 'react'
import SkillCard from './SkillCard'


const Skills = () => {

    const demoSkills: Skill[] = [
        {
            name: "HTML5",
            description: "HTML5 is a hypertext markup language, which we use totag the elements of the page and build it.",
            image: "./assets/images/html.png",
        },
        {
            name: "CSS3",
            description: "CSS3 is a style language used to describe the presentation of page elements by styling them.",
            image: "./assets/images/css.png",
        },
        {
            name: "JavaScript",
            description: "JavaScript is an interpreted programming language used in web development to describe features and page behaviors.",
            image: "./assets/images/js.png",
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
                            {demoSkills.map((skill, index) => {
                                return (<SkillCard image={skill.image} name={skill.name} description={skill.description} key={index} />)
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