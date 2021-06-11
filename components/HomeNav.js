import { useContext,useState } from "react";
import { useRouter } from 'next/router'
import { Row, Col, Spin } from "antd";
import { StoreContext } from "../store";
import Link from 'next/link'
import Image from 'next/image'
export default function HomeNav({ title }) {
  const { dispatch } = useContext(StoreContext);
  const router = useRouter()
  const [navhover, setNavhover] = useState(0);
//   const onClickHeader = () => {
//     setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
//     router.push("/");
//   };
const onClick = () => {
console.log("navclick")
};
  return (
    <div className="home-nav">
       <img
                    // style={{ width: '100%' }}
                    src= "/images/hover-img.png"
                    
                    className={ navhover===0?"hover-img hover-img-no":
                    navhover===1?"hover-img hover-img-posts":
                    navhover===2?"hover-img hover-img-map":
                    navhover===3?"hover-img hover-img-know":""
                  }
                    alt="post" />
                    
 <Link href="/posts" >
        <div
      onMouseEnter={() => setNavhover(1)}
      onMouseLeave={() => setNavhover(0)}
          onClick={onClick}
          className="nav-item nav-item-post nav-top"
        >
 論壇
        </div>
      </Link>
      <Link href="/map" >
        <div
          onMouseEnter={() => setNavhover(2)}
          onMouseLeave={() => setNavhover(0)}
          onClick={onClick}
          className="nav-item"
        >
 地圖
        </div>
      </Link>
      <Link href="/knowledge" >
        <div
          onMouseEnter={() => setNavhover(3)}
          onMouseLeave={() => setNavhover(0)}
          onClick={onClick}
          className="nav-item"
        >
 科普
        </div>
      </Link>
    </div>
  );
}