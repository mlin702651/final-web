import React, { useContext, useEffect } from "react";
import { StoreContext } from "../store";
import PostCard from "./PostCard";
import postCard from "./PostCard"

export default function ProfileArticle() {
    const { state: { profilePage: { posts }, requestMyPosts: { loading } }, dispatch } = useContext(StoreContext);

    return (
        <div className="profile-post">
            {posts.map((post) => (
                <PostCard eachPost={post} key={post.id} />
            ))}
        </div>
        
    )
}