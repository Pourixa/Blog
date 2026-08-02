import { BsHeartFill } from "react-icons/bs";
import { Link } from "react-router";
import { jwtDecode } from "jwt-decode";
import makeURL from "../../lib/url";

export default function Blog({ blog }) {
    const token = localStorage.getItem("admintoken");
    const user = jwtDecode(token);
    const date = new Date(blog.dateTime);

    if (user.username !== blog.userID) {
        return null;
    }

    async function deletePost() {
        const res = await fetch(makeURL("/post/" + blog.id), {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + token,
            },
        });

        if (res.ok) {
            location.reload();
        }
    }

    async function togglePublish() {
        const res = await fetch(makeURL("/post/" + blog.id), {
            method: "PUT",
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                isPublic: !blog.isPublic,
            }),
        });

        if (res.ok) {
            location.reload();
        }
    }

    return (
        <div className="blog">
            <Link to={"/post/" + blog.id} className="blogContent">
                <h1 data-fulltitle={blog.title}>{blog.title}</h1>

                <p dangerouslySetInnerHTML={{ __html: blog.text }} />

                <div>
                    <span>
                        <BsHeartFill />
                        {blog.likes}
                    </span>

                    <span>{date.toLocaleDateString("en-GB")}</span>
                </div>
            </Link>

            <div className="blogActions">
                <button className="button" onClick={deletePost}>
                    DELETE
                </button>

                <button className="button" onClick={togglePublish}>
                    {blog.isPublic ? "Retract" : "Publish"}
                </button>
            </div>
        </div>
    );
}