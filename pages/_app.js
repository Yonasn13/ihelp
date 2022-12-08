import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react'

<<<<<<< HEAD
function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps} }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  )
=======
function MyApp({ Component, pageProps }) {
  return
  <Component {...pageProps} />
>>>>>>> user-profile
}



export default MyApp
