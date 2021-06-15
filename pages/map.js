import Head from 'next/head';
import { useContext, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import NoSearchHeader from "../components/NoSearchHeader";
import HomeContent from "../components/HomeConent.js"
// import RamenMap from "../components/RamenMap.js"
import dynamic from "next/dynamic";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


import { StoreContext } from "../store"


export default function map() {
   
  const MapWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false
  });

  return (
    <Layout>
      <Head>
        <title>map</title>
      </Head>
      <Layout className="home-layout-1">
        <Header className="sethomeHeader">
          <NoSearchHeader />
        </Header>
        <Layout className="container ">
          <Content style={{position: 'relative', height: '100vh' ,padding: '0 50px' }} >
            <MapWithNoSSR />

          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center', background: '#3D0C08' }}></Footer>
      </Layout>
    </Layout>
  )
}