import { Link } from "react-router";

export default function Header({location,isSignedIn}) {
    return <header>
        <h1>POURBLOG</h1>
        {!isSignedIn ? <div>
            <Link to={"login"} id={location.pathname === "/login" ? "selected" : ""}>
            LOG IN
            </Link>
            <Link to={"signup"} id={location.pathname === "/signup" ? "selected" : ""}>
            SIGN UP
            </Link>
        </div> : <div>
            <Link to={"logout"}>
            LOG OUT
            </Link>
        </div>}
    </header>
}