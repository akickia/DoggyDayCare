import DogsCard from "./DogsCard";
import "../Styles/dogs.css"
import {useSelector} from 'react-redux'
import { useEffect, useState } from "react";

export default function DogsContainer() {
  
  
  const [presentDogs, setPresentDogs] = useState([])
  const dogs = useSelector((state) => state);
  console.log(dogs)
  const [selectedChoise, setSelectedChoise] = useState(dogs)
  const [selectedFilter, setSelectedFilter] = useState("all")

  useEffect(() => {
    handleFilter(selectedFilter)
  }, [selectedFilter])
  
  function filterPresentDogs() {
    setPresentDogs(dogs);
    let dogsCopy = [...presentDogs];
    let filteredDogs = dogsCopy.filter((dog) => dog.present === true);
    return filteredDogs
  }

  function handleFilter(value) {
    if (value === "present") {
      console.log(value)
      setSelectedChoise(filterPresentDogs());
    }
    else {
      console.log(value)
      setSelectedChoise(dogs)
    }
  }

//   let dogCard = selectedChoise.map((dog, i) => {
//   return <DogsCard key={i} dog={dog} />
// })
  return (
    <>
    <h1>Dogs in daycare
    </h1>
    <section className="filter">
      <label htmlFor="select">Filter</label>
      <select className="selectVal" onChange={(event) => {setSelectedFilter(event.target.value)}} id="select">
        <option defaultValue value="all">All dogs</option>
        <option value="present">Present dogs</option>
      </select>
    </section>
      <section className="dog-container">
        {selectedChoise.map((dog, i) =>
          <DogsCard key={i} dog={dog} />)}
      </section>
    </>
  )
}

