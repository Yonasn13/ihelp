import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css';
import { useEffect } from 'react'
import { SessionProvider } from "next-auth/react"
import Navbar from "../components/Navbar";

function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps} }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    <Navbar></Navbar>
    </>
  )
}



export default MyApp
