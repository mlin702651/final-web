import { useContext } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import { StoreContext } from "../store";
import Image from 'next/image'
import { Input } from 'antd';
export default function HomeHeader({ title }) {
  const { dispatch } = useContext(StoreContext);
  const router = useRouter()

//   const onClickHeader = () => {
//     setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
//     router.push("/");
//   };
const onChange = e => {
  console.log(e);
};
const postSearch=()=>{
  console.log("Sss");
}
  return (
    <header className="homeHeader">
       <Link href="/" >
      <div className="logo">
        
      </div>
      </Link>
      <div className="inputCont">
      <Input className="postsinput" placeholder="" allowClear onChange={onChange} />
      <div className="search-btn" onClick={postSearch}></div>
      </div>
<div className="login">

<Image
                    style={{ width: '50px' }}
                    src= "/images/user-btn.png"
                    width={'60px'}
                    height={'60px'}
                    alt="post" />
</div>
 
    </header>
  );
}
