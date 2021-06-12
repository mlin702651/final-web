import Head from 'next/head';
import { useContext, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import PostsHeader from "../components/PostsHeader.js"
import PostsContent from "../components/PostsContent.js"
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


import { StoreContext } from "../store"


export default function Posts() {
  return (
    <Layout>
      <Head>
        <title>posts</title>
      </Head>
      <Layout className="posts-layout-1">
        <Header className="sethomeHeader">
          <PostsHeader />
        </Header>
        <Layout className="container ">
          <Content style={{ padding: '0 50px' }} >

<PostsContent></PostsContent>
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center', background: '#3D0C08' }}></Footer>
      </Layout>
    </Layout>
  )
}