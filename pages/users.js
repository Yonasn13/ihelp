
//import Card from "../components/card"
import userController from "../controllers/userController"
import styles from "../styles/Home.module.css"
//import Navbar from "../components/navbar"

export default function user (props) {
    const users = props.users
    console.log(users)
    return (
        <>
        
         <div className={styles.container}>
            <h3>List of users</h3>
        </div>
        </>
        
        
        
    )
}

export async function getServerSideProps(req, res) {
    const users = await userController.findAll()
    return {
        props: { users },
    }

}