import React from 'react'

const Intro = () => {
    return (
        <>
            <div id="intro">
                <div className="wrapper">
                    <div className="col-a">
                        <header>
                            <h4>Hello world 👋🏾</h4>
                            <h1>I'm Charan,</h1>
                        </header>
                        <div className="content">
                            <p className="line typing">Front End Web Developer.</p>
                            <a className="button" href="#contact"> Talk to me </a>
                        </div>
                    </div>

                    <div className="col-b">
                        <img
                            src="assets/images/notebook.png"
                            alt="Image of a notebook."
                            id="notebook-1"
                        />
                        <img
                            src="assets/images/notebook-2.png"
                            alt="Image of a laptop with a broken screen"
                            id="notebook-2"
                        />
                        <img
                            src="assets/images/notebook-2-white.png"
                            alt="Image of a laptop with a broken screen"
                            id="notebook-2-white"
                        />
                        <img
                            src="./assets/images/glass.png"
                            alt="Image of shards of glass with HTML5, CSS3 and JavaScript icons on top."
                            id="glass"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;