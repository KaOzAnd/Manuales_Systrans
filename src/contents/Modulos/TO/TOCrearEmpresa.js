import { Img__Barril } from '../../../Img/Barril.js';
const TOCrearEmpresas = () => {
    return (
        <div>
            <h1 className="Tittle__FirstContents">Crear Empresa</h1>
            <p className="Paragraph_Contents">
                <ul>
                    <p><u><strong>INGRESO A SYSTRANS</strong></u></p>
                    <li>SE INGRESA AL APLICATIVO SYSTRANS MEDIANTE LA DIRECCIÓN WEB ASIGNADA</li>
                    <li>INICIAN SESIÓN CON EL USUARIO Y CONTRASEÑA ASIGNADOS</li>
                </ul>
                <div className='Img__Center'>
                    <img className="Img__Systrans" src={Img__Barril.ImgInicio} alt="Inicio Systrans" ></img>
                </div>
                <br />
                <p><u><strong>INGRESAN A LA OPCIÓN MÓDULOS</strong></u></p>
                <div className='Img__Center'>
                    <img className='Img__Systrans' src={Img__Barril.ImgModulos}></img>
                </div>
                <br />
                <p><u><strong>INGRESAN A LA OPCIÓN TARJETAS DE OPERACIÓN</strong></u></p>
                <div className='Img__Center'>
                    <img className='Img__Systrans' src={Img__Barril.TO}></img>
                </div>
                <br/>
                <p><u><strong>EMPRESAS DE TRANSPORTE</strong></u></p>
                <li>INGRESAN A LA OPCIÓN EMPRESAS DE TRANSPORTE</li><br/>
                <div className='Img__Center'>
                    <img className='Img__Systrans' src={Img__Barril.EmpresaDeTransporte}></img>
                </div>
                <br/>
                <li>PARA CREAR UNA EMPRESA SE DIRIGEN AL BOTÓN AGREGAR</li><br/>
                <div className='Img__Center'>
                    <img className='Img__Systrans' src={Img__Barril.TOAgregarEmpresa}></img>
                </div>
                <br/><li>ESTO DESPLEGARA LA SIGUIENTE VENTANA</li><br/>
                <div className='Img__Center'>
                    <img className='Img__Systrans' src={Img__Barril.TOFormEmpresas}></img>  
                </div>
                <p>INGRESAN LOS DATOS DE LA EMPRESA A CREAR Y DAN CLIC EN GUARDAR</p>
                <br/><p>SI BUSCAN LA EMPRESA QUE ACABAN DE CREAR, PUEDEN VISUALIZAR SUS DATOS DE LA SIGUIENTE FORMA.</p><br/>
                <div className='Img__Center'>
                    <img className='Img__Systrans' src={Img__Barril.TOListaEmpresas}></img>  
                </div>
                <br/><p>DAN CLIC EN EL INCONO DE LA FELCHA, ESTO DESPLEGARA UN MENÚ Y DAN CLIC EN DETALLES</p><br/>
                <li>ESTO DESPLEGARA LA SIGUIENTE VISTA CON TODA LA INFORMACIÓN DE LA EMPRESA</li><br/>
                <div className='Img__Center'>
                    <img className='Img__Systrans' src={Img__Barril.TOInfoEmpresa}></img>  
                </div>
            </p>
        </div>
    );
}
export default TOCrearEmpresas