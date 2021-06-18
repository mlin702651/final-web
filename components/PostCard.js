import { useContext, useState, useEffect, useRef, useCallback, Fragment } from "react";
import { useRouter } from 'next/router'
import { Row, Col, Spin ,Input, Drawer }from "antd";
import { StoreContext } from "../store";
import Image from 'next/image'
import PostAreaList from "/components/PostAreaList"
import HomeNav from "/components/HomeNav"
import { cityClicked } from "../actions";
import DetectableOverflow from 'react-detectable-overflow';
export default function PostCard(props) {
  const { state: { area: {
    northClick, westClick, eastClick, southClick, cityClick
  } }, dispatch } = useContext(StoreContext);
  const router = useRouter()
  const { eachPost } = props
  const [readmore, setReadmore] = useState(false)
  const [readtoggle, setReadtoggle] = useState(false)
  const [bookmarkOrNot,setBookmarkOrNot]=useState(false)
  const domRef = useRef(null)
  const onChange = e => {
    console.log(e);
  };
  const sendComment=()=>{

  }
  useEffect(() => {
    console.log("87")
    checkWidth()
  }, [eachPost]);
  useEffect(() => {
    checkWidth()
  }, []);
  const checkWidth = () => {
    //查看全文有沒有過寬
    //必須是white-space: nowrap;才可以偵測全部段落的長度
    const node = domRef.current
    const clientWidth = node.clientWidth
    const scrollWidth = node.scrollWidth
    console.log("clientWidth: " + clientWidth)
    console.log("scrollWidth: " + scrollWidth)
    if (clientWidth < scrollWidth) {
      setReadmore(true)
    }
  }
  let date1=eachPost.date.split(' ');
 let date2=date1[0].split('-');

 let dateString=`${date2[0]+'/'+date2[1]+'/'+date2[2]}`
 
  // const [text, setText] = useState('');
  //       const [hasEllipsis, setHasEllipsis] = useState(false);
  //       const [needMore, setNeedMore] = useState(false);
  //       const domRef = useRef(null);
  //       const heightRef = useRef(0);
  //       const changeHandle = useCallback(e => {
  //           // setText(e.target.value);
  //           setHasEllipsis(true);
  //       }, [eachPost]);
  //       useEffect(() => {
  //           if(hasEllipsis){
  //               const height = parseInt(getComputedStyle(domRef.current).height);
  //               setNeedMore(height < heightRef.current);
  //               console.log(height)
  //           }else{
  //               heightRef.current = parseInt(getComputedStyle(domRef.current).height);
  //               setHasEllipsis(true);
  //               console.log("000")
  //           }
  //       }, [hasEllipsis]);
  //       useEffect(() => {
  //         console.log("87")
  //         changeHandle()
  //     }, [eachPost]);

  const Readmore = () => {

  }

  console.log(readmore)


  //   const onClickHeader = () => {
  //     setPage(dispatch, "/",  "NORDIC NEST Shopping Cart");
  //     router.push("/");
  //   };
  const cityOnClick = () => {

    cityClicked(dispatch, city, area)
  };
  //   useEffect(() => {
  //     componentDidMount()

  //  }, []);
  //   const componentDidMount =()=> { // 在did mount 中判断是否溢出
  //     const node = this.ref.current  // 判断的dom节点，使用ref
  //     const clientWidth = node.clientWidth
  //     const scrollWidth = node.scrollWidth
  //     if (clientWidth < scrollWidth) {
  //       this.setState({    // 把是否溢出的状态存在state中，之后从state中拿值使用
  //         overflow: true    
  //       })
  //     }
  //   }  // 在普通js中实现，方法一样，取到dom，判断clientWidth 和scrollWidth

  // console.log(city+"在"+area)
  return (
    <div className="post-card">
        <Row >

<Col
  sm={{ span: 19 }}
  xl={{ span: 19 }}
  xxl={{ span: 19 }}
>
<div className="post-restaurant-name">{eachPost.restaurant}</div>
</Col>
<Col
  sm={{ span: 5 }}
  xl={{ span: 5 }}
  xxl={{ span: 5 }}
>
  <div className="post-date-cont"><div className="post-date">{dateString}</div></div>
</Col>
</Row>
    
      <img className="post-image" src={eachPost.image}></img>
      <div className="post-card-text-tags-comments">
      <div className="post-text-cont">
        {/* <DetectableOverflow className="post-text"style="">{eachPost.text}</DetectableOverflow>  */}
        <div ref={domRef} className={readtoggle && readmore ? "post-text" : "post-text post-text-off"}>{eachPost.text}</div>
        {/* {needMore && (<p className="button">展开</p>)} */}
        {readmore && !readtoggle ? (<span className="post-readmore" onClick={() => { setReadtoggle(true) }}>更多內文</span>) : ("")}
      </div>
      <div className="post-tags-and-bookmark-cont">
      <Row >

<Col
  sm={{ span: 20 }}
  xl={{ span: 20 }}
  xxl={{ span:20 }}
>
  <div className="postcard-tags-cont">
    {
      eachPost.tags.map(tag=>(
        <div className="tag">{tag}</div>
      ))
    }
  </div>
</Col>
<Col
  sm={{ span: 4 }}
  xl={{ span: 4 }}
  xxl={{ span: 4 }}
>
  <div className="postcard-bookmark-cont"onClick={()=>setBookmarkOrNot(!bookmarkOrNot)}>
  <div className="bookmark-cont-2">
  {bookmarkOrNot? 
  (<Image
              priority
              src="/images/bookmark_on.png"
              className="bookmark-btn"
              height={28.4}
              width={24}
              alt={name}
            />):(
              <Image
              priority
              src="/images/bookmark.png"
              className="bookmark-btn"
              height={28.4}
              width={24}
              alt={name}
            />
            )

  }
  </div>
     </div>
</Col>
</Row>
      </div>
      <div className="comment-input-cont">
          <Input className="comment-input" placeholder="" allowClear onChange={onChange} />
          <img className="comment-input-btn" onClick={sendComment} src="/images/send_message.png"></img>
        </div>


      </div>
    </div>
  );
}