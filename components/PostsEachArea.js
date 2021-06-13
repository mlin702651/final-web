import { useContext } from "react";
import { useRouter } from 'next/router'
import { Row, Col, Spin } from "antd";
import { StoreContext } from "../store";
import PostAreaList from "/components/PostAreaList"
import HomeNav from "/components/HomeNav"
import PostsEachCity from "./PostsEachCity"
import { areaClicked } from "../actions"
export default function PostsEachArea(props) {
  const { state: { area: {
    northClick,
    westClick,
    eastClick,
    southClick
  } }, dispatch } = useContext(StoreContext);
  const router = useRouter()
  const { eachArea } = props
  //   const onClickHeader = () => {
  //     setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
  //     router.push("/");
  //   };
  const areaOnClick = () => {
    console.log(eachArea)
    areaClicked(dispatch, eachArea)
    console.log(eastClick)
  };
  const cityOnClick = () => {


  }
  return (
    <div className="post-each-area" onClick={areaOnClick}>
      <div className="area">{eachArea.area}

      </div>
      {
        eachArea.citys.map(eachCity => (
          <PostsEachCity key={eachCity.city} city={eachCity.city} area={eachArea.area}></PostsEachCity>

        )
        )
      }
    </div>
  );
}