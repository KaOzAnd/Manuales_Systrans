import { Img__Barril } from "../../../Img/Barril";

const Audiencias_Rol = () => {
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
      <p><strong><u>ingresan a la opción rol</u></strong></p>
      <div className='Img__Center'>
      <img className='Img__Systrans' src={Img__Barril.Audiencias_Rol} alt='Inicio Systrans'></img>
      </div>
      <p>esta opción pueden crear los roles que desempeñara cada persona en la Audiencias</p>
      <div className='Img__Center'>
      <img className='Img__Systrans' src={Img__Barril.Audiencias_Roles} alt='Inicio Systrans'></img>
      </div>
      <p>para crear un nuevo rol darán clic en el botón <img src={Img__Barril.Btn_Nuevo2}></img></p>
      <p>esto desplegara el siguiente formulario donde ingresaran el nombre del Rol que desean crear, una vez ingresado el nombre
        darán clic en el botón de <img src={Img__Barril.icono_GuardarVerde}></img>
      </p>
    </div>
    );
  }
export default Audiencias_Rol