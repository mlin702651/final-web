import { useContext } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import { StoreContext } from "../store";
import Image from 'next/image'

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
        <Image
          style={{ width: '50px' }}
          src="/images/user-btn.png"
          width={'60px'}
          height={'60px'}
          alt="post" />
      </div>

    </header>
  );
}
