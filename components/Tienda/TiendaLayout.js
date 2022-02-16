import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Tienda.module.css'

const TiendaLayout = () => {
  return (
    <>
{/* guitarra */}
      <div className={styles.bg}>
        <div className={styles.flex}>
          <div className={styles.flex__guitarra}>
              <div className={styles.contenido} >
                <h1 className={styles.titulo}>Guitarras Eléctricas</h1>
                <p >Tenemos amplio stock de guitarras! visita nuestra  stock de guitarras pesionando el link! </p>
                <Link href= '/guitarras/guitarras'>
                  <a className={styles.tienda__enlace}>ver collección</a>
                </Link>
              </div>
              <div className={styles.image}>
                <Image  width='650' height='650'src='img/article1.png' alt='guitarras' />
              </div>
          </div>
        </div>
      </div>
{/* amplificador  */}
      <div className={styles.bg2}>
        <div className={styles.flex__amplificador}>
          <div className={styles.image}>
            <Image layout= 'responsive' width='100' height='100'src='/img/article2.png' alt='amplis' />
          </div>
          <div className={styles.contenido} >
            <h1 className={styles.titulo}>Amplificadores</h1>
            <p>Amplifica tus instrumentos con las mejores marcas! Mira nuestra collección! </p>
            <Link href= '/guitarras/guitarras'>
              <a className={styles.tienda__enlace}>ver collección</a>
            </Link>
          </div>
        </div>
      </div>
{/* pedales de efectos */}
      <div className={styles.bg}>
        <div className={styles.flex}>
          <div className={styles.flex__guitarra}>
              <div className={styles.contenido} >
                <h1 className={styles.titulo}>Pedales de Eféctos</h1>
                <p >Dale Power!! Amplia gama de pedales de efectos para guitarra y bajos </p>
                <Link href= '/guitarras/guitarras'>
                  <a className={styles.tienda__enlace}>ver collección</a>
                </Link>
              </div>
              <div className={styles.image}>
                <Image  width='500' height='500'src='/img/article3.png' alt='pedales' />
              </div>
          </div>
        </div>
      </div>
{/* baterias */}
      <div className={styles.bg2}>
        <div className={styles.flex__amplificador}>
          <div className={styles.image}>
            <Image layout= 'responsive' width='100' height='100'src='/img/article4.png' alt='baterias' />
          </div>
          <div className={styles.contenido} >
            <h1 className={styles.titulo}>Baterias</h1>
            <p>1, 2, 3, va! Baterias de primera calidad a tu alcance!  </p>
            <Link href= '/guitarras/guitarras'>
              <a className={styles.tienda__enlace}>Ver collección</a>
            </Link>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default TiendaLayout

