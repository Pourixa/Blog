import "../styles/home.css"
import hero from "../assets/hero.png"
import BlogHolder from "./blogHolder"
import { useEffect, useState } from "react"
import Blog from "./blogComponent"
import makeURL from "../../lib/url"


export default function Home() {

    const [blogs,setBlogs] = useState([]) 
    const [loading,setLoading] = useState(true)
    useEffect(()=> {
        async function getBlogs()  {
            const data =await fetch(makeURL('/post'))
            if (data.ok) {
            setBlogs(await data.json())
            setLoading(false)
            } else {
                throw new Error()
            }
        }
        getBlogs()
    },[])

    return <main>
        <div id="hero">
            <img src={hero} alt="hero" />
            <a href="#blogsList" className="button">READ MORE</a>
        </div>
        <div id="blogsList">
            {loading ? <><BlogHolder/><BlogHolder/><BlogHolder/><BlogHolder/><BlogHolder/> </>: blogs.map(blog => {
                return <Blog blog={blog} key={blog.id}/>
            })}
        </div>
    </main>
}