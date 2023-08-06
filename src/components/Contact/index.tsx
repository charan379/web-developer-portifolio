import EmailSvgLogo from '@/assets/logos/Email';
import WhatsappSvgLogo from '@/assets/logos/Whatsapp';
import React from 'react'
import styles from "./Contact.module.css"

const Contact = (props: { profile: Profile }) => {
    return (
        <>
            <section id="contact" className={styles.contact}>
                <div className={`${styles.wrapper} wrapper`}>
                    <div className={`${styles.colA} col-a`}>
                        <header>
                            <h2>Talk to me!</h2>
                        </header>
                        <div className={`${styles.content} content`}>
                            <ul>
                                <li>
                                    <a href="mailto: developer-name@gmail.com" title="Enviar e-mail">
                                        <EmailSvgLogo />
                                        developer-name@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+5521971602369" title="Make a call"
                                    ><img
                                            src="./assets/icons/celular.svg"
                                            alt="Cellphone icon.                                            "
                                            id="cel"
                                        />
                                        +91 97160-2369</a>
                                </li>
                            </ul>

                            <a
                                className={`${styles.button} button`}
                                title="Call me on zap!                                "
                                href="https://api.whatsapp.com/send?phone=552197602369&text=Fala,%20Lucyan!%20Vim%20do%20teu%20portifólio,%20quero%20trabalhar%20contigo!"
                                target="_blank"
                            >
                                <WhatsappSvgLogo />
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className={`${styles.colB} col-b`}>
                        <img src="./assets/images/celular-2.png" alt="Cellphone icon." />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;