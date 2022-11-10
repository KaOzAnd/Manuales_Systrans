import { Img__Barril } from "../../../Img/Barril";

const RegistrarGruas = () => {
    return (
        <div>
            <h1 className="Tittle__FirstContents">Registrar Grúas</h1>
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
            <p><u><strong>ingresan a la OPCIÓN Grúas</strong></u></p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.Gruas}></img>
            </div><br />
            <li>ingresan a la OPCIÓN registrar Grúas</li>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.GruasRegistrar}></img>
            </div><br />
            <h3><u>Registrar Grúas</u></h3>
            <li>en esta opcion pueden Registrar las Grúas</li>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.GruasRegistrarFormulario}></img>
            </div><br />
            <p>cuando ingresan a registar una Grúa lo primero que realizara el sistema es solicitar la placa de la Grúa</p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.GruasIngresarPlaca} style={{ width: 400 }}></img>
            </div><br />
            <p>ingresan la placa de la Grúa que desean registrar</p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.GruasAgregar}></img>
            </div><br />
            <p>una vez ingresada la placa, systrans trae la informacion de la placa ingresada</p>
            <h3><u><strong>Agregar Conductores</strong></u></h3>
            <li>aqui pueden cargar los conductores de la Grúa</li>
            <p>para cargar un conductor darán clic en el boton agregar <img src={Img__Barril.icono_agregar}></img> en la sección de conductores</p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.GruasCargarConductores}></img>
            </div><br />
            <li>solicitara los datos del conductor</li>
            <div className=''>
                <img className='Img__Systrans' src={Img__Barril.formulario_agregarpersona} style={{ width: 600 }}></img>
            </div><br />
            <p>una vez ingresados los datos del conductor darán clic en <img src={Img__Barril.icono_continuar}></img></p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.GruasConductorAgregado} style={{ width: 600 }}></img>
            </div><br />
            <p>con esto quedara agregado el conductor para la Grúa</p>
            <h3><u><strong>Agregar Operador</strong></u></h3>
            <li>para cargar la empresa operadora de la Grúa darán clic en el icono de más <img src={Img__Barril.icono_mas2}></img> en la sección de operador, en caso de que la empresa no se encuentre creada y solicitará los siguientes datos</li>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.formulario_agregarempresa}></img>
            </div><br />
            <p>una vez ingresados los datos darán clic en guardar</p><br />
            <p>si la empresa se encuentra creada ingresan el nombre de la empresa desde esta parte</p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.GruasBuscarEmpresa} style={{ width: 700 }}></img>
            </div><br />
            <p>si la empresa está creada sañdrá en la lista, al momento de ingresar una parte del nombre se desplegara una lista con los nombres que coinciden de empresas</p>
            <p>seleccionan y dan clic en terminar</p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.GruasEmpresaAsignada} style={{ width: 700 }}></img>
            </div><br />
            <p>así quedara asignada la empresa</p>
            <p>como sabran que la empresa si fue asiganda, porque el botón de terminar cambia a <img src={Img__Barril.icono_cambiaroperador}></img></p>
            <h3><u><strong>Agregar Poliza Grúa</strong></u></h3>
            <li>para agregar una poliza a la Grúa darán clic en la OPCIÓN cargar polizas <img src={Img__Barril.icono_cargarpolizas}></img></li>
            <p>desplegara la siguiente ventana, donde solicitara los siguientes datos:</p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.GruasAgregarPoliza}></img>
            </div><br />
            <p>en el campo tipo deben seleccionar un tipo de poliza de las siguientes:</p>
            <ul>
                <ul>
                    <li>Contractual</li>
                    <li>Extra Contractual</li>
                    <li>Soat</li>
                    <li>Técnico Mecánica</li>
                </ul>
            </ul>
            <p>después de ingresar estos datos, darán clic en continuar y quedara asiganda la poliza al vehiculo</p>
            <div className='Img__Center'>
                <img className='Img__Systrans' src={Img__Barril.GruasPolizaCargada} style={{width: 800}}></img>
            </div><br />
        </div>
    );
}
export default RegistrarGruas