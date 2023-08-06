import React from "react";
import SkillCard from "./SkillCard";
import styles from "./Skills.module.css";

const Skills = (props: { skills: Skill[] }) => {
  const demoSkills: Skill[] = props.skills;
  return (
    <>
      <section id="skills" className={styles.skills}>
        <div className="wrapper">
          <header>
            <h2>Skills / Knowledge</h2>
          </header>
          <div className="content">
            <div className={styles.cards}>
              {demoSkills.map((skill, index) => {
                return (
                  <SkillCard
                    image={skill.image}
                    name={skill.name}
                    description={skill.description}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
