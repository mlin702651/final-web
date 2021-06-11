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
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <Layout className="home-layout-1">
        <Header className="sethomeHeader">
          <HomeHeader />
        </Header>
        <Layout className="container home-layout-2">
          <Content style={{ padding: '0 50px' }} >
            <HomeContent />

          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center', background: '#3D0C08' }}></Footer>
      </Layout>
    </Layout>
  )
}
