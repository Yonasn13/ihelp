import Link from 'next/link'
import styles from '../../../styles/Home.module.css'
import { FaBell, FaHandPaper } from 'react-icons/fa'
import requestController from '../../../controllers/requestController'


export default function Request(props) {
    const requests = props.requests
    console.log(requests)
    return (
        <>
            <div className=''>
                <div className={styles.callMe}>

                    <FaBell className={styles.bell} />
                    <div className={styles.form}>

                        <h3>List of Requests</h3>

                        {requests.map(request => (
                            <div  key={request.id} >
                              
                                <div class="shadow p-3 mb-5 bg-body rounded">
                                   <FaHandPaper />
                                <Link href='/requests/1' >{request.message} </Link>
                                {request.HelperProfile.User.firstName}  {request.HelperProfile.User.lastName}   

                           </div>

                            
                            </div>
                        ))}
                        

                    </div>
                </div>
            </div>
        </>

    )
}

export async function getServerSideProps(req, res) {
    const requests = await requestController.findAll()
    return {
        props: { requests },
        // will be passed to the page component as props
    }
}