import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, pagina}) => {
  return (
    <div>
        <Head>
            <title>MarviMusic - {pagina}</title>
            <meta name="description" content="Sitio web de venta de instrumentos musicales "/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"/>
        </Head>
        
        <Header/>
        
        {children} 

        <Footer/>
    </div>
  )
}

export default Layout