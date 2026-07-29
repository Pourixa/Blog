import { Link } from "react-router"

export default function Header() {
        return <header>
            <Link to={"/"}>
                <span>
                    <h1>
                        POURBLOG
                    </h1>
                    <h4>ADMIN</h4>
                </span>
            </Link>
            <Link to={"/new"}>
            New Blog
            </Link>
            <Link to={"logout"}>
            LOGOUT
             </Link>
        </header>
    }