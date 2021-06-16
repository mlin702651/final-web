import { useContext } from "react";
import Link from 'next/link'
import { StoreContext } from "../store";
import { setKnowledgePage } from "../actions";

export default function KnowledgeNavItem(props) {
  const { children, to, className, activeClassName, onClose } = props;
  const { state, dispatch } = useContext(StoreContext);

  const onClick = () => {
    setKnowledgePage(dispatch, to);
  };

  return (
        <Link href="/knowledge/[page_name]" as={to}>
            <div
            onClick={onClick}
            className={`
                ${className} 
                ${state.navBar.activeItem === to ? activeClassName : ""}`}
            >
                {children}
            </div>
        </Link>
  );
}