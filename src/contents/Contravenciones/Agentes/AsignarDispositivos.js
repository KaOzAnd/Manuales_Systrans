import { Img__Barril } from "../../../Img/Barril";

const AsignarDispositivos = () => {
   return (
       <div>
            <h1 className='Tittle__FirstContents'>Asignar dispositivos</h1>
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
            <p><strong><u>ingresan a la opción agentes</u></strong></p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.agentes} alt='Inicio Systrans'></img>
            </div>
            <p><strong><u>ingresan a la opción asignar dispositivos</u></strong></p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Agentes_AsignarDispositivos} alt='Inicio Systrans'></img>
            </div>
            <p>esta opción desplegara el siguiente formulario</p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Agentes_FormularioAsignarDispositivos} alt='Inicio Systrans'></img>
            </div>
            <ul>
                <li>
                    <p><strong><u>FECHA:</u></strong></p>
                    <img src={Img__Barril.Agentes_Calendario}></img>
                </li>
                <li><p><u><strong>serie del dispositivo</strong></u></p></li>
                <p>al hacer clic sobre este campo se desplegara un lista de numero de serie de los dispositivos creados y pueden filtrar por el numero de serie</p>
                <img src={Img__Barril.Agentes_SerieDelDispositivo}></img>
                <li><p><u><strong>agente</strong></u></p></li>
                <p>para seleccionar el agente deben dar clic sobre el icono <img src={Img__Barril.Btn_Lupa}></img> lo cual desplegara el siguiente formulario</p>
                <img src={Img__Barril.Agentes_BuscarAgente}></img>
                <p>pueden buscar el agente por numero de documento de identidad o por placa, una vez ingresado alguno de los dos datos darán clic en el icono 
                <img src={Img__Barril.Btn_Lupa}></img>
                </p>
                <p>una vez ingresados todos los datos dan click en <img src={Img__Barril.Btn_GuardarBlanco}></img></p>
                <p>de esta forma pueden asignar un dispositivo a un agente.</p>
            </ul>
       </div>
    );
  }
export default AsignarDispositivos