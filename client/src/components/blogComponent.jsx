import { BsHeartFill } from "react-icons/bs"
import { Link } from "react-router"
export default function Blog({blog}){
    const date = new Date(blog.dateTime)
    return <Link to={"/post/"+blog.id}  className="blog">
        <h1 data-fulltitle={blog.title}>{blog.title}</h1>
        <p dangerouslySetInnerHTML={{__html:blog.text}}></p>
        <div><span><BsHeartFill/>{blog.likes}</span><span>{date.toLocaleDateString("en-GB")}</span></div>
    </Link>
}