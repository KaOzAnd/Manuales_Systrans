import { Img__Barril } from "../../Img/Barril";

const AsignarPermisos = () => {
   return (
       <div>
            <h1 className='Tittle__FirstContents'>Asignación de permisos</h1>
            <ul>
                <p><u><strong>INGRESO A SYSTRANS</strong></u></p>
                <li>SE INGRESA AL APLICATIVO SYSTRANS MEDIANTE LA DIRECCIÓN WEB ASIGNADA</li>
                <li>INICIAN SESIÓN CON EL USUARIO Y CONTRASEÑA ASIGNADOS</li>
            </ul>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.ImgInicio} alt='Inicio Systrans'></img>
            </div><br />
            <p><u><strong>ingrese a la opción Administración</strong></u></p>
            <div className="Img__Center">
                <img className="Img__Systrans" src={Img__Barril.Modulo_Administracion} alt=""></img>
            </div>
            <p><u><strong>ingrese a la opción cuentas de usuario</strong></u></p>
            <div className="Img__Center">
                <img className='Img__Systrans' src={Img__Barril.Administracion_CuentasDeUsuario} alt=""></img>
            </div>
            <p><u><strong>Cuentas de usuario</strong></u></p>
            <div className="Img__Center">
                <img className="Img__Systrans" src={Img__Barril.Adm_CuentasDeusuarioVista} alt=""></img>
            </div>
            <p> para asignar permisos a un usuario, primero deben buscar al usuario en la barra de búsqueda lo pueden buscar por nombre o numero de identificación 
                una vez encontrado el usuario al que le van asignar los permisos darán clic en el icono <img src={Img__Barril.icono_flecha} alt=""></img>
                esto desplegara el siguiente menu <img src={Img__Barril.Menu_Permisos} alt=""></img> y seleccionan la opción permisos y esto los llevara
                a la siguiente ventana.
            </p>
            <div className="Img__Center">
                <img className="Img__Systrans" src={Img__Barril.Adm_Permisos} alt=""></img>
            </div>
            <p>En esta ventana al realizar clic sobre un modulo se desplegara la lista de permisos que pertenecen a ese modulo</p>
            <p><strong>Ejemplo:</strong> vamos agregar permisos al usuario para poder crear otros usuarios</p>
            <p>para esto darán clic sobre Administración,  </p>
            <div className="Img__Center">
                <img className="Img__Systrans" src={Img__Barril.Adm_PermisosAdministracion} alt=""></img>
            </div>
            <p>esto desplegara los permisos correspondientes a ese modulo</p>
            <div className="Img__Center">
                <img className="Img__Systrans" src={Img__Barril.Adm_PermisosAdm} alt=""></img>
            </div>
            <p>para asignar un permiso dan clic sobre la barra, al dar clic la barra cambiara a color azul y este permiso quedara asignado</p>
            <p>para guardar los permisos asignados deben ir al final de la pantalla y dar clic en el botón <strong>guardar</strong></p>
       </div>
    );
  }
export default AsignarPermisos