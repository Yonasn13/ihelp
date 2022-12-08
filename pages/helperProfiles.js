import helperProfileController from "../controllers/helperProfileController"
//import Card from '../components/card'
import styles from '../styles/Home.module.css'
//import Navbar from "../components/navbar"

export default function helperProfile (props) {
    const helperProfiles = props.helperProfiles
    console.log(helperProfiles)
    return (
        <>
         <div className={styles.container}>
            <h3>List of helperProfile</h3>
        </div>
        </>
        
    )
}

export async function getServerSideProps(req, res) {
    const helperProfiles = await helperProfileController.findAll()
    return {
        props: { helperProfiles }
    }

}