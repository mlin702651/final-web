import { useEffect, useContext } from "react";
import { useRouter } from 'next/router'

import { StoreContext } from "../store"

export default function UserInfo({onClick, isOnTouch}){
    const { state: { userSignin : { userInfo, remember } } } = useContext(StoreContext);

    useEffect(() => {
        if(remember)
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
        else
            localStorage.removeItem("userInfo");
    }, [userInfo, remember]);

    return (
        <>
            {isOnTouch?(
                <span onClick={onClick} className="ham-menu show-mobile">
                    <span className="ham-menu-bar1 ham-menu-bar1--touch"></span>
                    <span className="ham-menu-bar2 ham-menu-bar2--touch"></span>
                    <span className="ham-menu-bar3 ham-menu-bar3--touch"></span>
                </span>
            ):(
                <div onClick={onClick} className="login-btn">
                    <img
                        src="/images/user-btn.png"
                        className="login-btn-img"
                        alt="post" 
                    />
                    <p className="user-btn-text">請登入</p>
                </div>
            )}
            
        </>
    );
}