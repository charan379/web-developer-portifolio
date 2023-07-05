import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '@/components/NavBar'
import Intro from '@/components/Intro'

export default function Home() {
  return (
    <main className={styles.main}>

      <NavBar />

      <Intro />

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

      <section id="projects">
        <div className="wrapper"></div>
      </section>

      <section id="knowledge">
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                        stroke="#00856F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 6L12 13L2 6"
                        stroke="#00856F"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

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
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6 14.0001C16.4 13.9001 15.1 13.3001 14.9 13.2001C14.7 13.1001 14.5 13.1001 14.3 13.3001C14.1 13.5001 13.7 14.1001 13.5 14.3001C13.4 14.5001 13.2 14.5001 13 14.4001C12.3 14.1001 11.6 13.7001 11 13.2001C10.5 12.7001 10 12.1001 9.6 11.5001C9.5 11.3001 9.6 11.1001 9.7 11.0001C9.8 10.9001 9.9 10.7001 10.1 10.6001C10.2 10.5001 10.3 10.3001 10.3 10.2001C10.4 10.1001 10.4 9.9001 10.3 9.8001C10.2 9.7001 9.7 8.5001 9.5 8.0001C9.4 7.3001 9.2 7.3001 9 7.3001C8.9 7.3001 8.7 7.3001 8.5 7.3001C8.3 7.3001 8 7.5001 7.9 7.6001C7.3 8.2001 7 8.9001 7 9.7001C7.1 10.6001 7.4 11.5001 8 12.3001C9.1 13.9001 10.5 15.2001 12.2 16.0001C12.7 16.2001 13.1 16.4001 13.6 16.5001C14.1 16.7001 14.6 16.7001 15.2 16.6001C15.9 16.5001 16.5 16.0001 16.9 15.4001C17.1 15.0001 17.1 14.6001 17 14.2001C17 14.2001 16.8 14.1001 16.6 14.0001ZM19.1 4.9001C15.2 1.0001 8.9 1.0001 5 4.9001C1.8 8.1001 1.2 13.0001 3.4 16.9001L2 22.0001L7.3 20.6001C8.8 21.4001 10.4 21.8001 12 21.8001C17.5 21.8001 21.9 17.4001 21.9 11.9001C22 9.3001 20.9 6.8001 19.1 4.9001ZM16.4 18.9001C15.1 19.7001 13.6 20.2001 12 20.2001C10.5 20.2001 9.1 19.8001 7.8 19.1001L7.5 18.9001L4.4 19.7001L5.2 16.7001L5 16.4001C2.6 12.4001 3.8 7.4001 7.7 4.9001C11.6 2.4001 16.6 3.7001 19 7.5001C21.4 11.4001 20.3 16.5001 16.4 18.9001Z"
                    fill="white"
                  />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="col-b">
            <img src="./assets/images/celular-2.png" alt="Ícone de celular." />
          </div>
        </div>
      </section>

      <a id="backToTopButton" title="Voltar ao topo" href="#home">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#00856F" />
          <path
            d="M20 27V13"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 20L20 13L27 20"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>

      <footer>
        <div className="wrapper">
          <div className="col-a">
            <a className="logo" href="#home"> lucyanovidio </a>

            <p>
              ©2022 por Lucyan Ovídio. <br />
              Todos os direitos reservados.
            </p>
          </div>

          <div className="col-b">
            <ul className="social-links">
              <li>
                <a
                  href="https://instagram.com/lucyanovidio"
                  title="Instagram"
                  target="_blank"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                      d="M17 1.99997H7C4.23858 1.99997 2 4.23855 2 6.99997V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V6.99997C22 4.23855 19.7614 1.99997 17 1.99997Z"
                      stroke="#FFFAF1"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.9997 11.3701C16.1231 12.2023 15.981 13.0523 15.5935 13.7991C15.206 14.5459 14.5929 15.1515 13.8413 15.5297C13.0898 15.908 12.2382 16.0397 11.4075 15.906C10.5768 15.7723 9.80947 15.3801 9.21455 14.7852C8.61962 14.1903 8.22744 13.4229 8.09377 12.5923C7.96011 11.7616 8.09177 10.91 8.47003 10.1584C8.84829 9.40691 9.45389 8.7938 10.2007 8.4063C10.9475 8.0188 11.7975 7.87665 12.6297 8.00006C13.4786 8.12594 14.2646 8.52152 14.8714 9.12836C15.4782 9.73521 15.8738 10.5211 15.9997 11.3701Z"
                      stroke="#FFFAF1"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.5 6.49997H17.51"
                      stroke="#FFFAF1"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/lucyanovidio"
                  title="Github"
                  target="_blank"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
                      fill="rgba(255,255,255,1)"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/lucyanovidio"
                  title="LinkedIn"
                  target="_blank"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z"
                      fill="rgba(255,255,255,1)"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/lucyanovidio"
                  title="Twitter"
                  target="_blank"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                      fill="rgba(255,255,255,1)"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div id="toggle">
        <input type="checkbox" id="sw-checkbox" />
        <label htmlFor="sw-checkbox" title="Mudar tema">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
              fill="rgba(255,255,255,1)"
            />
          </svg>
        </label>
      </div>
    </main>
  )
}
