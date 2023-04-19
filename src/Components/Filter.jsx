import "../Styles/filter.css"
import { useSelector } from 'react-redux'

export default function Filter() {
  const dogs = useSelector((state) => state);
  return (
    <section className="filter">
      <label htmlFor="select">Filter</label>
      <select id="select">
        <option defaultChecked value="all">All dogs</option>
        <option value="present">Present dogs</option>
        <option value="sex">Sex</option>
        <option value="breed">Breed</option>
      </select>
    </section>
  )
}
