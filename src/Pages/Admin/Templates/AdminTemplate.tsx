import React, { useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  ShopOutlined,
  AliwangwangOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import { Button, Col, Layout, Menu, Row } from "antd";
import type { MenuProps } from "antd";

import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

import logo from "Pages/Admin/image/T52Logo.png";
import HeaderAdmin from "Pages/Admin/Components/HeaderAdmin/HeaderAdmin";

type MenuItem = Required<MenuProps>["items"][number];

const { Header, Sider, Content } = Layout;

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Store", "sub1", <ShopOutlined />, [
    getItem(
      "StoreList",
      "1",
      <div>
        <NavLink to="store"></NavLink>
      </div>,
    ),
  ]),
  getItem("Client", "sub2", <UserOutlined />, [
    getItem(
      "ClientList",
      "2",
      <div>
        <NavLink to="client" />
      </div>,
    ),
  ]),
  getItem("Partner", "sub3", <ApartmentOutlined />, [
    getItem(
      "PartnerList",
      "3",
      <div>
        <NavLink to="Partner"></NavLink>
      </div>,
    ),
  ]),
  getItem("News", "sub4", <AliwangwangOutlined />, [
    getItem(
      "NewsList",
      "5",
      <div>
        <NavLink to="NewsList"></NavLink>
      </div>,
    ),
    getItem(
      "AddNews",
      "6",
      <div>
        <NavLink to="NewsList/addNews"></NavLink>
      </div>,
    ),
  ]),
];

const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme="light"
          className="hidden lg:block"
        >
          <div className="flex justify-center bg-red-500 rounded-sm shadow-lg  ">
            <img src={logo} alt="logo" className="w-16 h-16  " />
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
            theme="light"
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background "
            style={{ padding: 0 /* margin: " 5px 5px 18px" */ }}
          >
            <Row className="lg:justify-between">
              <Col>
                <div className="lg:block hidden">
                  {React.createElement(
                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                      className: "trigger",
                      onClick: () => setCollapsed(!collapsed),
                    },
                  )}
                </div>
              </Col>

              <Col className=" lg:mr-4">
                <button className="inline-flex items-center p-2  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Col>
              <Col>
                <HeaderAdmin />
              </Col>
            </Row>
          </Header>
          <Outlet></Outlet>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminTemplate;
