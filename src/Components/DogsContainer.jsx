import DogsCard from "./DogsCard";
import "../Styles/dogs.css"
import {useSelector} from 'react-redux'
import { useEffect, useState } from "react";

export default function DogsContainer() {
  
  
  
  const dogs = useSelector((state) => state);
  const [selectedChoise, setSelectedChoise] = useState(dogs)
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [presentDogs, setPresentDogs] = useState(dogs)
  
 useEffect(() => {
    setSelectedChoise(handleFilter(selectedFilter));
  }, [selectedFilter, dogs])
  
  function filterPresentDogs() {
    let filteredDogs = dogs.filter((dog) => dog.present === true);
    return filteredDogs;
  }

  function handleFilter(value) {
    if (value === "present") {
      return filterPresentDogs();
    } else {
      return dogs;
    }
  }
 
 

  let dogCard = selectedChoise.map((dog, i) => {
    return <DogsCard key={i} dog={dog} />})



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
        {dogCard}
      </section>
    </>
  )
}

