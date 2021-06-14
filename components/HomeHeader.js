import { useContext } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import { StoreContext } from "../store";
import Image from 'next/image'
import UserInfo from './UserInfo'

export default function HomeHeader({ title }) {
  const { dispatch } = useContext(StoreContext);
  const router = useRouter()

  //   const onClickHeader = () => {
  //     setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
  //     router.push("/");
  //   };

  return (
    <header className="homeHeader">
      <Link href="/" >
        <div className="logo">

        </div>
      </Link>
      <div className="login">
        <UserInfo />
      </div>

    </header>
  );
}
