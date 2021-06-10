import { useContext } from "react";
import { useRouter } from 'next/router'
import { Row, Col, Spin } from "antd";
import { StoreContext } from "../store";


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
                xl={{ span: 8 }}
                xxl={{ span: 6 }}
              >
               <div className="A">aaaaaaaaaaaaaaaaaaaaaaaaaa</div>


              </Col>
              <Col
                sm={{ span: 12 }}
                xl={{ span: 8 }}
                xxl={{ span: 6 }}
              >
  <div className="B">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
              </Col>
          
          </Row>
    </div>
  );
}