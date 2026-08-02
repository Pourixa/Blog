import Footer from "./footer";
import Header from "./header";
import { Link } from "react-router";
import { useRouteError } from "react-router";


export default function ErrorElem() {
    const error = useRouteError();
    console.log(error)
    return <>
        <Header/>
        <main>
            <div className="error">
                <h1>{error.status}</h1>
                <h2>{error.statusText}</h2>
                <Link to={"/"}>HOME</Link>
            </div>
        </main>
        <Footer/>
    </>
}