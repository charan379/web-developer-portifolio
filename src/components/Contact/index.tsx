import EmailSvgLogo from '@/assets/logos/Email';
import WhatsappSvgLogo from '@/assets/logos/Whatsapp';
import React from 'react'

const Contact = () => {
    return (
        <>
            <section id="contact">
                <div className="wrapper">
                    <div className="col-a">
                        <header>
                            <h2>Fale comigo!</h2>
                        </header>
                        <div className="content">
                            <ul>
                                <li>
                                    <a href="mailto: lucyanovidio@gmail.com" title="Enviar e-mail">
                                        <EmailSvgLogo />
                                        lucyanovidio@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+5521971602369" title="Fazer ligação"
                                    ><img
                                            src="./assets/icons/celular.svg"
                                            alt="Ícone de celular."
                                            id="cel"
                                        />
                                        +55 21 97160-2369</a>
                                </li>
                            </ul>

                            <a
                                className="button"
                                title="Me chama no zap!"
                                href="https://api.whatsapp.com/send?phone=5521971602369&text=Fala,%20Lucyan!%20Vim%20do%20teu%20portifólio,%20quero%20trabalhar%20contigo!"
                                target="_blank"
                            >
                                <WhatsappSvgLogo />
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="col-b">
                        <img src="./assets/images/celular-2.png" alt="Ícone de celular." />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;