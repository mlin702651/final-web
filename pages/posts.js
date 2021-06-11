import Head from 'next/head';
import { useContext, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import PostsHeader from "../components/PostsHeader.js"
import HomeContent from "../components/HomeConent.js"
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


import { StoreContext } from "../store"


export default function Posts() {
  return (
    <Layout>
        <Head>
        <title>Home Page</title>
      </Head>
    <Layout className="posts-layout-1">
    <Header className="sethomeHeader">
    <PostsHeader/>
    </Header>
    <Layout className="container ">
    <Content style={{ padding: '0 50px' }} >

   
    </Content>
    </Layout>
    <Footer style={{ textAlign: 'center' ,background: '#3D0C08'}}></Footer>
  </Layout>
   </Layout>
  )
}