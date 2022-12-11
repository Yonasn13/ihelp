import helperProfileController from "../../../controllers/helperProfileController"
import Link from "next/link"
import Navbar from "../../../components/Navbar"
import styles from '../../../styles/Search.module.css'

export default function helperProfile(props) {
  const helperProfiles = props.helperProfiles
  console.log(helperProfiles)

  return (
    <>
      <div className={styles.search}>
        <form action="" class="search-bar">
          <input type="search" name="search" pattern=".*\S.*" required />
          <button class="search-button" type="submit">
            <Link href={'/'}>
              <span>Search</span>
            </Link>
          </button>
        </form>
      </div>
      <div className={styles.profile}>
        <h3>Helpers</h3>
        <ul>
          {helperProfiles.map(helperProfile => (
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