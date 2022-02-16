// import {useEffect} from 'react'
import Image from "next/image"
import Link from "next/link"
import Layout from "../components/Layout"
import styles from "../styles/Blog.module.css"



function Blog() {
    return (
      
        <Layout
          pagina='Blog'
        >
          <article className="contenedor">
            <h2 className='heading'>Blog</h2>              
           
            <div className={styles.blog}>
              <div className="">
                  <Image layout='responsive' width={800} height={600} src='/img/blog_1.jpg'/>
                
                  <div className={styles.contenido}>
                    <h3 className={styles.contenido__title}>Aprende a tocar guitarra</h3>
                    <p className={styles.contenido__resumen}>Resumen</p>
                    <p className={styles.contenido__contenido}>Contenido: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                  </div>              

                  <Link href='/blog/blog1'>
                    <a className={styles.enlace}>
                    Leer Más
                    </a>
                  </Link>
              </div>
              
              <div className="">
                <Image layout='responsive' width={800} height={600} src='/img/blog_2.jpg'/>
              
                  <div className={styles.contenido}>
                    <h3 className={styles.contenido__title}>Acordes para guitarra</h3>
                    <p className={styles.contenido__resumen}>Resumen</p>
                    <p className={styles.contenido__contenido}>Contenido: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                  </div>              

                  <Link href="http://">
                    <a className={styles.enlace}>
                    Leer Más
                    </a>
                  </Link>
              </div>

              <div className="">
                <Image layout='responsive' width={800} height={600} src='/img/blog_3.jpg'/>
              
                  <div className={styles.contenido}>
                    <h3 className={styles.contenido__title}>Consejos sobre guitarras</h3>
                    <p className={styles.contenido__resumen}>Resumen</p>
                    <p className={styles.contenido__contenido}>Contenido: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                  </div>              

                  <Link href="http://">
                    <a className={styles.enlace}>
                    Leer Más
                    </a>
                  </Link>
              </div>

              <div className="">
                <Image layout='responsive' width={800} height={600} src='/img/blog_4.jpg'/>
              
                <div className={styles.contenido}>
                  <h3 className={styles.contenido__title}>Afina correctamente</h3>
                  <p className={styles.contenido__resumen}>Resumen</p>
                  <p className={styles.contenido__contenido}>Contenido: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                </div>              

                  <Link href="http://">
                    <a className={styles.enlace}>
                    Leer Más
                    </a>
                  </Link>
              </div>

              <div className="">
                <Image layout='responsive' width={800} height={600} src='/img/blog_5.jpg'/>
              
                <div className={styles.contenido}>
                  <h3 className={styles.contenido__title}>Titulo</h3>
                  <p className={styles.contenido__resumen}>Resumen</p>
                  <p className={styles.contenido__contenido}>Contenido: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                </div>              

                  <Link href="http://">
                    <a className={styles.enlace}>
                    Leer Más
                    </a>
                  </Link>
              </div>

              <div className="">
                <Image layout='responsive' width={800} height={600} src='/img/blog_6.jpg'/>
              
                <div className={styles.contenido}>
                  <h3 className={styles.contenido__title}>Titulo</h3>
                  <p className={styles.contenido__resumen}>Resumen</p>
                  <p className={styles.contenido__contenido}>Contenido: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                </div>              

                  <Link href="http://">
                    <a className={styles.enlace}>
                    Leer Más
                    </a>
                  </Link>
              </div>
            
            </div>

            
          </article>

        </Layout>
      
      )
  }
  // Con NextJs usar esta funcion para consumir Api estaticamente cuenta de useEffect
  // export async function getStaticProps(){
  //   const url = 'http://localhost:1337/api/blogs'
  //   const respuesta = await fetch(url)
  //   const entradas = await respuesta.json()
  //   return {
  //     props:{
  //       entrada
  //     }
  //   }
  // }

  export default Blog