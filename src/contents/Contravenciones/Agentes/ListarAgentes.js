import { Acordeon } from "../../../components/acordeon";
import { Img__Barril } from "../../../Img/Barril";

const ListarAgentes = () => {
   return (
       <div>
            <h1 className='Tittle__FirstContents'>Listar Agentes</h1>
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
            </div><br/>
            <p><u><strong>Ingresan a la opción listar</strong></u></p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Agentes_Listar} alt='Inicio Systrans'></img>
            </div>
            <p>en esta opción les permite visualizar todos los agentes creados y también permite editar o crear uno nuevo</p>
            <p>para editar un agente que se encuentra creado deben dar clic en el icono <img src={Img__Barril.icono_flecha}></img>
            el cual nos desplegara el siguiente menu <img src={Img__Barril.Agentes_Menu}></img>
            elige la opción editar y desplegara el formulario donde podrán editar la información 
            </p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Agentes_EditarFormulario} alt='Inicio Systrans'></img>
            </div>
            <p>una vez editados los datos necesarios darán click en el botón <u><strong>guardar</strong></u></p>
            <p>asi pueden editar la información de un agente, si necesitan agregar un agente darán clic en el botón 
                <img src={Img__Barril.Btn_Nuevo2}></img> y seguir todos los pasos del manual <u><strong>Agregar Agentes</strong></u></p>
            <Acordeon id={'Three'} tittle={'Agregar Agentes'} cont={<>
                <p>al ingresar a esta opción les mostrara el siguiente formulario</p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Agentes_AgregarFormulario} alt='Inicio Systrans'></img>
            </div><br/>
            <p>Ingresan los datos solicitados y dan clic en el botón guardar </p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Agentes_AgregarFormularioGuardar} alt='Inicio Systrans'></img>
            </div>
            <p>una ves den clic en guardar les saldrá el siguiente mensaje</p>
            <div className='Img__Center'>
            <img className='Img__Systrans' src={Img__Barril.Agentes_AgregarFormularioMs} style={{width: 600}}></img>
            </div>
            </>}/>
       </div>
    );
  }
export default ListarAgentes