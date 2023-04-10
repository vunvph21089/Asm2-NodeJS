import React from 'react'
type Props = {}

const about = (props: Props) => {
    return (
        <div>
            <section className="about" id="about">
                <h1 className="heading"> <span>about</span> me </h1>
                <div className="row">

                    <div className="box-container">
                        <div className="box">
                            <h3>2+</h3>
                            <p>years of experience</p>
                        </div>
                        <div className="box">
                            <h3>450+</h3>
                            <p>satisfied clients</p>
                        </div>
                        <div className="box">
                            <h3>190+</h3>
                            <p>working hours</p>
                        </div>
                        <div className="box">
                            <h3>10+</h3>
                            <p>awards won</p>
                        </div>
                    </div>

                    <div className="content">
                        <h3>my name is <span>Ngo Van Vu</span></h3>
                        <p>My name is Ngo Van Vu. I'm a frontend developer living in Hanoi, Vietnam. I studied at FPT Polytechnic Hanoi and graduated in 2023. After I graduate, I want to learn more specialized knowledge and find the right company for me and below is some information about me and the projects I have worked on.</p>
                        <a href="#" className="btn">contact me</a>
                    </div>

                </div>

                <div className="row">
                    <div className="progress">
                        <h3> web design <span>90%</span> </h3>
                        <div className="bar bar-1-1"><span></span></div>
                        <h3> graphic design <span>75%</span> </h3>
                        <div className="bar bar-1-2"><span></span></div>
                        <h3> UI/UX design <span>80%</span> </h3>
                        <div className="bar bar-1-3"><span></span></div>
                    </div>

                    <div className="progress">
                        <h3> HTML <span>95%</span> </h3>
                        <div className="bar bar-2-1"><span></span></div>
                        <h3> CSS <span>80%</span> </h3>
                        <div className="bar bar-2-2"><span></span></div>
                        <h3> javascript <span>65%</span> </h3>
                        <div className="bar bar-2-3"><span></span></div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default about