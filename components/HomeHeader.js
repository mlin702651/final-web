import { useContext, useState } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Drawer } from 'antd';
import { StoreContext } from "../store";
import Image from 'next/image'
import UserInfo from './UserInfo'
import LoginCard from './LoginCard'

export default function HomeHeader({ title }) {
  const { dispatch } = useContext(StoreContext);
  const router = useRouter()

  const [isLoginTouch, setIsLoginTouch] = useState(false);
  const handleCloseLoginDrawer = () => setIsLoginTouch(false);
  //   const onClickHeader = () => {
  //     setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
  //     router.push("/");
  //   };

  return (
    <>
      <header className="homeHeader">
        <Link href="/" >
          <div className="logo">

          </div>
        </Link>
        <div className="login">
          <UserInfo onClick={() => setIsLoginTouch(!isLoginTouch)} isOnTouch={isLoginTouch} />
        </div>
      </header>
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
