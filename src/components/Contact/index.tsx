import EmailSvgLogo from "@/assets/logos/Email";
import WhatsappSvgLogo from "@/assets/logos/Whatsapp";
import React from "react";
import styles from "./Contact.module.css";

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
                  <a
                    href={`mailto: ${props.profile.email}`}
                    title="Send e-mail"
                  >
                    <EmailSvgLogo />
                    {props.profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel: ${props.profile.mobile[0].countryCode} ${props.profile.mobile[0].number}`}
                    title="Make a call"
                  >
                    <img
                      src="./assets/icons/celular.svg"
                      alt="Cellphone icon."
                      id="cel"
                    />
                    {props.profile.mobile[0].countryCode} &nbsp;
                    {props.profile.mobile[0].number}
                  </a>
                </li>
              </ul>

              <a
                className={`${styles.button} button`}
                title="Call me on zap!                                "
                href={`https://api.whatsapp.com/send?phone=${props.profile.mobile[0].countryCode} ${props.profile.mobile[0].number}&text=Hi%2C%20${props.profile.shortName}%20%21%20I%20came%20from%20your%20portfolio%2C%20I%20want%20to%20work%20with%20you%21%0A`}
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
  );
};

export default Contact;
