import { useContext } from "react";
import { useRouter } from 'next/router'
import { Row, Col, Spin } from "antd";
import { StoreContext } from "../store";


export default function HomePosts({ title }) {
  const { dispatch } = useContext(StoreContext);
  const router = useRouter()

//   const onClickHeader = () => {
//     setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
//     router.push("/");
//   };

  return (
    <div className="home-posts">
 
    </div>
  );
}