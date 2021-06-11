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
                sm={{ span: 12 }}
                xl={{ span: 12 }}
                xxl={{ span: 12 }}
              >
              <HomePosts></HomePosts>


              </Col>
              <Col
                sm={{ span: 12 }}
                xl={{ span: 12 }}
                xxl={{ span: 12 }}
              >
  <HomeNav></HomeNav>
              </Col>
          
          </Row>
    </div>
  );
}