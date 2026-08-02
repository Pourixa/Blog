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
    const [likes,setLikes] = useState(null)

useEffect(() => {
    async function getBlog() {
        const data = await fetch(makeURL('/post/' + params.id))
        const comments = await fetch(makeURL("/post/"+params.id+"/comments"))
        if (data.ok && comments.ok) {
            const blogData = await data.json()
            blogData.comments = await comments.json()
            setBlog(blogData)
            setDate(new Date(blogData.dateTime))
            setLikes(blogData.likes)
            setLoading(false)
        } else {
            throw new Error()
        }
    }

    getBlog()
}, [params.id])

return <main>
    {loading ? <VscLoading id="loading"/> : <div id="postView">
    <div>
        <h1>{blog.title}</h1>
        <div>
            <span><BiComment/>{blog.comments.length}</span>
            <span><BsHeartFill/>{likes}</span>
        </div>
        <h4>{date.toLocaleDateString("en-GB")}</h4>
    </div>
    <p dangerouslySetInnerHTML={{__html:blog.text}}></p>
    <h4> - {blog.userID}</h4>
    <div className="comments">
        {blog.comments.length === 0 ? <h4>No comments yet.</h4> : 
        <>
        {blog.comments.map(comment => {
            return <Comment postID={params.id} pcomment={comment} key={comment.id}/>
        } )}
        </>}
        <form method="post" action={makeURL("/post/"+params.id+"/comments")} onSubmit={async (e) => {
            e.preventDefault()
            const data = new FormData(e.target)
            const res = await fetch(makeURL('/post/'+params.id+'/comments'),{method:"post",headers:{"Content-Type":"application/json" , "Authorization": "Bearer " + localStorage.getItem("token")},body:JSON.stringify(Object.fromEntries(data.entries()))})
            if (res.ok)
                location.reload()
            else if (res.status === 401)
                location.href = "/login"
            else
                throw new Error()
        }}>
            <textarea required name="text" id="comment" placeholder="NEW COMMENT"></textarea>
            <button className="button">COMMENT </button>
        </form>
    </div>
    <button className="button" onClick={async () => {
            const res = await fetch(makeURL('/post/' + params.id + "/like"), {method:"post",headers:{"Content-Type":"application/json" , "Authorization": "Bearer " + localStorage.getItem("token")}})
            if (res.ok)
                   setLikes(likes + 1)
            else if (res.status === 401)
                location.href = "/login"
            else
                throw new Error()
        }}>SHOW YOUR LOVE FOR THIS POST</button>
    </div>}
</main>
}