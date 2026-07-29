import "../styles/home.css"
import hero from "../assets/hero.png"
import BlogHolder from "./blogHolder"
export default function Home() {
    return <main>
        <div id="hero">
            <img src={hero} alt="hero" />
            <a href="#blogsList" className="button">READ MORE</a>
        </div>
        <div id="blogsList">
            <BlogHolder/>
            <BlogHolder/>
            <BlogHolder/>
            <BlogHolder/>
            <BlogHolder/>
        </div>
    </main>
}