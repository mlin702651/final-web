import { useContext, useState } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import { StoreContext } from "../store";
import Image from 'next/image'
import { Input, Drawer } from 'antd';
import HamMenu from '../components/HamMenu';
import PostNavBtnWhite from './PostNavBtnWhite';
export default function PostsHeader({ title }) {
  const { dispatch } = useContext(StoreContext);
  const router = useRouter()

  //   const onClickHeader = () => {
  //     setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
  //     router.push("/");
  //   };
  const onChange = e => {
    console.log(e);
  };
  const postSearch = () => {
    console.log("Sss");
  }

  const [isOnTouch, setIsOnTouch] = useState(false);
  const handleCloseDrawer = () => setIsOnTouch(false);

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
            <Image
              style={{ width: '50px' }}
              src="/images/user-btn.png"
              width={'60px'}
              height={'60px'}
              alt="post" />
          </div>
          <HamMenu onClick={() => setIsOnTouch(!isOnTouch)} isOnTouch={isOnTouch}/>
        </div>
      </header>
      <Drawer 
        title=" "
        placement={"right"}
      
        closable={false}
        onClose={handleCloseDrawer}
        visible={isOnTouch}
       
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
    </>
  );
}
