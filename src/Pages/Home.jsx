import NavButton from "../Components/NavButton";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()
  return (
    <article className="base">

    <h1>Doggy DayCare</h1>
    <img style={{maxWidth:"80%"}} src="https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      <section className="btns">
        <NavButton link={() => navigate("./dogs")} title={"Dogs in Daycare"} />
        <NavButton link={() => navigate("./manage")} title={"Manage Dogs"} />
        <NavButton link={() => navigate("./about")} title={"About"} />
      </section>

    </article>
  )
}
