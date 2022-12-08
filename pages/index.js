import Link from "next/link"
import Navbar from "../components/Navbar"

export default function Home(props) {

  return (
    <>
      <h1>Empty Next App</h1>
      <Link href={"request/helper"} ></Link>
      <Link href={"request/user"} >🔔</Link>
    </>
  )
}
