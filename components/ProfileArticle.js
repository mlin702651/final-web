import React, { useContext, useEffect } from "react";
import { StoreContext } from "../store";
import PostCard from "./PostCard";

export default function ProfileArticle() {
    const { state: { profilePage, profileNavBar, requestMyPosts, requestCollectionPosts} , dispatch } = useContext(StoreContext);

    return (
        <>
            {profileNavBar.activeItem === "/profile/myPosts" ? (
                <>
                    {requestMyPosts.loading? (
                        <div className="loading-div map-loadimg-div">
                            <img src="/images/loading.gif" alt="loading... " />
                        </div>
                    ):(
                        <div className="profile-post">
                            {profilePage.posts.map((post) => (
                                <div className="each-post" style={{position: "relative"}}>
                                    <PostCard eachPost={post} key={post.id} visiblePostsNum={100} postIndex={0} />
                                    <div className="delete-post">
                                        <p>刪除貼文</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <>
                    {requestCollectionPosts.loading? (
                        <div className="loading-div map-loadimg-div">
                            <img src="/images/loading.gif" alt="loading... " />
                        </div>
                    ):(
                        <></>
                    )}
                </>
            )}
        </>
    )
}