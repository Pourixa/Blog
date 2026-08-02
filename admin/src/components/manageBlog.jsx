import { useEffect, useState } from "react";
import BlogHolder from "./blogHolder";
import { Navigate } from "react-router";
import makeURL from "../../lib/url";
import Blog from "./blogComponent";
import "../styles/home.css"
export default function Manage() {
    const [blogs,setBlogs] = useState([]) 
    const [loading,setLoading] = useState(true)
    const token = localStorage.getItem("admintoken")
    useEffect(()=> {
        async function getBlogs()  {
            const data =await fetch(makeURL('/post'),{headers:{"authorization":"Bearer "+token}})
            if (data.ok) {
            setBlogs(await data.json())
            setLoading(false)
            } else {
                throw new Error()
            }
        }
        getBlogs()
    },[])
    if(!token) return <Navigate to={"/login"}/>

    return <main>
        <div id="blogsList">
                {loading ? <><BlogHolder/><BlogHolder/><BlogHolder/><BlogHolder/><BlogHolder/> </>: 
                blogs.map(blog => {
                return <Blog blog={blog} key={blog.id}/>
            })}
        </div>     
    </main>
}