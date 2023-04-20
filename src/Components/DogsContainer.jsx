import DogsCard from "./DogsCard";
import "../Styles/dogs.css"
import {useSelector} from 'react-redux'
import Filter from "./Filter";

export default function DogsContainer() {
  
  
  const dogs = useSelector((state) => state);
  console.log(dogs)
  
  let dogCard = dogs.map((dog, i) => {
  return <DogsCard key={i} dog={dog} />
})
  return (
    <>
    <h1>Dogs in daycare
    </h1>
    <Filter />
      <section className="dog-container">
        {dogCard}
      </section>
    </>
  )
}

