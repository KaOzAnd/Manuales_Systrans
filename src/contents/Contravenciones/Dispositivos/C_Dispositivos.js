import { Img__Barril } from "../../../Img/Barril";

const C_Dispositivos = () => {
   return (
       <div>
            <h1 className='Tittle__FirstContents'>Agregar o editar dispositivos</h1>
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
            <p><strong><u>ingresan a la opción dispositivos</u></strong></p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Dispositivos} alt='Inicio Systrans'></img>
            </div>
            <p>dentro de esta opción les permitirá visualizar los dispositivos creados o crear nuevos dispositivos</p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Dispositivos_Lista} alt='Inicio Systrans'></img>
            </div>
            <p>para crear un nuevo dispositivo darán clic en <img src={Img__Barril.Btn_Nuevo2}></img> el cual desplegara el siguiente formulario</p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Dispositivos_Formulario} style={{width: 600}}></img>
            </div>
            <p>agregan el numero de serie del dispositivo y una observación y dan clic en Salvar y saldrá el siguiente mensaje</p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Dispositivos_Ms} style={{width: 600}}></img>
            <p>con esto abran agregado un nuevo dispositivo.</p>
            </div>
       </div>
    );
  }
export default C_Dispositivos