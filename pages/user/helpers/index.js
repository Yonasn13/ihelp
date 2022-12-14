import helperProfileController from "../../../controllers/helperProfileController"
import Link from "next/link"
import Navbar from "../../../components/Navbar"
import styles from '../../../styles/Search.module.css'
import style from '../../../styles/Home.module.css'
//import { useEffect, useState } from "react"

export default function HelperProfile(props) {
  const helperProfiles = props.helperProfiles
  /*const [query, setQuery] = useState("")
 const handleChange = event => setQuery(event.target.value)
 useEffect(() => {}, [query])
setFilteredHelperProfiles()*/

  console.log(helperProfiles)

  return (
    <>
      <div className={styles.search}>
        <form action="" className="search-bar">


        </form>
      </div>
      <div className={styles.profile}>
        <h3 className={style.h3HelpersList}>Helpers</h3>
        <ul>
          {helperProfiles.map(helperProfile => (
            <li key={helperProfile.id} className={style.card}>
              <Link href={`/user/helpers/${helperProfile.id}`}>
                {<h3 className={style.h3HelpersList}>{helperProfile.User.firstName} {helperProfile.User.lastName} </h3>}
                <p className={style.LinkRequestsList}>live in {helperProfile.city}, speak {helperProfile.language}</p>
              </Link>
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