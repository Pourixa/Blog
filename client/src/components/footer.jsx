import { BsArrowUp } from "react-icons/bs";

export default function Footer () {
    return <footer>
        <h1>MADE BY POURIXA</h1>
        <BsArrowUp onClick={() => window.scrollTo({top:0,behavior:"smooth"})}/>
    </footer>
}