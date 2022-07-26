import '../styles/globals.css'
import Context from "../store/Context"

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Component {...pageProps} />
    </Context>
  )
}

export default MyApp
