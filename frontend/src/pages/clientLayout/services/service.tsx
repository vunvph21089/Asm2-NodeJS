import React from 'react'

type Props = {}

const service = (props: Props) => {
    return (
        <div>
            <section className="services" id="services">

                <h1 className="heading"> my <span>services</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <i className="fas fa-code"></i>
                        <h3>web design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas delectus, laboriosam nulla dolore in.</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-paint-brush"></i>
                        <h3>graphic design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas delectus, laboriosam nulla dolore in.</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-mobile"></i>
                        <h3>responsive design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas delectus, laboriosam nulla dolore in.</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-bullhorn"></i>
                        <h3>digital marketing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas delectus, laboriosam nulla dolore in.</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-search-dollar"></i>
                        <h3>SEO marketing</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas delectus, laboriosam nulla dolore in.</p>
                    </div>

                    <div className="box">
                        <i className="fab fa-wordpress"></i>
                        <h3>wordpress</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas delectus, laboriosam nulla dolore in.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default service