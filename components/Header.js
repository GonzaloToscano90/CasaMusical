import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../styles/Header.module.css'



const Header = () => {
    
    const router = useRouter()
    console.log(router.pathname)

  return (
    <header className={styles.header}>
        <div className="contenedor">
            <div className={styles.barra}>
                <Link priority='true' href='/'>
                    <a>
                        <Image width={280} height={100} src='/img/logo.png' />
                    </a>
                </Link>

                <nav className={styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/nosotros">Nosotros</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/tienda">Tienda</Link>
                </nav>
            </div>
        </div>´

      
        {router.pathname === '/guitarras/guitarras' && (
            <div className={styles.header__guitarra} >
                <Image layout='fixed' width={300} height={500} src = '/img/header_guitarra.png' alt = 'Guitarra header '/>
            </div>
        )}

    </header>
  )
}

export default Header