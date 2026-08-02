import { BsHeartFill } from "react-icons/bs"
import { Link } from "react-router"
import { jwtDecode } from "jwt-decode"
export default function Blog({blog}){
    const token = localStorage.getItem("admintoken")
    const user = jwtDecode(token)
    console.log(user)
    const date = new Date(blog.dateTime)
    return user.username === blog.userID && <Link to={"/post/"+blog.id}  className="blog">
        <h1 data-fulltitle={blog.title}>{blog.title}</h1>
        <p dangerouslySetInnerHTML={{__html:blog.text}}></p>
        <div><span><BsHeartFill/>{blog.likes}</span><span>{date.toLocaleDateString("en-GB")}</span></div>
        <div>
        <button className="button" onClick>DELETE</button><button className="button">{blog.isPublic ? "Retract" : "Publish"}</button></div>
    </Link>
}