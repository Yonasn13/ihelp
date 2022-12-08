import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react'

function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps} }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Component {...pageProps} />
    <Navbar></Navbar>
    </>
  )
}



export default MyApp
