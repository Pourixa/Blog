import { Link } from "react-router";

export default function Header({location}) {
    const token = localStorage.getItem("token")
    return <header>
        <h1>POURBLOG</h1>
        {!token ? <div>
            <Link to={"login"} id={location.pathname === "/login" ? "selected" : ""}>
            LOG IN
            </Link>
            <Link to={"signup"} id={location.pathname === "/signup" ? "selected" : ""}>
            SIGN UP
            </Link>
        </div> : <div>
            <Link onClick={localStorage.clear}>
            LOG OUT
            </Link>
        </div>}
    </header>
}