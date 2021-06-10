import Head from 'next/head';
import { useContext, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import HomeHeader from "../components/HomeHeader.js"
import HomeContent from "../components/HomeConent.js"
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


import { StoreContext } from "../store"


export default function Home() {
  return (
    <Layout className="home_layout_1">
    <Header className="sethomeHeader">
    <HomeHeader/>
    </Header>
    <Layout className="container ">
    <Content style={{ padding: '0 50px' }} >
    <HomeContent/>
   
    </Content>
    </Layout>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  )
}
