import { useState } from "react"
import AddDogForm from "../Components/AddDogForm"
import "../Styles/manage.css"

export default function ManageDogs() {
  const [state, setState] = useState()
  const [error, setError] = useState()

  function errorHandle() {
    setState(false)
    setError(true)
  }

  function stateHandle() {
    setState(true)
    setError(false)
  }

  return (
    <main>
      <h1>Manage registered dogs</h1>
      <article className="flex">
        <aside><img style={{maxWidth:"300px"}} src="https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
      <section>
        <button onClick={() => stateHandle()}>Add dogs</button>
        <button onClick={() => errorHandle()}>Change details</button>
        <button onClick={() => errorHandle()}>Remove Dogs</button>
      </section>
      </aside>

        { state && <AddDogForm /> }
        </article>
        { error &&  <p>I'm afraid this function does not exist yet</p> }


    </main>
  )
}
