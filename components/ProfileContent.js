import { useContext } from "react";
import { useRouter } from 'next/router'
import { Row, Col, Spin } from "antd";
import { StoreContext } from "../store";
import ProfileNavBar from "./ProfileNavBar";
import ProfileArticle from "./ProfileArticle";

export default function PostsContent() {
  
  const router = useRouter()

  return (
    <div className="homeContent">
      <Row >

        <Col
          xs={{ span: 0 }}
          sm={{ span: 0 }}          
          md={{ span: 0 }}
          lg={{ span: 6 }}
        >
          <ProfileNavBar isMobile={false} />
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}          
          md={{ span: 24 }}
          lg={{ span: 18 }}
        >
          <ProfileArticle />
        </Col>
      </Row>
    </div>
  );
}