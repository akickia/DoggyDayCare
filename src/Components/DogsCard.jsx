import { changeStatus } from "../actions/dogActions"
import { useDispatch } from "react-redux"
import { useState } from "react"


export default function DogsCard({action, dog}) {
  const dispatch = useDispatch()
  function handleStatus() {
    const newStatus = !mode
      dispatch(changeStatus(dog.chipNumber, newStatus))
      setMode(newStatus)
    }


    const [mode, setMode] = useState(dog.present)
    
  return (
   <article className={mode ? "dog-card light" : "dog-card dark"}>
    <h3 onClick={() => {addNewDog()}}>{dog.name}</h3>
    <section>
      <img src={dog.img} />
    <p className="small">Chip nr: <br></br>{dog.chipNumber}</p>
    </section>
    
    <div>
      <hr></hr>
      <p>Breed: {dog.breed}</p>
      <p>Sex: {dog.sex}</p>
      <p>Owner: {dog.owner.name} {dog.owner.lastName}</p>
    </div>
    
    <button onClick={() => {handleStatus()}}>{mode ? 'Check out' : 'Check in'}</button>
   </article>
  )
}
