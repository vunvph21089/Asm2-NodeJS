import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons'
type Props = {}

const home = (props: Props) => {
    return (

        <section className="home" id="home">

            <div className="content">
                <h3>Ngo Van Vu</h3>
                <p>i am a front-end developer</p>
                <a href="#" className="btn">download CV</a>
            </div>

            <div className="share">
                <a href="#" className="fab fa-facebook-f"><FontAwesomeIcon className='iconhome' icon={faFacebookF}/></a>
                <a href="#" className="fab fa-twitter"><FontAwesomeIcon className='iconhome' icon={faTwitter} /></a>
                <a href="#" className="fab fa-instagram"><FontAwesomeIcon className='iconhome' icon={faInstagram} /></a>
                <a href="#" className="fab fa-linkedin"><FontAwesomeIcon className='iconhome' icon={faLinkedin} /></a>
                <a href="#" className="fab fa-pinterest"><FontAwesomeIcon className='iconhome' icon={faPinterest} /></a>
            </div>

        </section>

    )
}

export default home