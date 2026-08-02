
import { Navigate } from "react-router"
import { Editor } from '@tinymce/tinymce-react';
import "../styles/newBlog.css"
import {useState } from "react";
import { useNavigate } from "react-router";
import makeURL from "../../lib/url";
export default function New() {
  const temp = {status:null,message:""}
  const [result, setResult] = useState(temp);
  const navigate = useNavigate();
  const token = localStorage.getItem("admintoken")
  async function handleSubmit() {

      setResult(prev => {return {...prev , status:0}});
      const formData = new FormData(document.querySelector("#blog"))
      const res = await fetch(makeURL("/post"),{method:"post",headers:{
        "Content-Type":"application/json","Authorization" : "Bearer "+token
      },body:JSON.stringify(Object.fromEntries(formData.entries()))})
  
  
      const js = await res.json()
      setResult({status:res.status,message:js.message})
      if (res.status === 200) {
    setTimeout(() => {
      setResult(prev => ({ ...prev, status: 1 }));
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }, 1500);
  }
    }

    async function handleDraft() {

      setResult(prev => {return {...prev , status:0}});
      const formData = new FormData(document.querySelector("#blog"))
      const data = Object.fromEntries(formData.entries())
      data.isPublic = false;
      console.log(data)
      const res = await fetch(makeURL("/post"),{method:"post",headers:{
        "Content-Type":"application/json","Authorization" : "Bearer "+token
      },body:JSON.stringify(data)})
  
  
      const js = await res.json()
      setResult({status:res.status,message:js.message})
      if (res.status === 200) {
    setTimeout(() => {
      setResult(prev => ({ ...prev, status: 1 }));
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }, 1500);
  }
    }
  
  let alertMessage;
  let backgroundColor;
  
  switch (result.status) {
    case 0:
      alertMessage = "Processing...";
      backgroundColor = "gray";
      break;
  
    case 200:
      alertMessage = "Post Successful!";
      backgroundColor = "green";
      break;
  
    case 1:
      alertMessage = "Redirecting...";
      backgroundColor = "gray";
      break;
    default:
      if(result.status)
      {
      alertMessage = "Post not Successful! - " + result.message;
      backgroundColor = "red";
      setTimeout(() => {
        setResult({status:null,message:""})
      },2500)
    }
      break;
  }
    if(!token) return <Navigate to={"/login"}/>
    return <main>
    <div id="alert" className= {result.status!= null ? "show" : ""} style={{backgroundColor:backgroundColor}}>
        {alertMessage}
    </div>
        <form id="blog" onSubmit={e=>{e.preventDefault()}}>
            <input type="text" name="title" id="title" required minLength={3} placeholder="Title" />
                <Editor textareaName="text"
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
                <button onClick={handleSubmit} id="publish" className={result.status!= null ? "inactivebtn" : "button"}>
                    PUBLISH
                </button>
                <button onClick={handleDraft} className={result.status!= null ? "inactivebtn" : "button"} id="save">
                    SAVE AS DRAFT
                </button>
            </div>
        </form>
    </main>
}