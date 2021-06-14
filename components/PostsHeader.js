import { useContext, useState } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import { StoreContext } from "../store";
import Image from 'next/image'
import { Input, Drawer } from 'antd';
import HamMenu from './HamMenu';
import PostNavBtnWhite from './PostNavBtnWhite';
import UserInfo from './UserInfo'
import LoginCard from './LoginCard';

export default function PostsHeader({ title }) {
  const { dispatch } = useContext(StoreContext);
  const router = useRouter()

  
  const onChange = e => {
    console.log(e);
  };
  const postSearch = () => {
    console.log("Sss");
  }

  const [isHamTouch, setIsHamTouch] = useState(false);
  const handleCloseHamDrawer = () => setIsHamTouch(false);
  const [isLoginTouch, setIsLoginTouch] = useState(false);
  const handleCloseLoginDrawer = () => setIsLoginTouch(false);

  return (
    <>
      <header className="homeHeader">
        <Link href="/" >
          <div className="logo">

          </div>
        </Link>
        <div className="inputCont">
          <Input className="postsinput" placeholder="" allowClear onChange={onChange} />
          <div className="search-btn" onClick={postSearch}></div>
        </div>
        <div className="login-and-ham">
          <div className="login">      
            <UserInfo onClick={() => setIsLoginTouch(!isLoginTouch)} isOnTouch={isLoginTouch}/>
          </div>
          <HamMenu onClick={() => setIsHamTouch(!isHamTouch)} isOnTouch={isHamTouch}/>
        </div>
      </header>
      <Drawer 
        title=" "
        placement={"right"}
      
        closable={false}
        onClose={handleCloseHamDrawer}
        visible={isHamTouch}
       
        width={"100%"}
        zIndex={99}
        bodyStyle={{backgroundColor: "#3D0C08"}}
        headerStyle={{backgroundColor: "#3D0C08", color: "#fff", border: "none"}}
      >
        <div className="post-nav-cont">
          <PostNavBtnWhite to="/posts">論壇</PostNavBtnWhite>
          <PostNavBtnWhite to="/map">地圖</PostNavBtnWhite>
          <PostNavBtnWhite to="/knowledge">科普</PostNavBtnWhite>
        </div>
      </Drawer>
      <Drawer 
        title=" "
        placement={"right"}
      
        closable={false}
        onClose={handleCloseLoginDrawer}
        visible={isLoginTouch}
       
        width={"100%"}
        zIndex={99}
        bodyStyle={{backgroundColor: "#3D0C08"}}
        headerStyle={{backgroundColor: "#3D0C08", color: "#fff", border: "none"}}
      >
        <LoginCard />
      </Drawer>
    </>
  );
}
