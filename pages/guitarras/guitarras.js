import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'
import styles from '../../styles/Tienda.module.css'


const Guitarras = () => {
  return (
    <Layout> 
    <article className='contenedor'>
        <h2 className='heading'>Guitarras Eléctricas</h2>  
        <div className={styles.tienda_listado}>            
            <div className={styles.tienda__articulo}>
               <div>
                    <Image layout='responsive' width='200' height='350'src='/img/guitarras/guitarra-01.webp' alt='gibson' />
               </div>
                <div className={styles.tienda__contenido}>
                    <h3 >Gibson</h3>
                    <p className={styles.tienda__descripcion}>Guitarra eléctrica Gibson Modern Collection Les Paul Tribute de caoba satin iced tea satén con diapasón de palo de rosa</p>
                    <p className={styles.tienda__precio}>$ 999</p>
                    <Link href='/guitarras/guitarra1'>
                        <a className={styles.tienda__enlace}>
                            Ver Producto
                        </a>
                    </Link>
                </div>
            </div>

            <div className={styles.tienda__articulo}>
               <div>
                    <Image layout='responsive' width='200' height='350'src='/img/guitarras/guitarra_02.jpg' alt='gibson' />
               </div>
                <div className={styles.tienda__contenido}>
                    <h3 >Nombre</h3>
                    <p className={styles.tienda__descripcion}>Descripcion: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,</p>
                    <p className={styles.tienda__precio}>$ 999</p>
                    <Link href='/guitarras/guitarra1'>
                        <a className={styles.tienda__enlace}>
                            Ver Producto
                        </a>
                    </Link>
                </div>
            </div>

            <div className={styles.tienda__articulo}>
               <div>
                    <Image layout='responsive' width='200' height='350'src='/img/guitarras/guitarra_03.jpg' alt='gibson' />
               </div>
                <div className={styles.tienda__contenido}>
                    <h3 >Nombre</h3>
                    <p className={styles.tienda__descripcion}>Descripcion: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,</p>
                    <p className={styles.tienda__precio}>$ 999</p>
                    <Link href='/guitarras/guitarra1'>
                        <a className={styles.tienda__enlace}>
                            Ver Producto
                        </a>
                    </Link>
                </div>
            </div>

            <div className={styles.tienda__articulo}>
               <div>
                    <Image layout='responsive' width='200' height='350'src='/img/guitarras/guitarra_04.jpg' alt='gibson' />
               </div>
                <div className={styles.tienda__contenido}>
                    <h3 >Nombre</h3>
                    <p className={styles.tienda__descripcion}>Descripcion: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,</p>
                    <p className={styles.tienda__precio}>$ 999</p>
                    <Link href='/guitarras/guitarra1'>
                        <a className={styles.tienda__enlace}>
                            Ver Producto
                        </a>
                    </Link>
                </div>
            </div>

            <div className={styles.tienda__articulo}>
               <div>
                    <Image layout='responsive' width='200' height='350'src='/img/guitarras/guitarra_05.jpg' alt='gibson' />
               </div>
                <div className={styles.tienda__contenido}>
                    <h3 >Nombre</h3>
                    <p className={styles.tienda__descripcion}>Descripcion: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,</p>
                    <p className={styles.tienda__precio}>$ 999</p>
                    <Link href='/guitarras/guitarra1'>
                        <a className={styles.tienda__enlace}>
                            Ver Producto
                        </a>
                    </Link>
                </div>
            </div>

            <div className={styles.tienda__articulo}>
               <div>
                    <Image layout='responsive' width='200' height='350'src='/img/guitarras/guitarra_06.jpg' alt='gibson' />
               </div>
                <div className={styles.tienda__contenido}>
                    <h3 >Nombre</h3>
                    <p className={styles.tienda__descripcion}>Descripcion: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,</p>
                    <p className={styles.tienda__precio}>$ 999</p>
                    <Link href='/guitarras/guitarra1'>
                        <a className={styles.tienda__enlace}>
                            Ver Producto
                        </a>
                    </Link>
                </div>
            </div>

            <div className={styles.tienda__articulo}>
               <div>
                    <Image layout='responsive' width='200' height='350'src='/img/guitarras/guitarra_07.jpg' alt='gibson' />
               </div>
                <div className={styles.tienda__contenido}>
                    <h3 >Nombre</h3>
                    <p className={styles.tienda__descripcion}>Descripcion: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,</p>
                    <p className={styles.tienda__precio}>$ 999</p>
                    <Link href='/guitarras/guitarra1'>
                        <a className={styles.tienda__enlace}>
                            Ver Producto
                        </a>
                    </Link>
                </div>
            </div>

            <div className={styles.tienda__articulo}>
               <div>
                    <Image layout='responsive' width='200' height='350'src='/img/guitarras/guitarra_08.jpg' alt='gibson' />
               </div>
                <div className={styles.tienda__contenido}>
                    <h3 >Nombre</h3>
                    <p className={styles.tienda__descripcion}>Descripcion: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,</p>
                    <p className={styles.tienda__precio}>$ 999</p>
                    <Link href='/guitarras/guitarra1'>
                        <a className={styles.tienda__enlace}>
                            Ver Producto
                        </a>
                    </Link>
                </div>
            </div>

            <div className={styles.tienda__articulo}>
               <div>
                    <Image layout='responsive' width='200' height='350'src='/img/guitarras/guitarra_09.jpg' alt='gibson' />
               </div>
                <div className={styles.tienda__contenido}>
                    <h3 >Nombre</h3>
                    <p className={styles.tienda__descripcion}>Descripcion: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,</p>
                    <p className={styles.tienda__precio}>$ 999</p>
                    <Link href='/guitarras/guitarra1'>
                        <a className={styles.tienda__enlace}>
                            Ver Producto
                        </a>
                    </Link>
                </div>
            </div>

            
 
            

        </div>

    </article>   
    </Layout>  
  )
}

export default Guitarras