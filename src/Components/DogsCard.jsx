import { changeStatus } from "../actions/dogActions"
import { useDispatch } from "react-redux"


export default function DogsCard({dog}) {
  const dispatch = useDispatch()
  function handleStatus() {
    const newStatus = !dog.present
    dispatch(changeStatus(dog.chipNumber, newStatus));
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
    
    <button onClick={() => {handleStatus()}}>{dog.present ? 'Check out' : 'Check in'}</button>
   </article>
  )
}
