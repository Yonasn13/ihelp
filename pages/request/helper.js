
import userController from "../../controllers/userController"

export default function Request(props) {
  const request = props.request
   return (
        <>
          <h1>About</h1>
        </>
      )
    }

    export async function getServerSideProps(req, res) {
      const id = req.query.id
      const users = await userController.find(id)
      return {
          props: { users },
      }
    }

  