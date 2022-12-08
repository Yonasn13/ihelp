import userController from "../controllers/userController"

export default function user (props) {
    const users = props.users
    console.log(users)
    return (
        <>
         <div>
            <h1>List of Users</h1>
        </div>
        <div>
        {users.map(user => (
         <h3 key={user.id} >First name: {user.firstName}; Last name: {user.lastName}; Language: {user.language}; City: {user.city}</h3>
     ))}
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
