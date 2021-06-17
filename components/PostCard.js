import { useContext } from "react";
import { useRouter } from 'next/router'
import { Row, Col, Spin } from "antd";
import { StoreContext } from "../store";
import PostAreaList from "/components/PostAreaList"
import HomeNav from "/components/HomeNav"
import { cityClicked } from "../actions"
export default function PostCard(props) {
  const { state: { area: {
    northClick,westClick,eastClick,southClick,cityClick
  } }, dispatch } = useContext(StoreContext);
  const router = useRouter()
  const { eachPost } = props
  //   const onClickHeader = () => {
  //     setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
  //     router.push("/");
  //   };
  const cityOnClick = () => {

    cityClicked(dispatch, city, area)
  };
  // console.log(city+"在"+area)
return(
<div className="postCard">


</div>
);
}