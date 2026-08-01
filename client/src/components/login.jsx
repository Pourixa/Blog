import "../styles/signup.css"
import { useState } from "react";
import { useNavigate } from "react-router";
import makeURL from "../../lib/url";
export default function Login()
{
  const temp = {status:null,message:""}
  const [result, setResult] = useState(temp);
  const navigate = useNavigate();
  async function handleSubmit(e) {

    e.preventDefault();
    setResult(prev => {return {...prev , status:0}});
    const formData = new FormData(e.target)
    const res = await fetch(makeURL("/login"),{method:"post",headers:{
      "Content-Type":"application/json"
    },body:JSON.stringify(Object.fromEntries(formData.entries()))})


    const js = await res.json()
    setResult({status:res.status,message:js.message})
    localStorage.setItem("token",js.token)
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
    alertMessage = "Login Successful!";
    backgroundColor = "green";
    break;

  case 1:
    alertMessage = "Redirecting...";
    backgroundColor = "gray";
    break;
  default:
    if(result.status)
    {
    alertMessage = "Signup not Successful! - " + result.message;
    backgroundColor = "red";
    setTimeout(() => {
      setResult({status:null,message:""})
    },2500)
  }
    break;
}
  return <main>
    
    <div id="alert" className= {result.status!= null ? "show" : ""} style={{backgroundColor:backgroundColor}}>
        {alertMessage}
    </div>
    <form onSubmit={handleSubmit}>
    <input placeholder="Username" type="text" name="username" id="username" minLength={3} pattern="^^[a-zA-Z0-9]+([_ \-]?[a-zA-Z0-9])*$" maxLength={255} required/>
    <input placeholder="Password" type="password" name="password" id="password" minLength={8} required/>
    <button className="button" id= {result.status!= null ? "inactivebtn" : ""}>
        LOG IN
    </button>
    </form>
</main>
}