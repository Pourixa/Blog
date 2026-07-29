import Header from "./components/header"
import Footer from "./components/footer"
import { useState,useEffect } from "react";
import { useNavigate } from "react-router";
import "./styles/signup.css"
export default function Login()
{
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
  return <>
    <header>
    <span>
        <h1>
            POURBLOG
        </h1>
        <h4>ADMIN</h4>
    </span>
        </header>
  <main>
    
    <div id="alert" className= {result!= null ? "show" : ""} style={{backgroundColor:backgroundColor}}>
        {alertMessage}
    </div>
    <form onSubmit={handleSubmit}>
    <input placeholder="Username" type="text" name="username" id="username" minLength={3} pattern="^^[a-zA-Z0-9]+([_ \-]?[a-zA-Z0-9])*$" maxLength={255} required/>
    <input placeholder="Password" type="password" name="password" id="password" minLength={8} required/>
    <button className="button" id= {result!= null ? "inactivebtn" : ""}>
        LOG IN
    </button>
    </form>
</main>
<Footer/>
</>
}