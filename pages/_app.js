import  "../styles/bootstrap.css"
import  "../styles/custom_styles.css"
import '../styles/header.css'
import '../styles/home_page.css'
import '../styles/global.css'
import  "../styles/fontawesome-all.css"

import Header from "../components/header.tsx"
import Footer from "../components/footer"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />

    </div>
  );
}

export default MyApp