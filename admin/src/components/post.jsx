import { useEffect, useState } from "react"
import { useParams } from "react-router"
import makeURL from "../../lib/url"
import { VscLoading } from "react-icons/vsc"
import { BiComment } from "react-icons/bi"
import { BsHeartFill } from "react-icons/bs"
import Comment from "./comment"
import { Editor } from '@tinymce/tinymce-react';
import "../styles/post.css"
export default function Post() {
    const params = useParams()
    const [loading,setLoading] = useState(true)
    const [blog,setBlog] = useState(null)
    const [date,setDate] = useState(null)
    const [likes,setLikes] = useState(null)
    const [blogText,setBlogText] = useState(null)
    const [blogTitle,setBlogTitle] = useState(null)
    const token = localStorage.getItem("admintoken")
useEffect(() => {
    async function getBlog() {
        const data = await fetch(makeURL('/post/' + params.id),{headers:{
            Authorization:"Bearer " + token
        }})
        const comments = await fetch(makeURL("/post/"+params.id+"/comments"))
        if (data.ok && comments.ok) {
            const blogData = await data.json()
            blogData.comments = await comments.json()
            setBlog(blogData)
            setDate(new Date(blogData.dateTime))
            setLikes(blogData.likes)
            setBlogText(blogData.text)
            setBlogTitle(blogData.title)
            setLoading(false)
        } else {
            throw new Error()
        }
    }

    getBlog()
}, [params.id])

return <main>
    {loading ? <VscLoading id="loading"/> : <form id="blog" onSubmit={(e) => {e.preventDefault()}} id="postView">
    <div>
        <input type="text" name="title" value={blogTitle} onChange={e => setBlogTitle(e.target.value)}/>
        <div>
            <span><BiComment/>{blog.comments.length}</span>
            <span><BsHeartFill/>{likes}</span>
        </div>
        <h4>{date.toLocaleDateString("en-GB")}</h4>
    </div>
     <Editor
     value={blogText}
     onEditorChange={e => setBlogText(e)}
                        apiKey={import.meta.env.VITE_TINY_KEY}
                        init={{
                            plugins: [
                            // Core editing features
                            'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                                                    ],
                            toolbar: 'undo redo | tinymceai-chat tinymceai-quickactions tinymceai-review | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                            tinycomments_mode: 'embedded',
                            tinycomments_author: 'Author name',
                            mergetags_list: [
                            { value: 'First.Name', title: 'First Name' },
                            { value: 'Email', title: 'Email' },
                            ],
                            tinymceai_token_provider: async () => {
                            await fetch(`https://demo.api.tiny.cloud/1/{/auth/random`, { method: "POST", credentials: "i}clude" });
                            return { token: await fetch(`https://demo.api.tiny.cloud/1/${import.meta.env.VITE_TINY_KEY}/jwt/tinymceai`, { credentials: "include" }).then(r => r.text()) };
                            },
                            uploadcare_public_key: 'cc2969598da5a7cdca78',
                        }}
                        />
    <h4> - {blog.userID}</h4>
    <button className="button" onClick={async () => {
    await fetch(makeURL("/post/"+blog.id),{method:"put",headers:{
        "Authorization": "Bearer "+ localStorage.getItem("admintoken"),"Content-Type":"application/json"
    },body:JSON.stringify({text:blogText,title:blogTitle})
    })
    location.reload()
    }}>UPDATE</button>
    <div className="comments">
        {blog.comments.length === 0 ? <h4>No comments yet.</h4> : 
        <>
        {blog.comments.map(comment => {
            return <Comment postID={params.id} pcomment={comment} key={comment.id}/>
        } )}
        </>}
    </div>
    </form>}
</main>
}