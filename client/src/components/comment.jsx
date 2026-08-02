import { useState } from "react";
import makeURL from "../../lib/url"
import { jwtDecode } from "jwt-decode";

export default function Comment({pcomment,postID}) {
    const [comment,setComment] = useState({...pcomment})
   const date = new Date(comment.dateTime)
   const [editing,setEditing] = useState(false)
    const token = localStorage.getItem("token")
const decoded = token ? jwtDecode(token) : null;
return <div className="comment">
    <div><h4>{comment.userID}</h4><span>{date.toLocaleDateString("en-GB")}</span></div>
    {!editing ? <p>{comment.text}</p>: <textarea onChange={(e) => setComment(prev => ({...prev , text:e.target.value})) } style={{fontFamily:"roboto"}}>{comment.text}</textarea>}
    {decoded?.username === comment.userID && <div><button onClick={async () => {
        const res = await fetch(makeURL("/post/"+postID+"/comments/"+comment.id),{method:"delete",headers:{
            "Authorization": "Bearer "+ localStorage.getItem("token"),
        }})
        if(res.ok)
            location.reload()
    }} className="button" >DELETE</button>

    {!editing ? <button className="button" onClick={async () => {
        setEditing(true)
    }}>EDIT</button> : <button className="button" onClick={async () => {
        const token = localStorage.getItem("token")
        await fetch(makeURL("/post/"+postID+"/comments/"+comment.id),{method:"put",headers:{
            "Authorization": "Bearer "+ token,"Content-Type":"application/json"
        },body:JSON.stringify({
            text:comment.text
        })})
        setEditing(false)
    }}>OK</button> }
    </div>}
</div>
}