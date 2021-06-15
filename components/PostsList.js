import { useContext } from "react";
import { useRouter } from 'next/router'
import { Row, Col, Spin } from "antd";
import { StoreContext } from "../store";
import PostAreaList from "/components/PostAreaList"
import HomeNav from "/components/HomeNav"
import PostsEachCity from "./PostsEachCity"
import { areaClicked } from "../actions"
import PostCard from "./PostCard"
import moment from 'moment'
export default function PostsList({postsJson}) {
  const { state: { area: {northClick,westClick,eastClick,southClick
  } }, dispatch } = useContext(StoreContext);
  const router = useRouter()
  console.log("postsJson=")
  console.log(postsJson.allPosts)

  //   const onClickHeader = () => {
  //     setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
  //     router.push("/");
  //   };
  const areaOnClick = () => {

    
  };
  var data = [moment(postsJson.allPosts[0].date), moment(postsJson.allPosts[1].date), moment(postsJson.allPosts[2].date)]

const result = postsJson.allPosts.sort((a,b) => moment(a.date).diff(moment(b.date)))  // change to b.diff(a) for desc

console.log(result)
  console.log(moment().format('YYYY-MM-DD HH:mm:ss'))
  return (
    <div className="post-list">
      {



      }
        
{/*     
      <img
          // style={{ width: '100%' }}
          src="/images/hover-img.png"
          className={northClick&&eachArea.area=="北部"||westClick&&eachArea.area=="中部"||southClick&&eachArea.area=="南部"||eastClick&&eachArea.area=="東部"? "area-slected-img area-slected-img-off" :"area-slected-img area-slected-img-on" 
           
          }
          alt="post" 
        />
          <div className="area" onClick={areaOnClick}>
        {eachArea.area}
        <div className="tri"></div>
      </div>
      <div className="citys-cont">
      {
        eachArea.citys.map(eachCity => (
          <PostsEachCity key={eachCity.city} city={eachCity.city} area={eachArea.area}></PostsEachCity>

        )
        )
      }
      </div> */}
    </div>
  );
}