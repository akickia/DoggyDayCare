import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDog } from "../actions/dogActions";


export default function AddDogForm() {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [img, setImg] = useState('');
  const [chipNumber, setChipNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sex, setSex] = useState('')

  function addNewDog() {
    let newDog = {
    age: age,
    breed: breed,
    chipNumber: chipNumber,
    img: img,
    name: name,
    owner: {
      name: firstName, 
      lastName: lastName, 
      phoneNumber: phoneNumber,
    },
    present: false,
    sex: sex
  }
  console.log('Adding new dog:', newDog)
  dispatch(addDog(newDog))
}

  return (
    <>
    <form className="add-dog-container">
      <input onChange={(e) => {setName(e.target.value)}} type="text" placeholder="dogs name"></input>
      <input onChange={(e) => {setBreed(e.target.value)}} type="text" placeholder="breed"></input>
      <select onChange={(e) => {setSex(e.target.value)}} name="sex" id="sex">
        <option value="female">sex</option>
        <option value="female">female</option>
        <option value="male">male</option>
      </select>
      <input onChange={(e) => {setAge(e.target.value)}} type="number" placeholder="age"></input>
      <input onChange={(e) => {setChipNumber(e.target.value)}} type="text" placeholder="chipnumber"></input>
      <input onChange={(e) => {setImg(e.target.value)}} type="text" placeholder="image"></input>
      <input onChange={(e) => {setFirstName(e.target.value)}} type="text" placeholder="owner first name"></input>
      <input onChange={(e) => {setLastName(e.target.value)}} type="text" placeholder="owner last name"></input>
      <input onChange={(e) => {setPhoneNumber(e.target.value)}} type="number" placeholder="owner phonenumber"></input>
      <div>
        <input type="checkbox"></input> 
        <p>The owner has agreed to private policy</p>
      </div>
         
    </form>
    <button onClick={() => addNewDog()}>SUBMIT</button>
    </>
  )
}
