import React, { useEffect, useState } from "react";
import { IProject } from "../../../interface/projects";
import { ITechnology } from "../../../interface/technologies";
import { ICategory } from "../../../interface/categories";
import Technology from "./Technology";

type Props = {
  category?: ICategory;
};

const DataProject = ({ category }: Props) => {
  if (category) {
    const { projects } = category;
    return (
      <>

        {projects?.map((item: IProject) => {
          return (
            <div className="products">
              <div className="box">
                <div className="image-grid">
                  <img src={item.thumbnail} alt="" />
                  <div className="content">
                    <h4>{item.name}</h4>
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  } else return <></>;
};

export default DataProject;