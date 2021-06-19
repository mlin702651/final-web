import Head from 'next/head';
import { useContext, useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb, Drawer, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import PostsHeader from "../components/PostsHeader.js"
import PostsContent from "../components/PostsContent.js"
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import { getProducts } from "../api";
import postsJson from "../json/posts.json"

import { StoreContext } from "../store"



const PostCreatePostDrawer = () => {
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
  const [visible, setVisible] = useState(false)
  const [pauseLogin, setPauseLogin] = useState(false)
  // console.log(postsJson)
  return (


    <Drawer
      className="post-drawer"
      placement="right"
      closable={false}
      onClose={() => { setVisible(false) }}
      visible={visible}
      getContainer={false}
      style={{ position: 'fixed', zIndex: 90 }}
    >
      {/* <div className="create-post-drawer-cont1"> */}
      <div className="create-post-drawer-open-btn" onClick={() => { setVisible(!visible) }}>

      </div>
      <div className="create-post-drawer-elm-cont">
        <div className="post-imgUploader-cont">
          <div className="imgUploader-window"></div>
          <div className="imgUploader-file"></div>
        </div>
        <div className="post-infoUploader-cont">
          <div className="area-and-city-cont">
            <div className="area-selector"></div>
            <div className="city-selector"></div>
          </div>
          <div className="post-restaurant-name"></div>
          <div className="post-text-input"></div>
        </div>
        <div className="posts-submit-btn-cont">
          <div className="posts-submit-btn"></div>
        </div>
      </div>

    </Drawer>


  )
}




export default PostCreatePostDrawer
