import { Img__Barril } from "../../Img/Barril";

const CreacionDeUsuarios = () => {
    return (
        <div>
            <h1 className='Tittle__FirstContents'>Creación de Usuarios</h1>
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
                <img className="Img__Systrans" src={Img__Barril.Modulo_Administracion}></img>
            </div>
            <p><u><strong>ingrese a la opción cuentas de usuario</strong></u></p>
            <div className="Img__Center">
                <img className="Img__Systrans" src={Img__Barril.Administracion_CuentasDeUsuario}></img>
            </div>
            <p><u><strong>Cuentas de usuario</strong></u></p>
            <div className="Img__Center">
                <img className="Img__Systrans" src={Img__Barril.Adm_CuentasDeusuarioVista}></img>
            </div>
            <p>para crear un nuevo usuario darán clic en el botón nuevo <img src={Img__Barril.Btn_Nuevo}></img> el cual los llevara a la siguiente pagina</p>
            <div className="Img__Center">
                <img className="Img__Systrans" src={Img__Barril.Adm_CreacionUsuario}></img>
            </div>
            <p>darán clic en el botón <img src={Img__Barril.icono_mas2}></img> para ingresar los datos básicos del usuario a crear, esto desplegara la siguiente ventana</p>
            <div className="Img__Center">
                <img src={Img__Barril.formulario_AgregarUsuario}></img>
            </div><br />
            <p>ingresan los datos solicitados y dan click en el botón <img src={Img__Barril.icono_GuardarVerde}></img></p>
            <div className="Img__Center">
                <img className="Img__Systrans" src={Img__Barril.Adm_CreacionUsuario2}></img>
            </div>
            <p>una vez agregados los datos básicos del usuario Systrans tomara automáticamente el numero de identificación de usuario como usuario
                y asignara una clave aleatoria
                estos dos datos tanto como <strong>usuario</strong> y <strong>Contraseña</strong> pueden ser cambiadas a los datos que deseen
                una vez asignado el nombre de usuario y la contraseña, seleccionan ese usuario a que dependencia va ha pertenecer y cual va ser su rol
            </p>
            <div className="Img__Center">
                <img className="Img__Systrans" src={Img__Barril.Adm_CreacionUsuarioTotal}></img>
            </div><br/>
            <p>una vez ingresados los datos darán clic en el botón <img src={Img__Barril.icono_GuardarVerde}></img> y saldrá el siguiente mensaje</p>
            <div className="Img__Center">
                <img src={Img__Barril.Adm_MensajeCreacionUsuario}></img>
            </div>
        </div>
    );
}
export default CreacionDeUsuarios
