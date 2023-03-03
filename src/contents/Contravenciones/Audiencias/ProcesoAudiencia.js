import { Img__Barril } from "../../../Img/Barril";

const ProcesoAudiencia = () => {
  return (
    <div>
      <h1 className='Tittle__FirstContents'>Agregar Asistentes, Agregar Evidencia, Notificar, Re agendar, Iniciar o Cancelar Audiencia</h1>
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
    </div>
  );
}
export default ProcesoAudiencia