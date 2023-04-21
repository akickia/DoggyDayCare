import { Link } from "react-router-dom";
import "../Styles/header.css"
export default function Header () {
  return (
    <header>
      
      <Link to="./">Start</Link>
      <Link to="./dogs">Dogs in daycare</Link>
      <Link to="./manage">Manage dogs</Link>
      <Link to="./about">About</Link>
    </header>
  )
}