import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/Tienda.module.css'

const guitarra1 = () => {
  return (
    <Layout>
      <div class={styles.tienda__articulo}>
        <Image Layout='responsive' width='300' height='450'src='/img/guitarras/guitarra-01.webp' alt='gibson' />
        <div className={styles.tienda__contenido}>
                    <h3 >Gibson</h3>
                    <p className={styles.tienda__descripcion}>Guitarra eléctrica Gibson Modern Collection Les Paul Tribute de caoba satin iced tea satén con diapasón de palo de rosa</p>
                    <p className={styles.tienda__precio}>$ 999</p>
                    
                </div>
      </div>
    </Layout>
  )
}

export default guitarra1