import { Link } from "react-router-dom";

export default function Header () {
return (
  <header>
    <Link to="./dogs">Dogs</Link>
    <Link to="./manage">Manage</Link>
  </header>
)



}