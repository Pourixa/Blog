export default function Comment({comment}) {
   const date = new Date(comment.dateTime)
return <div className="comment">
    <div><h4>{comment.userID}</h4><span>{date.toLocaleDateString("en-GB")}</span></div>
    <p>{comment.text}</p>
</div>
}