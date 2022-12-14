import helperProfileController from "../../../controllers/helperProfileController"
import Link from "next/link"
import Navbar from "../../../components/Navbar"
import styles from '../../../styles/Search.module.css'
import { BsSearch, } from "react-icons/bs";
import { useState } from "react"

export default function HelperProfile(props) {
  const helperProfiles = props.helperProfiles
  const [helpers, setHelpers] = useState(helperProfiles)
  const handleChange = event => {
    const filteredProfile = helperProfiles.filter(helper => {
      return helper.city.toLowerCase().includes(event.target.value.toLowerCase()) || helper.language.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setHelpers(filteredProfile)
  }
  console.log(helperProfiles)

  return (
    <>
      <div className={styles.search}>
        <input type="text" id="search" placeholder="Search by city, language..." onChange={handleChange} />
        <button class="search button" type="submit"><BsSearch size="20" /></button>
      </div>
      <div className={styles.profile}>
        <h3>Helpers</h3>
        <ul>
          {helpers.map(helperProfile => (
            <li key={helperProfile.id}>
              live in {helperProfile.city}, speak {helperProfile.language}
              <Link href={`/user/helpers/${helperProfile.id}`}>
                {<p> my name is {helperProfile.User.firstName} {helperProfile.User.lastName} </p>}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Navbar></Navbar>
    </>
  )
}

export async function getServerSideProps(req, res) {
  const helperProfiles = await helperProfileController.findAll()
  return {
    props: { helperProfiles }
  }
}