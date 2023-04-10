import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {
  DashboardOutlined,
  FileOutlined,
  CalendarFilled,
  Html5Outlined,
  UserOutlined,
  LeftOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "../assets/css/admin.css";

type Props = {};

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  to?: string,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    to: to || "/",
    children,
    label: (
      <Link style={{ color: "white" }} to={to || "/"}>
        {label}
      </Link>
    ),
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "1", <DashboardOutlined />, "/admin"),
  getItem("Project", "sub1", <FileOutlined />, "/admin/projects", [
    getItem("List", "2", undefined, "/admin/projects"),
    getItem("Add new", "3", undefined, "/admin/projects/add"),
  ]),
  getItem("Categories", "sub2", <CalendarFilled />, "/admin/categories", [
    getItem("List", "4", undefined, "/admin/categories"),
    getItem("Add new", "5", undefined, "/admin/categories/add"),
  ]),
  getItem("Technologies", "sub3", <Html5Outlined />, "/admin/technologies", [
    getItem("List", "6", undefined, "/admin/technologies"),
    getItem("Add new", "7", undefined, "/admin/technologies/add"),
  ]),
  getItem("Users", "sub4", <UserOutlined />, "/admin/users", [
    getItem("List", "8", undefined, "/admin/users"),
    getItem("Add new", "9", undefined, "/admin/users/add"),
  ]),
  getItem("Removed recent", "sub5", <DeleteOutlined />, "/admin"),
];

const AdminLayout: React.FC = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const user = JSON.parse(localStorage?.getItem('user') as string);
  const navigate = useNavigate();
  useEffect(() => {
    if(!user) {
      return navigate("/")
    }
    if(user.user.role !== "admin" && !user) {
      return navigate("/");
    }
  },[navigate])

  // log out
  useEffect(() =>{
    const btnLogout = document.querySelector('#logout');
  
    btnLogout?.addEventListener('click', function () {
      localStorage.removeItem('user')
    location.reload();
    });
  })
  return (
    <>
      <Layout style={{ minHeight: '102vh', minWidth: '100%' ,marginLeft:'-32rem',marginTop:'-2rem' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          className="slider"
        >
          <div
            style={{
              color: "#fff",
              height: 45,
              margin: 15,
              padding: 16,
              background: "rgba(13, 29, 49, 1)",
              borderRadius: 4,
              lineHeight: "32px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link to="/"  className="user-image">
              <div>
                <LeftOutlined />
                Portfolio
              </div>
            </Link>
              {/* <img src="../assets/user-img.jpg" alt="" /> */}
              <div className="drop_down-info">Dang xuat</div>
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          ></Menu>
        </Sider>
        <Layout className="site-layout">
          <Header style={{ padding: 0, marginTop:'-2rem' }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            ©2023 Design by Ant
            <button id="logout">
              Đăng xuất
            </button>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default AdminLayout;
