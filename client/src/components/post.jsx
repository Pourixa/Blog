import { useEffect, useState } from "react"
import { useParams } from "react-router"
import makeURL from "../../lib/url"
import { VscLoading } from "react-icons/vsc"
import { BiComment } from "react-icons/bi"
import { BsHeartFill } from "react-icons/bs"
import Comment from "./comment"
import "../styles/post.css"
export default function Post() {
    const params = useParams()
    const [loading,setLoading] = useState(true)
    const [blog,setBlog] = useState(null)
    const [date,setDate] = useState(null)
useEffect(() => {
    async function getBlog() {
        const data = await fetch(makeURL('/post/' + params.id))
        const comments = await fetch(makeURL("/post/"+params.id+"/comments"))
        if (data.ok && comments.ok) {
            const blogData = await data.json()
            blogData.comments = await comments.json()
            setBlog(blogData)
            setDate(new Date(blogData.dateTime))
            setLoading(false)
        } else {
            throw new Error()
        }
    }

    getBlog()
}, [params.id])


return <main>
    {loading ? <VscLoading/> : <div id="postView">
    <div>
        <h1>{blog.title}</h1>
        <div>
            <span><BiComment/>{blog.comments.length}</span>
            <span><BsHeartFill/>{blog.likes}</span>
        </div>
        <h4>{date.toLocaleDateString("en-GB")}</h4>
    </div>
    <p dangerouslySetInnerHTML={{__html:blog.text}}></p>
    <h4> - {blog.userID}</h4>
    <div className="comments">
        {blog.comments.length === 0 ? <h4>No comments yet.</h4> : 
        <>
        {blog.comments.map(comment => {
            return <Comment comment={comment} key={comment.id}/>
        } )}
        </>}
        <form method="post" action={makeURL("/post/"+params.id+"/comments")}>
            <textarea required name="text" id="comment" placeholder="NEW COMMENT"></textarea>
            <button className="button">COMMENT </button>
        </form>
    </div>
            <button className="button" onClick={async () => {
            const res = await fetch(makeURL('/post/' + params.id + "/like"), {method:"post"})
            if (res.ok)
                location.reload()
            else if (res.status === 401)
                location.href = "/login"
            else
                throw new Error()
        }}>LIKE THIS POST</button>
    </div>}
</main>
}