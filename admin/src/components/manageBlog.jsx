import BlogHolder from "./blogHolder";
import { Navigate, useOutletContext } from "react-router";
export default function Manage() {
    const isLoggedIn = useOutletContext() 
    if(!isLoggedIn)
        return <Navigate to={"login"}/>
    return <main>
        <div id="blogsList">
            <BlogHolder/>
            <BlogHolder/>
            <BlogHolder/>
            <BlogHolder/>
            <BlogHolder/>
        </div>     
    </main>
}