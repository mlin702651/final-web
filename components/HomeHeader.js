import { useContext } from "react";
import { useRouter } from 'next/router'

import { StoreContext } from "../store";


export default function HomeHeader({ title }) {
  const { dispatch } = useContext(StoreContext);
  const router = useRouter()

//   const onClickHeader = () => {
//     setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
//     router.push("/");
//   };

  return (
    <header className="homeHeader">
      <div className="logo">
        
      </div>
<div className="login">
    Login
</div>
 
    </header>
  );
}
