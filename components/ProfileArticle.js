import React, { useContext, useEffect } from "react";
import { StoreContext } from "../store";

export default function ProfileArticle() {
    const { state: { profilePage: { article }, requestMyPosts: { loading } }, dispatch } = useContext(StoreContext);

    return (
        <>
            
        </>
        
    )
}