import { Link } from "react-router-dom";
import "../Styles/header.css"
export default function Header () {
  return (
    <article className="header">
      <header>
        <Link to="./"> <img style={{maxWidth:"40px"}} src="https://cdn.pixabay.com/photo/2018/07/16/15/31/dog-3542195_960_720.png" /></Link>
        <Link to="./dogs">Dogs in daycare</Link>
        <Link to="./manage">Manage dogs</Link>
        <Link to="./about">Help</Link>
      </header>
    </article>
  )
}