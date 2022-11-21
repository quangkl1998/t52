import React, { useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  ShopOutlined,
  AliwangwangOutlined,
  ApartmentOutlined,
  TagOutlined,
  VideoCameraOutlined,
  FundOutlined,
  QuestionOutlined,
  SketchOutlined,
} from "@ant-design/icons";
import { Col, Layout, Menu, Row, Select } from "antd";
import type { MenuProps } from "antd";

import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

import logo from "Pages/Admin/image/T52Logo.png";
import HeaderAdmin from "Pages/Admin/Components/HeaderAdmin/HeaderAdmin";

type MenuItem = Required<MenuProps>["items"][number];

const { Header, Sider } = Layout;

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
  getItem(
    "Tổng quan",
    "Dashboard",
    <NavLink to="/dashboard">
      <FundOutlined />
    </NavLink>,
  ),
  getItem("Cửa hàng", "Store", <ShopOutlined />, [
    getItem(
      "Tỉnh/Thành",
      "ProvinceList",
      <div>
        <NavLink to="province"></NavLink>
      </div>,
    ),
    getItem(
      "Quận/Huyện",
      "DistrictList",
      <div>
        <NavLink to="district"></NavLink>
      </div>,
    ),
    getItem(
      "Cửa Hàng",
      "StoreList",
      <div>
        <NavLink to="store"></NavLink>
      </div>,
    ),
    getItem(
      "Người Vay",
      "ClientList",
      <div>
        <NavLink to="client" />
      </div>,
    ),
    getItem(
      "Thủ Tục",
      "loanguild",
      <div>
        <NavLink to="loanguide" />
      </div>,
    ),
  ]),
  getItem("Banner", "Banner", <ShopOutlined />, [
    getItem(
      "Danh sách",
      "BannerList",
      <div>
        <NavLink to="banner"></NavLink>
      </div>,
    ),
  ]),

  getItem("Đối tác", "Partner", <ApartmentOutlined />, [
    getItem(
      "Danh sách",
      "PartnerList",
      <div>
        <NavLink to="partner"></NavLink>
      </div>,
    ),
  ]),
  getItem("Tin tức", "News", <AliwangwangOutlined />, [
    getItem(
      "Tin",
      "NewsList",
      <div>
        <NavLink to="newslist"></NavLink>
      </div>,
    ),
    getItem(
      "Tags",
      "TagNewsList",
      <div>
        <NavLink to="tagnews"></NavLink>
      </div>,
    ),
  ]),
  getItem("Video", "Media", <VideoCameraOutlined />, [
    getItem(
      "Danh sách",
      "MediaList",
      <div>
        <NavLink to="media"></NavLink>
      </div>,
    ),
  ]),

  getItem("Tài khoản", "Manager", <SketchOutlined />, [
    getItem(
      "Danh sách",
      "ManagerList",
      <div>
        <NavLink to="manager"></NavLink>
      </div>,
    ),
  ]),
  getItem("Về T52", "Introduce", <SketchOutlined />, [
    getItem(
      "Giới thiệu",
      "IntroduceList",
      <div>
        <NavLink to="introduce"></NavLink>
      </div>,
    ),
    getItem(
      "Giá trị cốt lõi",
      "CoreValueList",
      <div>
        <NavLink to="corevalue"></NavLink>
      </div>,
    ),
    getItem(
      "Tương lai",
      "FutureList",
      <div>
        <NavLink to="future"></NavLink>
      </div>,
    ),
    getItem(
      "Câu hỏi",
      "QuestionList",
      <div>
        <NavLink to="question"></NavLink>
      </div>,
    ),
    getItem(
      "Tại sao",
      "WhyChooseList",
      <div>
        <NavLink to="whychoose"></NavLink>
      </div>,
    ),
    getItem(
      "Giải Pháp",
      "SolutionList",
      <div>
        <NavLink to="solution"></NavLink>
      </div>,
    ),
  ]),
  getItem("Menu", "Menu", <SketchOutlined />, [
    getItem(
      "Danh sách",
      "MenuList",
      <div>
        <NavLink to="menu"></NavLink>
      </div>,
    ),
    getItem(
      "Mục",
      "subMenuList",
      <div>
        <NavLink to="submenu"></NavLink>
      </div>,
    ),
  ]),
  getItem("Dịch vụ", "Service", <SketchOutlined />, [
    getItem(
      "Danh sách",
      "ServiceList",
      <div>{<NavLink to="service"></NavLink>}</div>,
    ),
  ]),
];

const { Option } = Select;

