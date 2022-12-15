import helperProfileController from "../../../controllers/helperProfileController"
import Link from "next/link"
import Navbar from "../../../components/Navbar"
import styles from '../../../styles/Search.module.css'
import { BsSearch, } from "react-icons/bs";
import { useState } from "react"
import style from '../../../styles/Home.module.css'

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
        <button className="search button" type="submit"><BsSearch size="20" /></button>
      </div>
      <div>
        <h3 className={style.h3HelpersList}>Helpers</h3>
        <ul>
          {helpers.map(helperProfile => (
            <div key={helperProfile.id} className={style.card}>

              <Link href={`/user/helpers/${helperProfile.id}`} className={style.LinkRequestsList}>
                <h3 className={style.h3HelpersList}>{helperProfile.User.firstName} {helperProfile.User.lastName} </h3>
                <h6 >City: {helperProfile.city}, Language: {helperProfile.language}</h6>
              </Link>
            </div>
          ))}
        </ul>
        < br />
        <br />
        <br />
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