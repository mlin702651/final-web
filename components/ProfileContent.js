import { useContext } from "react";
import { useRouter } from 'next/router'
import { Row, Col, Spin } from "antd";
import { StoreContext } from "../store";

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
          sm={{ span: 6 }}
          xl={{ span: 6 }}
          xxl={{ span: 6 }}
        >

        </Col>
        <Col
          sm={{ span: 18 }}
          xl={{ span: 18 }}
          xxl={{ span: 18 }}
        >
         
        </Col>
      </Row>
    </div>
  );
}