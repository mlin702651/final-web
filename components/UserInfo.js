import { useEffect, useContext } from "react";
import { useRouter } from 'next/router'

import { StoreContext } from "../store"

export default function UserInfo(){
    const { state: { userSignin : { userInfo, remember } } } = useContext(StoreContext);
    const router = useRouter()

    const goToProfile = () => {
        router.push("/login?redirect=profile");
    };

    useEffect(() => {
        if(remember)
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
        else
            localStorage.removeItem("userInfo");
    }, [userInfo, remember]);

    return (
        <div className="login-btn" onClick={goToProfile}>
            <img
                src="/images/user-btn.png"
                className="login-btn-img"
                alt="post" 
            />
            <p className="user-btn-text">請登入</p>
        </div>
    );
}