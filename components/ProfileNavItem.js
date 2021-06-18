import { useContext } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { StoreContext } from "../store";
import { logoutFromFirebase } from "../actions";

export default function ProfileNavItem(props) {
    const { children, onClick, to, className, activeClassName, logOut } = props;
    const { state, dispatch } = useContext(StoreContext);
    const router = useRouter();

    const handleLogout = () => {
        logoutFromFirebase(dispatch);
        router.push("/");
    };

    return (
        !logOut? (
            <Link href="/profile/[page_name]" as={to}>
                <div
                onClick={onClick}
                className={`
                    ${className} 
                    ${state.profileNavBar.activeItem === to ? activeClassName : ""}`}
                >   
                    {/* <div className={`know-item-div ${state.profileNavBar.activeItem === to ? "know-item-div--active" : ""} `}>
                        <img src="/images/navbar-noodle.png" className="know-item-img" />
                    </div> */}
                    <p>{children}</p>
                </div>
            </Link>
        ) : (
            <div
                onClick={handleLogout}
                className="profile-logout"
            >   
                {/* <div className={`know-item-div ${state.profileNavBar.activeItem === to ? "know-item-div--active" : ""} `}>
                    <img src="/images/navbar-noodle.png" className="know-item-img" />
                </div> */}
                <p>{children}</p>
            </div>
        )
    );
}