import { useContext } from "react";
import { StoreContext } from "../store";

export default function KnowledgeArticle() {
    const { state: { knowledgePage: { article }, requestKnowledge: { loading } } } = useContext(StoreContext);

    return (
        <div>
            <div>{article.sect}</div>
            <div>{article.text}</div>
            <div>{article.recommend}</div>
        </div>
    )
}