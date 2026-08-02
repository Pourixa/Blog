import { Link } from "react-router";

export default function Header() {

    const token = localStorage.getItem("admintoken")
    return <header>
        <Link to={"/"}>
            <h1>POURBLOG</h1>
        </Link>
        {!token ? <div>
            <Link to={"login"}>
            LOG IN
            </Link>
        </div> : <div>
            <Link onClick={() => {localStorage.clear();location.reload()}}>
            LOG OUT
            </Link>
        </div>}
    </header>
}