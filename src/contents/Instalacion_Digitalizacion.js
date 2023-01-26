import { Img__Barril } from "../Img/Barril";

const Instalacion_Digitalizacion = () => {
   return (
       <div>
            <h1 className="Tittle__FirstContents">Instalación</h1>
            <p>Para instalar la aplicación y con el fin de realizar despliegues de nuevas versiones de forma más ágil, se publica el instalador en
              <a href="http://192.168.2.199/SystransDigitalizacion/index.html" target={'_blank'}> Systrans Digitalizacion.V3 </a>
            para instalar se debe hacer clic en el boton <strong>"INSTALAR"</strong> para descargar el ejecutable.
            </p>
            <div className='Img__Center'>
                    <img className="Img__Systrans" src={Img__Barril.Pag_InstaladorDigitalizacion} alt="Inicio Systrans" style={{ width: 800}}></img>
            </div>
       </div>
    );
  }
export default Instalacion_Digitalizacion