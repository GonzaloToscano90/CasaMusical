import Image from "next/image"
import Layout from "../components/Layout"
import styles from "../styles/Nosotros.module.css"

const Nosotros = () => {
  return (
    <Layout
      pagina='Nosotros'
    >
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>

        <div className={styles.contenido}>
          <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='img nosotros' />


          <div >
            <p>MusicArg nace en el año 1991 y se convierte rápidamente en un referente para los guitarristas y bajistas de Argentina ya que no existían demasiadas tiendas especializadas en guitarras y bajos.
            Nos sentimos orgullosos de haber ayudado a introducir las nuevas tecnologías a los músicos de este país y así contribuir en cierta forma a la creación musical de calidad.
            En nuestra tienda en la calle Albear, 9 de Julio disponemos de una gran exposición de las mejores marcas, una cabina insonorizada para pruebas y un taller para reparación y ajustes de guitarras realizados por nuestro técnico-luthier. Nuestro equipo humano está formado por músicos en activo y conocen de primera mano las inquietudes de nuestros clientes.
            Somos especialistas en guitarras eléctricas, guitarras acústicas, guitarras clásicas, guitarras flamencas, ukeleles, bajos, amplificadores, pedales y pedaleras de efectos y todos sus accesorios.
            El presente y el futuro pasan por Ardemadrid.com, nuestra web de venta online, que trata de dar respuesta al nuevo consumidor, que busca en Internet los mismos servicios que ofrecemos en nuestra tienda física desde 1991.</p>
          </div>
        </div>

      </main>
    </Layout>
  )
}

export default Nosotros