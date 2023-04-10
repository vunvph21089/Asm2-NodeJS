import { useEffect, useState } from "react";
import { Route, RouterProvider, Routes } from "react-router-dom";

import AdminLayout from "./components/adminLayout";

import Signin from "./pages/signin";

import RootLayout from "./components/rootLayout";
import { IProject } from "./interface/projects";
import { ICategory } from "./interface/categories";
import { removeProject, getAllProjects } from "./api/projects";

import { getAllCategories, removeCategory } from "./api/categories";
import CategoriesAdd from "./pages/admin/categories/CategoriesAdd";
import CategoriesList from "./pages/admin/categories/CategoriesList";
import CategoriesEdit from "./pages/admin/categories/CategoriesEdit";

import ProjectAdd from "./pages/admin/projects/ProjectAdd";
import ProjectList from "./pages/admin/projects/ProjectList";
import ProjectEdit from "./pages/admin/projects/ProjectEdit";

import { ITechnology } from "./interface/technologies";
import { getAllTechnologies, removeTechnology } from "./api/technologies";
import TechnologiesList from "./pages/admin/technologies/TechnologiesList";
import TechnologiesAdd from "./pages/admin/technologies/TechnologiesAdd";
import TechnologiesEdit from "./pages/admin/technologies/TechnologiesEdit";

import { IUser } from "./interface/auth";
import { getAllUsers, removeUser } from "./api/users";
import UsersList from "./pages/admin/users/UsersList";
import UsersAdd from "./pages/admin/users/UsersAdd";
import UsersEdit from "./pages/admin/users/UsersEdit";


import './App.css';

function App() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const project = await getAllProjects();
        setProjects(project.data);

        const category = await getAllCategories();
        setCategories(category.data);

        const technology = await getAllTechnologies();
        setTechnologies(technology.data);

        const user = await getAllUsers();
        setUsers(user.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);



  const onHandleRemoveProjects = async (id: number | string) => {
    try {
      await removeProject(id);
      const newProjects = projects.filter(
        (project: IProject) => project._id != id
      );
      setProjects(newProjects);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleRemoveCategories = async (id: number | string) => {
    try {
      await removeCategory(id);
      const newCategories = categories.filter(
        (category: ICategory) => category._id != id
      );
      setCategories(newCategories);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleRemoveTechnologies = async (id: number | string) => {
    try {
      await removeTechnology(id);
      const newTechnologies = technologies.filter(
        (technology: ITechnology) => technology._id != id
      );
      setTechnologies(newTechnologies);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleRemoveUsers = async (id: number | string) => {
    try {
      await removeUser(id);
      const newUsers = users.filter(
        (user: IUser) => user._id != id
      );
      setUsers(newUsers);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Routes>
{/* Client */}
      <Route
        path="/"
        element={<RootLayout projects={projects} categories={categories} />}
      />
      <Route path="signin" element={<Signin />} />

{/* admin */}
      <Route path="admin" element={<AdminLayout />}>
{/* project */}
        <Route path="projects">
          <Route
            index
            element={
              <ProjectList
                projects={projects}
                onRemove={onHandleRemoveProjects}
              />
            }
          />
          <Route
            path="add"
            element={
              <ProjectAdd technologies={technologies} categories={categories}  />
            }
          />
          <Route path=":id/edit" element={<ProjectEdit projects={projects} categories={categories}  technologies={technologies} />} />
        </Route>
{/* categories */}
        <Route path="categories">
          <Route
            index
            element={
              <CategoriesList
                categories={categories}
                onRemove={onHandleRemoveCategories}
              />
            }
          />
          <Route path="add" element={<CategoriesAdd />} />
          <Route
            path=":id/edit"
            element={<CategoriesEdit categories={categories} />}
          />
        </Route>

{/* technologies */}
        <Route path="technologies">
          <Route
            index
            element={
              <TechnologiesList
                technologies={technologies}
                onRemove={onHandleRemoveTechnologies}
              />
            }
          />
          <Route path="add" element={<TechnologiesAdd />} />
          <Route
            path=":id/edit"
            element={<TechnologiesEdit technologies={technologies} />}
          />
        </Route>

{/* users */}
        <Route path="users">
          <Route
            index
            element={
              <UsersList
                users={users}
                onRemove={onHandleRemoveUsers}
              />
            }
          />
          <Route path="add" element={<UsersAdd />} />
          <Route
            path=":id/edit"
            element={<UsersEdit users={users} />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
