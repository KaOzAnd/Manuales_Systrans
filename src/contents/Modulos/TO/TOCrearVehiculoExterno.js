import { Acordeon } from "../../../components/acordeon";
import { Img__Barril } from "../../../Img/Barril";

const TOCrearVehiculoExterno = () => {
   return (
       <div>
            <>
            <h1 className="Tittle__FirstContents">crear vehiculo externo</h1>
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
            <p><u><strong>crear vehículo externo</strong></u></p>
            <p>ingresan a la OPCIÓN crear vehículo externo</p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.TOCrearVehiculoExterno}></img>
            </div><br />
            <p>esta OPCIÓN permite crear vehiculos que no pertenecen al parque automotr del organismo de tránsito</p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.TOFormularioCrearVehiculoExterno}></img>
            </div><br />
            <p>desplegara el formulario donde pueden realizar el registro del vehiculo externo</p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.TOFormularioCrearVehiculoExternoLleno}></img>
            </div><br />
            <p>una vez ingresados los datos dan clic en guardar y con esto han creado el vehículo externo</p>
            </>
       </div>
    );
  }
export default TOCrearVehiculoExterno