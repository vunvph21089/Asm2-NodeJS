import React, { useEffect, useState } from "react";
import { IProject } from "../../../interface/projects";
import { ICategory } from "../../../interface/categories";
import { getCategory } from "../../../api/categories";

import DataProject from "./DataProject";

import img1 from './img-1.jpg'
import img2 from './img-2.jpg'
import img3 from './img-3.jpg'
import img4 from './img-4.jpg'
import img5 from './img-5.jpg'
import img6 from './img-6.jpg'


type Props = {
    projects: IProject[]
    categories: ICategory[];
  };
const portfolio = ({projects, categories }: Props) => {
    const [category, setCategory] = useState<ICategory>();
    const onClickHandler = async (id: number | string) => {
        const { data } = await getCategory(id);
        setCategory(data);
      };
      // Active categories button
      const [activeCategory, setActiveCategory] = useState(1);
  return (
    <div>



<section className="portfolio" id="portfolio">

<h1 className="heading"> my <span>portfolio</span> </h1>

<div className="box-container">


{categories.map((category: ICategory, index) => {
          const { projects } = category;
          return (
            <div
              key={category._id}
              className={
                activeCategory === index
                  ? "categories__item categories__hidden-active"
                  : "categories__item"
              }
              onClick={() => {
                setActiveCategory(index);
                onClickHandler(category._id);
              }}
            >
              
               <nav className="navbarcate">
             <a>{category.name}</a> 
              </nav>
            </div>
          );
        })}
      
      <div className="gitbang">
        <DataProject category={category} />
      </div>
</div>
      </section>
  
    </div>
  )
}

export default portfolio