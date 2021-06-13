import { useContext } from "react";
import { useRouter } from 'next/router'
import { Row, Col, Spin } from "antd";
import { StoreContext } from "../store";
import HomePosts from "/components/HomePosts"
import HomeNav from "/components/HomeNav"

export default function HomeContent({ title }) {
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
          xs={{ span: 24 }}
          sm={{ span: 24 }}          
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          <HomePosts />


        </Col>
        <Col
          className="home-nav-col"
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 12 }}
        >
          <HomeNav />
        </Col>

      </Row>
    </div>
  );
}