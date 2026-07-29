
import { Navigate, useOutletContext } from "react-router"
import { Editor } from '@tinymce/tinymce-react';
import "../styles/newBlog.css"
import { useEffect,useState } from "react";
import { useNavigate } from "react-router";
export default function New() {
    const [result, setResult] = useState(null);
  async function handleSubmit(e) {

    e.preventDefault();

    setResult(0);
    setTimeout(() => {
        setResult(200)
    },3000)
  }

  const navigate = useNavigate();
useEffect(() => {
  if (result === 200) {
    const timer = setTimeout(() => {
      setResult(1);
    }, 3000);

    return () => clearTimeout(timer);
  }

  if (result === 1) {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }
}, [result, navigate]);

let alertMessage = "";
let backgroundColor = "";

switch (result) {
  case 0:
    alertMessage = "Processing...";
    backgroundColor = "gray";
    break;

  case 200:
    alertMessage = "Log in Successful!";
    backgroundColor = "green";
    break;

  case 1:
    alertMessage = "Redirecting...";
    backgroundColor = "gray";
    break;
}
    const isLoggedIn = useOutletContext();
    if(!isLoggedIn)
        return <Navigate to={"/login"}/>
    return <main>
    <div id="alert" className= {result!= null ? "show" : ""} style={{backgroundColor:backgroundColor}}>
        {alertMessage}
    </div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" id="title" required minLength={3} placeholder="Title" />
                <Editor
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
                    initialValue="Blog text !"
                    />
            <div>
                <button id="publish" className={result!= null ? "inactivebtn" : "button"}>
                    PUBLISH
                </button>
                <button className={result!= null ? "inactivebtn" : "button"} id="save">
                    SAVE AS DRAFT
                </button>
            </div>
        </form>
    </main>
}