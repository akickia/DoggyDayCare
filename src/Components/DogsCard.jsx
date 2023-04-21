import { useNavigate } from "react-router-dom"
import { changeStatus } from "../actions/dogActions"
import { useDispatch } from "react-redux"


export default function DogsCard({dog}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function handleStatus() {
    const newStatus = !dog.present
    dispatch(changeStatus(dog.chipNumber, newStatus));
  }

  function setLocalStorage(dog) {
    localStorage.setItem("dog", JSON.stringify(dog))
    navigate("../details")
  }

    
  return (
   <article className={dog.present ? "dog-card light" : "dog-card dark"}>
    <h3>{dog.name}</h3>
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
    
    <button className="status" onClick={() => {handleStatus()}}>{dog.present ? 'Check out' : 'Check in'}</button>
    <button className="details" onClick={() => {setLocalStorage(dog)}}>See details</button>
   </article>
  )
}
