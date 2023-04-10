import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { useForm } from "react-hook-form";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { IUser } from "../interface/auth";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMoon } from '@fortawesome/free-solid-svg-icons'

import img3d from "../assets/car_1k.gif"



type Props = {};

const Signin: React.FC = (props: Props) => {
  const [api, contextHolder] = notification.useNotification();
  const [messages, setMessage] = useState('')
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const element: HTMLElement | null = document.getElementById("demo");
    if (element) {
      element.innerHTML = messages;
    }
  }, [messages])


  const onHandleSubmit = async (data: any) => {
    try {
      const { data: user } = await login(data);
      localStorage.setItem('user', JSON.stringify(user));
      api["success"]({
        message: "Login successful!",
      });
      setTimeout(function () {
        navigate("/admin");
      }, 600);


    } catch (error: any) {
      if (error.response) {
        const { message } = error.response.data
        setMessage(message)
      } else {
        console.log(error.message);
      }
    }
  };

  // dark mode
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
    <div className="layout">

      <header className="header">
        <div className="user">
        <nav className="navbar">
            <Link to="/">Back</Link>
            
          </nav>
          <img src={img3d} style={{ width: '450px', height: "auto" }} alt="" />
         
        </div>
        <div id="menu-btn" ><FontAwesomeIcon className="fas fa-bars" icon={faBars} /></div>
        {/* <!-- theme toggler  --> */}
        <div id="theme-toggler" ><FontAwesomeIcon className="fas fa-moon" icon={faMoon} /></div>
      </header>



      <div className="main" style={{marginTop:"10rem"}}>

        <section className='contact' id='contact'>
          <h1 className='heading'>Sign in</h1>
          <span className="section__subtitle">
          </span>
          <div className="contact__container container grid">
            <div className="contact__content">
              <form action="" id="signup-form" className="contact__form" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__form-tag">
                    Email
                  </label>

                  <input
                    type="email"
                    className="box"
                    id="mySelect"
                    // placeholder="Insert your email"
                    {...register("email")}
                  /><br />

                </div>
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__form-tag">
                    Password
                  </label>
                  <input
                    type="password"
                    className="box"
                    id="name"
                    placeholder="Insert your name"
                    {...register("password")}
                  />
                  <br />
                  <span id="demo" style={{ color: 'red', fontSize: '15px' }}></span>
                </div>
                <button
                  type="submit"
                  style={{ marginTop: '5rem' }}
                  className="btn"
                >
                  {contextHolder}
                  Sign in<i className="bx bx-send"></i>
                </button>
              </form>
            </div>
          </div>
        </section>

      </div>




    </div>
  );
};

export default Signin;
