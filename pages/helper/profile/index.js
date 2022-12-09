import helperProfileController from '../../../controllers/helperProfileController';
import Image from 'next/image';
import Navbar from '../../../components/Navbar'
const Profile = props => {
    const helperprofile = props.helperprofile
    console.log(helperprofile)
    const helper = helperprofile.User
    console.log(helper)
    return (
        <>
            <div class="di"
                style={{ borderRadius: '40px', overflow: 'hidden' }}>
                <Image
                    src="/cute-penguin.jpg"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                />
            </div>
            <div>
                {helper.firstName}
            </div>
            <Navbar></Navbar>
        </>
    )
}
export async function getServerSideProps(req, res) {
    const userId = 1
    const helperprofile = await helperProfileController.findUser(userId)
    return {
        props: { helperprofile },
    }
}

export default Profile