const AdminTemplate = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [open, setOpen] = useState(false);

  const [store, SetStore] = useState(false);

  const [news, SetNews] = useState(false);

  const [about, SetAbout] = useState(false);

  const [menu, SetMenu] = useState(false);

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme="light"
          className="hidden md:block"
        >
          <div className="flex  justify-center bg-red-500 rounded-sm shadow-lg  ">
            <NavLink to="/">
              <img src={logo} alt="logo" className="w-16 h-16  " />
            </NavLink>
          </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={["9"]}
            items={items}
            theme="light"
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background   w-full z-10"
            style={{ padding: 0 /* margin: " 5px 5px 18px" */ }}
          >
            <Row className="md:justify-between">
              <Col>
                <div className="md:block hidden">
                  {React.createElement(
                    collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                    {
                      className: "trigger",
                      onClick: () => setCollapsed(!collapsed),
                    },
                  )}
                </div>
              </Col>

              <Col className="  md:hidden md:mr-4 flex justify-end w-full mt-3 mr-5">
                <button
                  onClick={() => setOpen(!open)}
                  className=" inline-flex items-center p-2  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
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
              <Col className="md:block hidden">
                <HeaderAdmin />
              </Col>
            </Row>
          </Header>
          <Outlet></Outlet>
        </Layout>
      </Layout>
      <div
        className={`
        md:hidden bg-white fixed w-full top-20 overflow-y-auto bottom-0 pt-10 pb-24 z-10 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
      >
        <div className="container mx-auto">
          <div className="flex flex-col justify-center px-3 py-4">
            <NavLink
              to="/dashboard"
              onClick={() => setOpen(!open)}
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
            >
              Tổng quan
            </NavLink>

            <div
              onClick={() => SetAbout(!about)}
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
            >
              <div
                onClick={() => SetAbout(!about)}
                className="flex justify-between"
              >
                <div>Về T52</div>
                <span className="text-xl lg:hidden inline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={6}
                    viewBox="0 0 10 6"
                    fill="#FFFF00"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#FFFF00"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className={about ? "" : "hidden"}>
                <NavLink
                  to="/dashboard/introduce"
                  onClick={() => setOpen(!open)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
                >
                  Giới thiệu
                </NavLink>
                <NavLink
                  to="/dashboard/corevalue"
                  onClick={() => setOpen(!open)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
                >
                  Giá trị cốt lõi
                </NavLink>
                <NavLink
                  to="/dashboard/future"
                  onClick={() => setOpen(!open)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
                >
                  Trong tương lai
                </NavLink>
                <NavLink
                  to="/dashboard/question"
                  onClick={() => setOpen(!open)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
                >
                  Câu hỏi
                </NavLink>
                <NavLink
                  to="/dashboard/whychoose"
                  onClick={() => setOpen(!open)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
                >
                  Tại sao
                </NavLink>
                <NavLink
                  to="/dashboard/solution"
                  onClick={() => setOpen(!open)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
                >
                  Giải pháp
                </NavLink>
              </div>
            </div>
            <div
              onClick={() => SetMenu(!menu)}
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
            >
              <div
                onClick={() => SetMenu(!menu)}
                className="flex justify-between"
              >
                <div>Menu</div>
                <span className="text-xl lg:hidden inline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={6}
                    viewBox="0 0 10 6"
                    fill="#FFFF00"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#FFFF00"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className={menu ? "" : "hidden"}>
                <NavLink
                  to="/dashboard/menu"
                  onClick={() => setOpen(!open)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
                >
                  Menu
                </NavLink>
                <NavLink
                  to="/dashboard/submenu"
                  onClick={() => setOpen(!open)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
                >
                  Mục
                </NavLink>
              </div>
            </div>
            <div
              onClick={() => SetNews(!news)}
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
            >
              <div
                onClick={() => SetNews(!news)}
                className="flex justify-between"
              >
                <div>Tin tức</div>
                <span className="text-xl lg:hidden inline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={6}
                    viewBox="0 0 10 6"
                    fill="#FFFF00"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#FFFF00"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className={news ? "" : "hidden"}>
                <NavLink
                  to="/dashboard/newslist"
                  onClick={() => setOpen(!open)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
                >
                  Tin
                </NavLink>
                <NavLink
                  to="/dashboard/tagnews"
                  onClick={() => setOpen(!open)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
                >
                  Tags
                </NavLink>
              </div>
            </div>
            <div
              onClick={() => SetStore(!store)}
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
            >
              <div
                onClick={() => SetStore(!store)}
                className="flex justify-between"
              >
                <div>Cửa hàng</div>
                <span className="text-xl lg:hidden inline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={6}
                    viewBox="0 0 10 6"
                    fill="#FFFF00"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="#FFFF00"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className={store ? "" : "hidden"}>
                <NavLink
                  to="/dashboard/province"
                  onClick={() => setOpen(!open)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
                >
                  Tỉnh/Thành
                </NavLink>
                <NavLink
                  to="/dashboard/district"
                  onClick={() => setOpen(!open)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
                >
                  Quận/Huyện
                </NavLink>
                <NavLink
                  to="/dashboard/store"
                  onClick={() => setOpen(!open)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
                >
                  Cửa hàng
                </NavLink>
                <NavLink
                  to="/dashboard/client"
                  onClick={() => setOpen(!open)}
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
                >
                  Người vay
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/dashboard/banner"
              onClick={() => setOpen(!open)}
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
            >
              Banner
            </NavLink>
            <NavLink
              to="/dashboard/partner"
              onClick={() => setOpen(!open)}
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
            >
              Đối tác
            </NavLink>
            <NavLink
              to="/dashboard/media"
              onClick={() => setOpen(!open)}
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
            >
              Video
            </NavLink>
            <NavLink
              to="/dashboard/manager"
              onClick={() => setOpen(!open)}
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
            >
              Tài khoản
            </NavLink>
            <NavLink
              to="/dashboard/service"
              onClick={() => setOpen(!open)}
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 hover:text-amber-500"
            >
              Dịch vụ
            </NavLink>
            <HeaderAdmin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTemplate;
