import React from 'react'

const Skills = () => {
    return (
        <>
            <section id="skills">
                <div className="wrapper">
                    <header>
                        <h2>Conhecimentos</h2>
                    </header>
                    <div className="content">
                        <div className="cards">
                            <div className="card">
                                <img src="./assets/images/html.png" alt="Ícone do HTML5." />

                                <h3>HTML5</h3>
                                <p>
                                    HTML5 é uma linguagem de marcação de hipertexto, que usamos para
                                    marcar os elementos da página e construí-la.
                                </p>
                            </div>
                            <div className="card">
                                <img src="./assets/images/css.png" alt="Ícone do CSS3." />

                                <h3>CSS3</h3>
                                <p>
                                    CSS3 é uma linguagem de estilo usada para descrever a
                                    apresentação dos elementos da página os estilizando.
                                </p>
                            </div>
                            <div className="card">
                                <img src="./assets/images/js.png" alt="Ícone do Javascript." />

                                <h3>JavaScript</h3>
                                <p>
                                    JavaScript é uma linguagem de programação interpretada usada no
                                    desenvolvimento web para descrever funcionalidades e
                                    comportamentos da página.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;