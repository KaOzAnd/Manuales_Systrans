import { Img__Barril } from "../../../Img/Barril";

const Audiencias_ConfigurarTiempos = () => {
   return (
      <div>
      <h1 className='Tittle__FirstContents'>Audiencias</h1>
      <ul>
      <p><u><strong>INGRESO A SYSTRANS</strong></u></p>
      <li>SE INGRESA AL APLICATIVO SYSTRANS MEDIANTE LA DIRECCIÓN WEB ASIGNADA</li>
      <li>INICIAN SESIÓN CON EL USUARIO Y CONTRASEÑA ASIGNADOS</li>
      </ul>
      <div className='Img__Center'>
      <img className='Img__Systrans' src={Img__Barril.ImgInicio} alt='Inicio Systrans'></img>
      </div><br />
      <p><strong><u>ingresen a la opción contravenciones</u></strong></p>
      <div className='Img__Center'>
      <img className='Img__Systrans' src={Img__Barril.Contravenciones_} alt='Inicio Systrans'></img>
      </div>
      <p><strong><u>ingresan a la opción Audiencias</u></strong></p>
      <div className='Img__Center'>
      <img className='Img__Systrans' src={Img__Barril.Audiencias} alt='Inicio Systrans'></img>
      </div>
      <p><strong><u>ingresan a la opción Configurar tiempos</u></strong></p>
      <div className='Img__Center'>
      <img className='Img__Systrans' src={Img__Barril.Audiencias_ConfigurarTiempos} alt='Inicio Systrans'></img>
      </div>
      <p>esta opción les permite configurar los días desde la fecha del comparendo para permitir agendar, el periodo máximo es la fecha límite en días para realizar la audiencia.</p>
      <div className='Img__Center'>
      <img className='Img__Systrans' src={Img__Barril.Audiencias_Tiempos} alt='Inicio Systrans'></img>
      </div>
      <p>una vez configurados estos dos tiempos deben dar clic en  <img src={Img__Barril.icono_guardar}></img></p>
      <p>con esto pueden parametrizar los tiempos para agendar audiencias</p>
    </div>
    );
  }
export default Audiencias_ConfigurarTiempos