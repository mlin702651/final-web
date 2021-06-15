import { useContext } from "react";
import { useRouter } from 'next/router'
import { Row, Col, Spin } from "antd";
import { StoreContext } from "../store";
import PostAreaList from "/components/PostAreaList"
import PostsList from "./PostsList"

export default function PostsContent({ title }) {
  const { dispatch } = useContext(StoreContext);
  const router = useRouter()

  //   const onClickHeader = () => {
  //     setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
  //     router.push("/");
  //   };

  return (
    <div className="homeContent">
      <Row >

        <Col
          sm={{ span: 5 }}
          xl={{ span: 5 }}
          xxl={{ span: 5 }}
        >
          <PostAreaList></PostAreaList>


        </Col>
        <Col
          sm={{ span: 14 }}
          xl={{ span: 14 }}
          xxl={{ span: 14 }}
        >
         <PostsList></PostsList>
        </Col>
        <Col
          sm={{ span: 5}}
          xl={{ span: 5 }}
          xxl={{ span: 5 }}
        >
          </Col>

      </Row>
    </div>
  );
}