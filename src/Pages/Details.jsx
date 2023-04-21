import "../Styles/details.css"
import PresentDogs from "./PresentDogs";
import { Link } from "react-router-dom";

export default function Details() {  
    const dog = JSON.parse(localStorage.getItem("dog"));
    console.log(dog)
  return (
    <main className="details-card">
    <h1>{dog.name}</h1>
    <section>
      <img src={dog.img} />
    <p>Chip nr: {dog.chipNumber}</p>
    </section>
    <hr></hr>
    <p>Breed: {dog.breed}</p>
    <p>Sex: {dog.sex}</p>
    <p>Age: {dog.age} years</p>
    <p>Owner: {dog.owner.name} {dog.owner.lastName}</p>
    <p>Phone: {dog.owner.phoneNumber}</p>
    <Link to="../dogs"><button>Go back</button></Link>
   
   </main>
  )
}
