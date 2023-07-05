import React from 'react'

const About  = () => {
    return (
        <>
            <section id="about">
                <div className="wrapper">
                    <div className="col-a">
                        <header>
                            <h2>About me</h2>
                        </header>
                        <div className="content">
                            <p>
                                Me chamo Lucyan Ovídio, graduando no curso de Sistemas de
                                Informação pela UFRRJ e desenvolvedor web Front-end. Desenvolvo páginas e sistemas web responsívos e de layout atrativo. Tenho uma trajetória de cerca de 4 anos
                                trabalhando com suporte técnico e manutenção de computadores, o
                                que me tornou um profissional dedicado e organizado. Hoje na área de desenvolvimento vivo o aprendizado continuo, focando em tecnologias JavaScript. Busco oportunidades no mercado como dev e, em um futuro próximo, viso me tornar um desenvolvedor Full Stack.
                            </p>
                        </div>
                    </div>

                    <div className="col-b">
                        <img
                            src="./assets/images/imagem-de-lucyan-vestindo-camisa-social-branca-e-sorrindo-com-plantas-no-fundo.png"
                            alt="Imagem de Lucyan vestindo camisa social branca e sorrindo com plantas no fundo"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About 