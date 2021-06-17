import Head from 'next/head';
import { useContext, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import PostsHeader from "../components/PostsHeader.js"
import PostsContent from "../components/PostsContent.js"
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import { getProducts } from "../api";
import postsJson from "../json/posts.json"

import { StoreContext } from "../store"

const Posts=({jsonProducts})=> {
  useEffect(() => {

    // const fetchData = async () => {
    //   console.log(2)
    //   const jsonProducts = await getProducts("/posts");
      
    //   if(jsonProducts){
    //     console.log('getStaticProps = ')
    //     console.log(jsonProducts)
    //   }
    // }
    // fetchData()



  }, []);
  // console.log(postsJson)
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

<PostsContent postsJson={postsJson}></PostsContent>
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center', background: '#3D0C08' }}></Footer>
      </Layout>
    </Layout>
  )
}




export default Posts
