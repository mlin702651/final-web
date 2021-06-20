import Head from 'next/head';
import { useContext, useEffect, useState,useRef } from "react";
import { Layout, Menu, Breadcrumb, Drawer, Button, Select  ,Input} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import PostsHeader from "../components/PostsHeader.js"
import PostsContent from "../components/PostsContent.js"
const { SubMenu } = Menu;
const { Option } = Select;
const { TextArea } = Input;
const { Header, Content, Footer, Sider } = Layout;
import { getProducts } from "../api";
import postsJson from "../json/posts.json"

import { StoreContext } from "../store"
import { set } from 'js-cookie';



const Example = ({ data }) => <img className="imgTest" src={data} />


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
  const btnRef = useRef(null);
  const [visible, setVisible] = useState(false)
  const [imagedata, setImagedata] = useState('')
  const [pauseLogin, setPauseLogin] = useState(false)
  const [taglist, setTaglist] = useState([])
  const[tagOnChange,setTagOnChange]=useState("")
  const[fileExist,setFileExist]=useState(false)
  // console.log(postsJson)
  const inputChange = (e) => {
    console.log("ss")
    handleFileSelect(e)
  }
  const onRNChange = e => {
    console.log('Change:', e.target.value);
  };
  const onTextChange = e => {
    console.log('Change:', e.target.value);
  };
  const onTagchange = e => {
    console.log('Change:', e.target.value);
    var tag =e.target.value
    setTagOnChange(tag)
    
  };
  function addtag(){
    console.log(tagOnChange)
     const tagExist=taglist.find((x) => x === tagOnChange);
  if(tagExist){
    console.log("已經有了")
  }else{
 setTaglist([...taglist,tagOnChange])
 setTagOnChange(null)
  }
  }
  const removeTag = tag => {
    // e.target.getAttribute("name")
    // console.log('Change:', e.target.name);
    // const btnvalue = btnRef.current.name; 
    // var tagindex = taglist.indexOf(tag);
    // console.log(taglist)
    // taglist.splice(tagindex, 1)
      
    setTaglist(taglist.filter(item => item !== tag));

  // setTaglist(taglist)
console.log("a")
  };
  



  function handleAreaChange(value) {
    console.log(`selected ${value}`);
  }
  function handleCityChange(value) {
    console.log(`selected ${value}`);
  }
 
  function handleFileSelect(evt) {
    var file = evt.target.files[0];
    var reader = new FileReader();
    var AllowImgFileSize = 2100000;
    // console.log(file.name)
    if (file) {
      setFileExist(true)
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
          {fileExist?(<Example data={imagedata} />):(null) }
          </div>
          <div className="imgUploader-file">
            <input onChange={inputChange} className="imgUploader-file2" type="file" accept="image/*" capture="camera" id="64input"></input>
            <div className="imgUploader-file-text">選擇圖片</div>

          </div>
        </div>
        <div className="post-infoUploader-cont">
          <div className="area-and-city-cont">
            <div className="area-selector">
              <Select defaultValue="地區" style={{ width: 120 }} onChange={handleAreaChange}>
                <Option value="北部">北部</Option>
                <Option value="中部">中部</Option>
                <Option value="南部" > 南部</Option>
                <Option value="西部">西部</Option>
              </Select>
            </div>
            <div className="city-selector">
              <Select defaultValue="縣市" style={{ width: 120 }} onChange={handleCityChange}>
                <Option value="基隆">基隆</Option>
                <Option value="台北">台北</Option>
                <Option value="新北">新北</Option>
                <Option value="桃園">桃園</Option>
                <Option value="新竹">新竹</Option>
                <Option value="苗栗">苗栗</Option>
                <Option value="台中">台中</Option>
                <Option value="彰化">彰化</Option>
                <Option value="南投">南投</Option>
                <Option value="雲林">雲林</Option>
                <Option value="嘉義">嘉義</Option>
                <Option value="台南">台南</Option>
                <Option value="高雄">高雄</Option>
                <Option value="屏東">屏東</Option>
                <Option value="台東">台東</Option>
                <Option value="花蓮">花蓮</Option>
                <Option value="宜蘭">宜蘭</Option>
              </Select>
            </div>
          </div>
          <div className="post-restaurant-name">
          <Input placeholder="輸入拉麵店" onChange={onRNChange} />
          </div>
          <div className="post-text-input">

          <TextArea onChange={onTextChange} />
     
          </div>
        </div>
        <div className="posts-submit-btn-cont">
          <div className="addTag">
          <div className="taginput">
          <Input placeholder="標籤" onChange={onTagchange} value={tagOnChange}/>
          <div className="addTag-btn" onClick={addtag}>+</div>
          </div>
          <div className="addTag-tags">
{
  taglist.map(tag=>(
    <div key={tag}className="addTag-eachtag">
      <div ref={btnRef}className="tag-remove-btn" name={tag} onClick={()=>{
        removeTag(tag);
      }}>X</div>
<div className="addtag-tag-text">{tag}</div>

    </div>
  ))
}
          </div>
          </div>
          <div className="posts-submit-btn">發布</div>
        </div>
      </div>

    </Drawer>


  )
}




export default PostCreatePostDrawer
