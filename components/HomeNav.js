import { useContext } from "react";
import { useRouter } from 'next/router'
import { Row, Col, Spin } from "antd";
import { StoreContext } from "../store";
import Link from 'next/link'

export default function HomeNav({ title }) {
  const { dispatch } = useContext(StoreContext);
  const router = useRouter()

//   const onClickHeader = () => {
//     setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
//     router.push("/");
//   };
const onClick = () => {
console.log("navclick")
};
  return (
    <div className="home-nav">
 <Link href="/posts" >
        <div
          onClick={onClick}
          className="nav-item"
        >
 論壇
        </div>
      </Link>
    </div>
  );
}