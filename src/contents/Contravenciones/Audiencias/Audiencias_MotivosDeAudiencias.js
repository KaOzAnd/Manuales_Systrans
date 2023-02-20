import { Img__Barril } from "../../../Img/Barril";

const Audiencias_MotivosDeAudiencias = () => {
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
      <p><u><strong>ingresan a la opción Motivos de Audiencia</strong></u></p>
      <div className='Img__Center'>
      <img className='Img__Systrans' src={Img__Barril.Audiencias_MotivosDeAudiencias} alt='Inicio Systrans'></img>
      </div>
      <p>en esta opción pueden ver o crear los motivos para crear una audiencia</p>
      <div className='Img__Center'>
      <img className='Img__Systrans' src={Img__Barril.Audiencias_FormularioMotivos} alt='Inicio Systrans'></img>
      </div>
      <p>Para crear un nuevo motivo darán clic en el boto <img src={Img__Barril.Btn_Nuevo2}></img> y esto desplegara el siguiente formulario</p>
      <div className='Img__Center'>
      <img className='Img__Systrans' src={Img__Barril.Audiencias_CrearMotivo} style={{width: 800}}></img>
      </div><br></br>
      <p>una vez ingresado el nombre del motivo darán clic en el icono de <img src={Img__Barril.icono_GuardarVerde} ></img></p>
      <p>igual si necesitan editar uno ya creado darán clic en el icono <img src={Img__Barril.icono_flecha}></img> y escogen la opción editar</p>
    </div>
    );
  }
export default Audiencias_MotivosDeAudiencias