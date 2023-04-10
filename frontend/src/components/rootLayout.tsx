import React, { useEffect, useState } from "react";

import Header from "../pages/clientLayout/headers/header";
import Home from "../pages/clientLayout/homes/home";
import Service from "../pages/clientLayout/services/service";
import Portfolio from "../pages/clientLayout/portfolios/portfolio";
import About from "../pages/clientLayout/abouts/about";
import Contact from "../pages/clientLayout/contacts/contact";

import { IProject } from "../interface/projects";
import { ICategory } from "../interface/categories";

import '../assets/css/root.css'

type Props = {};

type ProjectListProps = {
  categories: ICategory[];
  projects: IProject[];
};

const RootLayout = ({ projects, categories }: ProjectListProps) => {
  return (
    <>
    <div className="client">
      <Header />
      <Home />
      <About />
      <Service />
      <Portfolio projects={projects} categories={categories}/>
      <Contact />
    </div>
    </>
  );
};

export default RootLayout;
