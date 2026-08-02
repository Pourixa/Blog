import { useState } from "react";
import makeURL from "../../lib/url"

export default function Comment({pcomment,postID}) {
    const [comment,setComment] = useState({...pcomment})
   const date = new Date(comment.dateTime)
   const [editing,setEditing] = useState(false)
    const token = localStorage.getItem("admintoken")
return <div className="comment">
    <div><h4>{comment.userID}</h4><span>{date.toLocaleDateString("en-GB")}</span></div>
    {!editing ? <p>{comment.text}</p>: <textarea onChange={(e) => setComment(prev => ({...prev , text:e.target.value})) } style={{fontFamily:"roboto"}}>{comment.text}</textarea>}
        <div><button onClick={async () => {
        const res = await fetch(makeURL("/post/"+postID+"/comments/"+comment.id),{method:"delete",headers:{
            "Authorization": "Bearer "+ token,
        }})
        if(res.ok)
            location.reload()
    }} className="button" >DELETE</button>

    {!editing ? <button className="button" onClick={async () => {
        setEditing(true)
    }}>EDIT</button> : <button className="button" onClick={async () => {
        await fetch(makeURL("/post/"+postID+"/comments/"+comment.id),{method:"put",headers:{
            "Authorization": "Bearer "+ token,"Content-Type":"application/json"
        },body:JSON.stringify({
            text:comment.text
        })})
        setEditing(false)
    }}>OK</button> }
    </div>
</div>
}