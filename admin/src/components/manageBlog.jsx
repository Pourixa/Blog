import BlogHolder from "./blogHolder";
import { Navigate } from "react-router";
export default function Manage() {
    const token = localStorage.getItem("admintoken")
    if(!token)
        return <Navigate to={"/login"}/>
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