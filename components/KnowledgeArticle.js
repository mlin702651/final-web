import React, { useContext, useEffect } from "react";
import { StoreContext } from "../store";

export default function KnowledgeArticle() {
    const { state: { knowledgePage: { article }, requestKnowledge: { loading } } } = useContext(StoreContext);

    return (
        <>
            {loading? (
                <div></div>
            ):(
                <div>
                    <div className="know-all-text">
                        <div className="know-sect">{article.sect}</div>
                        <div className="know-detail">{article.text}</div>
                    </div>
                    <div>
                        {/* {[...(article.recommend)].map(tag => (
                            <div className="know-tag">{tag}</div>
                        ))} */}
                    </div>
                </div>
            )}
        </>
        
    )
}