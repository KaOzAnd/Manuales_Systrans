import { Acordeon } from "../../../components/acordeon";
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
            <Acordeon id={'One'} tittle={<li><strong>liquidación</strong></li>} cont={
                <>
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
                    <p>una vez seleccionado dan clic en <img src={Img__Barril.icono_generarliquidacion}></img></p>
                    <li>se mostrara la siguiente liquidación</li>
                    <div className='Img__Center'>
                        <img className="Img__Systrans" src={Img__Barril.TOLiquidacion} alt="Inicio Systrans" ></img>
                    </div><br />
                </>
            } />
            <Acordeon id={'Two'} tittle={<li><strong>renovación</strong></li>} cont={
                <>
                    <p>para inciar el proceso de renovación deben tener en cuenta que la liquidación debe estar en estado pagada</p>
                    <ul>
                        <li>ingresan a la opción de renovación para ello lo pueden hacer de dos formas</li>
                        <ol>
                            <li>por la miga de pan, la cual dice en que modulo se encuentran actualmente</li>
                            <div className='Img__Center'>
                                <img className="Img__Systrans" src={Img__Barril.TOMigaDePan} alt="Inicio Systrans" ></img>
                            </div><br />
                            <p>para esto dan clic en tarjetas de operación</p>
                            <p>esto los devolverá a la vista principal de tarjetas de operación y seleccionan la opción renovacion</p>
                            <div className='Img__Center'>
                                <img className="Img__Systrans" src={Img__Barril.TORenovacion} alt="Inicio Systrans" ></img>
                            </div><br />
                            <li>dan clic en el menú en módulos, luego en tarjetas de operación y luego en renovación</li>
                            <div className='Img__Center'>
                                <img className="Img__Systrans" src={Img__Barril.TOModulos_TO_Renovacion} alt="Inicio Systrans" ></img>
                            </div><br />
                        </ol>
                    </ul>
                    <p>ua vez dentro del módulo de renovac</p>
                </>
            } />
        </div>
    );
}
export default TOGenerarTarjetaDeOperacion