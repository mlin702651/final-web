import React, { useContext, useEffect } from "react";
import { StoreContext } from "../store";

export default function KnowledgeArticle() {
    const { state: { knowledgePage: { article }, requestKnowledge: { loading } } } = useContext(StoreContext);


    return (
        <>
            {loading? (
                <div></div>
            ):(
                <div className="know-all">
                    <div className="know-main">
                        <div className="know-sect">{article.sect}</div>
                        <div className="know-detail">{article.text}</div>
                    </div>
                    <div className="know-recommend">
                        {article.recommend.map(tag => (
                            <div key={tag} className="know-tag">{`#${tag}`}</div>
                        ))}
                    </div>
                </div>
            )}
        </>
        
    )
}