import { Img__Barril } from "../../../Img/Barril";

const TOGenerarTarjetaDeOperacion = () => {
   return (
       <div>
        <h1 className="Tittle__FirstContents">Generar Tarjeta de operación</h1>
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
            <p><u><strong>generar tarjeta de operación</strong></u></p>
            <p>en este proceso pueden realizar las siguientes opciones</p>
            <ul>
            <li><strong>liquidar</strong></li>
            <li><strong>renovación</strong></li>
            <ul>
                <li>preautorizar</li>
                <li>autorizar</li>
                <li>subsanar</li>
                <li>rechazos</li>
                <li>imprimir t.o</li>
            </ul>
            <li><strong>finalizar renovación</strong></li>
            <li><strong>entregars</strong></li>
            </ul>
            <div className='Img__Center'>
                <img className="Img__Systrans" src={Img__Barril.TOInicio} alt="Inicio Systrans" ></img>
            </div><br />
            <p><u><strong>liquidar</strong></u></p>
            <li>ingresan a la OPCIÓN liquidar</li>
            <div className='Img__Center'>
                <img className="Img__Systrans" src={Img__Barril.TOLiquidar} alt="Inicio Systrans" ></img>
            </div><br />
            <p>ingresan el nombre de la Empresa</p>
            <p>una vez ingresado el nombre de la empresa, cagara los vehículos que pertenecen a esa empresa</p>
            <div className='Img__Center'>
                <img className="Img__Systrans" src={Img__Barril.TOLiquidar2} alt="Inicio Systrans" ></img>
            </div><br />
            <p>seleccionan el vehículo al cual desean realizar la liquidación</p>
            <div className='Img__Center'>
                <img className="Img__Systrans" src={Img__Barril.TOLiquidar3} alt="Inicio Systrans" ></img>
            </div><br />
            <p>seleccionan el trámite que van a realizar</p>
            <div className='Img__Center'>
                <img className="Img__Systrans" src={Img__Barril.TOLiquidar4} alt="Inicio Systrans" ></img>
            </div><br />
            
       </div>
    );
  }
export default TOGenerarTarjetaDeOperacion