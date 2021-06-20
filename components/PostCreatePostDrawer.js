import Head from 'next/head';
import { useContext, useEffect, useState } from "react";
import { Layout, Menu, Breadcrumb, Drawer, Button, Select  } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import PostsHeader from "../components/PostsHeader.js"
import PostsContent from "../components/PostsContent.js"
const { SubMenu } = Menu;
const { Option } = Select;
const { Header, Content, Footer, Sider } = Layout;
import { getProducts } from "../api";
import postsJson from "../json/posts.json"

import { StoreContext } from "../store"



const Example = ({ data }) => <img className="imgTest"src={data} />


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
  const [imagedata,setImagedata]=useState('')
  const [pauseLogin, setPauseLogin] = useState(false)
  // console.log(postsJson)
  const inputChange =(e)=>{
    console.log("ss")
    handleFileSelect(e)
  }
  function handleFileSelect(evt) {
    var file = evt.target.files[0];
    var reader = new FileReader();
    var AllowImgFileSize = 2100000;
    // console.log(file.name)
    if(file){
    var files = file.name.split('.')
    var name = files[files.length - 1]
    var type = ['gif', 'png', 'jpg', 'svg', 'jpeg']
    console.log("upload")

    //判断图片格式
    if (type.indexOf(name) === -1) {
      message.info(`不支持.${name}格式`)
      return
    }
  }
    var imgUrlBase64;
    if (file) {
      //将文件以Data URL形式读入页面
      imgUrlBase64 = reader.readAsDataURL(file);
      reader.onload = function (e) {
        if (AllowImgFileSize !== 0 && AllowImgFileSize < reader.result.length) {
          message.info('上传失败，请上传不大于2M的图片！');
          return;
        } else {
          console.log(reader.result)
          setImagedata(reader.result)
        }
      }
    }
  }
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
          <div className="imgUploader-window">
            <Example data={imagedata} />
          </div>
          <div className="imgUploader-file">
            <input onChange={inputChange} className="imgUploader-file2" type="file" accept="image/*" capture="camera" id="64input"></input>
            <div className="imgUploader-file-text">選擇圖片</div>

          </div>
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
