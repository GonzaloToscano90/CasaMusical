import Layout from "../components/Layout"
import TiendaLayout from "../components/Tienda/TiendaLayout"

function Tienda() {
    return (
      
        <Layout
          pagina='Tienda'
        >
          <>
          <div className='contenedor'>
            <h2 className='heading'>Tienda</h2>  
          </div>
          
            <TiendaLayout/>
            
          </>    

        </Layout>
      
      )
  }
  
  export default Tienda