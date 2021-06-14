import { useContext } from "react";
import { useRouter } from 'next/router'
import { Row, Col, Spin } from "antd";
import { StoreContext } from "../store";
import PostAreaList from "/components/PostAreaList"
import HomeNav from "/components/HomeNav"
import {areaClicked} from "../actions"
export default function PostsEachCity(props) {
  const { state:{area:{
    northClick,
    westClick,
    eastClick,
    southClick
  }},dispatch } = useContext(StoreContext);
  const router = useRouter()
const {city,area}=props
  //   const onClickHeader = () => {
  //     setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
  //     router.push("/");
  //   };
  const areaOnClick = () => {
    console.log(eachArea)
    areaClicked(dispatch,eachArea)
  };







  console.log(city+"在"+area)

  const cityOnClick =()=>{


  }
  console.log(northClick)
  if(area=="北部"){
  return (
    northClick?(<div className="post-each-city"  >{city}
    </div>):(<div className="dsp-n"></div>)
  );
}else if(area=="中部"){
  return (
    westClick?(<div className="post-each-city"  >{city}
    </div>):(<div className="dsp-n"></div>)
  );
}else if(area=="南部"){
  return (
    southClick?(<div className="post-each-city"  >{city}
    </div>):(<div className="dsp-n"></div>)
  );
}else if(area=="東部"){
  return (
    eastClick?(<div className="post-each-city"  >{city}
    </div>):(<div className="dsp-n"></div>)
  );
}else{
  return(<div className="post-each-city">a</div>)
}



}