import { useContext } from "react";
import { useRouter } from 'next/router'
import { Row, Col, Spin } from "antd";
import { StoreContext } from "../store";
import Image from 'next/image'

export default function HomePosts({ title }) {
  const { dispatch } = useContext(StoreContext);
  const router = useRouter()

//   const onClickHeader = () => {
//     setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
//     router.push("/");
//   };

  return (
    <div className="home-posts">
      <div className="home-post-demo">
 <Image
                    style={{ width: '100%' }}
                    src= "/images/1623324543735.jpg"
                    width={'800px'}
                    height={'900px'}
                    alt="post" />
</div>
    </div>
  );
}