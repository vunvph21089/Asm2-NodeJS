import {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMoon } from '@fortawesome/free-solid-svg-icons'

import userImg from './user-img.jpg'
type Props = {}

const header = (props: Props) => {
  useEffect(() => {
    const menu = document.querySelector<HTMLButtonElement>('#menu-btn');
    const header = document.querySelector<HTMLElement>('.header');
    const themeToggler = document.querySelector<HTMLButtonElement>('#theme-toggler');

    const handleMenuClick = () => {
      menu?.classList.toggle('fa-times');
      header?.classList.toggle('active');
    };

    const handleScroll = () => {
      menu?.classList.remove('fa-times');
      header?.classList.remove('active');
    };

    const handleThemeClick = () => {
      themeToggler?.classList.toggle('fa-sun');
      if (themeToggler?.classList.contains('fa-sun')) {
        document.body.classList.add('active');
      } else {
        document.body.classList.remove('active');
      }
    };

    menu?.addEventListener('click', handleMenuClick);
    window.addEventListener('scroll', handleScroll);
    themeToggler?.addEventListener('click', handleThemeClick);

    return () => {
      menu?.removeEventListener('click', handleMenuClick);
      window.removeEventListener('scroll', handleScroll);
      themeToggler?.removeEventListener('click', handleThemeClick);
    };
  }, []);
  return (
    <>

      <header className="header">

        <div className="user">
          <img src={userImg} alt="" />
          <h3>Ngo Van Vu</h3>
          <p>front-end developer</p>
        </div>

        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#services">services</a>
          <a href="#portfolio">portfolio</a>
          <a href="#contact">contact</a>
        </nav>
      </header>
      {/* <!-- header section ends --> */}

      <div id="menu-btn" ><FontAwesomeIcon className="fas fa-bars" icon={faBars} /></div>
      {/* <!-- theme toggler  --> */}
      <div id="theme-toggler" ><FontAwesomeIcon className="fas fa-moon" icon={faMoon} /></div>


      {/* <!-- home section starts  --> */}
    </>
  )
}

export default header