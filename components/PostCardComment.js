import { useContext, useState, useEffect, useRef, useCallback, Fragment } from "react";
import { useRouter } from 'next/router'
import { Row, Col, Spin ,Input, Drawer }from "antd";
import { StoreContext } from "../store";
import Image from 'next/image'
import PostAreaList from "/components/PostAreaList"
import HomeNav from "/components/HomeNav"
import { cityClicked } from "../actions";
import DetectableOverflow from 'react-detectable-overflow';
export default function PostCardComment(props) {
  const { state: { area: {
    northClick, westClick, eastClick, southClick, cityClick
  } }, dispatch } = useContext(StoreContext);
  const router = useRouter()

  const [readmore, setReadmore] = useState(false)
  const [readtoggle, setReadtoggle] = useState(false)
  const [bookmarkOrNot,setBookmarkOrNot]=useState(false)
  const [value,setValue]=useState('')
  const domRef = useRef(null)
 
  const { TextArea } = Input;
  const sendComment=()=>{

  }

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
    <div className="post-card-comment">
 
    </div>
  );
}