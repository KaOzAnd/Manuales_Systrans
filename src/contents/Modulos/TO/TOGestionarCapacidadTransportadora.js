import { Img__Barril } from "../../../Img/Barril";

const TOGestionarCapacidadTransportadora = () => {
    return (
        <div>
            <h1 className="Tittle__FirstContents">Gestionar Capacidad Transportadora</h1>
            <ul>
                <p><u><strong>INGRESO A SYSTRANS</strong></u></p>
                <li>SE INGRESA AL APLICATIVO SYSTRANS MEDIANTE LA DIRECCIÓN WEB ASIGNADA</li>
                <li>INICIAN SESIÓN CON EL USUARIO Y CONTRASEÑA ASIGNADOS</li>
            </ul>
            <div className='Img__Center'>
                <img className="Img__Systrans" src={Img__Barril.ImgInicio} alt="Inicio Systrans" ></img>
            </div><br />
            <p><u><strong>INGRESAN A LA OPCIÓN MÓDULOS</strong></u></p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.ImgModulos}></img>
            </div><br />
            <p><u><strong>INGRESAN A LA OPCIÓN TARJETAS DE OPERACIÓN</strong></u></p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.TO}></img>
            </div><br />
            <p><u><strong>EMPRESAS DE TRANSPORTE</strong></u></p>
            <li>INGRESAN A LA OPCIÓN EMPRESAS DE TRANSPORTE</li><br />
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.EmpresaDeTransporte}></img>
            </div><br />
            <li>BUSCAN LA EMPRESA A LA QUE VAN A GESTIONAR LA CAPACIDAD TRANSPORTADORA</li><br />
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.TOListaEmpresas}></img>
            </div><br />
            <p>DAN CLIC EN EL ICONO DE LA FLECHA Y ESTO DESPLEGARA UN MENÚ CON DOS OPCIONES Y DAN CLIC EN DETALLES</p><br />
            <li>ESTO DESPLEGARA LA SIGUIENTE VISTA</li>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.TOEmpresaDeTransporte}></img>
            </div><br />
            <p>DAN CLICK EN EL BOTÓN DE <u><strong>GESTIONAR CAPACIDAD TRANSPORTADORA</strong></u>  Y DESPLEGARA LA SIGUIENTE VENTANA</p>
            <br />
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.TOGestionarCapacidadTransportadora} style={{width: 800}}></img>
            </div><br />
            <p>PARA GESTIONAR LA CAPACIDAD TRANSPORTADORA SOLICITARA LOS SIGUIENTES DATOS:</p>
            <li>No. RESOLUCIÓN</li><br/>
            <p>dan clic en icono del mas <img src={Img__Barril.icono_mas}></img> esto desplegará la siguiente ventana  </p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.TOResolucionCapacidadTransportadora} style={{width: 700}} ></img>
            </div><br />
            <p>ingresan los siguientes datos:</p>
            <li>numero</li>
            <li>fecha</li>
            <li>estado</li>
            <li>se debe cargar el archivo correspondiente a la resolución</li><br/>
            <p>una vez ingresados los datos darán clic en guardar</p>
        </div>
    );
}
export default TOGestionarCapacidadTransportadora