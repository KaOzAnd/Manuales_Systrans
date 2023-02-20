import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './rutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const Rs ="/";
const Rs ="/ManualSystrans";
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={Rs} element={<routes.App />}>
          <Route index element={<routes.Home />} />
          <Route path={Rs+'/Home'} element={<routes.Home />} />
          {/* Menu Administracion */}
          <Route path={Rs+'/CuentasDeUsuarios'} element={<routes.CuentasDeUsuarios />} />
          <Route path={Rs+'/ConstruccionDeMenus'} element={<routes.ConstruccionDeMenus />} />
          <Route path={Rs+'/PlantillasDePermisos'} element={<routes.PlantillasDePermisos/>}/>
          {/* Menu Contravenciones */}
          <Route path={Rs+'/Agentes'} element={<routes.Agentes />} />
          <Route path={Rs+'/Audiencias'} element={<routes.Audiencias />} />
          <Route path={Rs+'/Comparendos'} element={<routes.Comparendos />} />
          <Route path={Rs+'/Consultas'} element={<routes.Consultas />} />
          <Route path={Rs+'/Dispositivos'} element={<routes.Dispositivos />} />
          <Route path={Rs+'/FotoMultas'} element={<routes.FotoMultas />} />
          <Route path={Rs+'/Infraccion'} element={<routes.Infraccion />} />
          <Route path={Rs+'/Integracion'} element={<routes.Integracion />} />
          <Route path={Rs+'/Inventarios'} element={<routes.Inventarios />} />
          <Route path={Rs+'/IPAT'} element={<routes.IPAT />} />
          <Route path={Rs+'/Patios'} element={<routes.Patios />} />
          <Route path={Rs+'/Rangos'} element={<routes.Rangos />} />
          <Route path={Rs+'/Resoluciones'} element={<routes.Resoluciones />} />
          {/* Menu Modulos */}
          <Route path={Rs+'/ActividadesExternas'} element={<routes.ActividadesExternas />} />
          <Route path={Rs+'/Archivo'} element={<routes.Archivo />} />
          <Route path={Rs+'/CursosDeTransito'} element={<routes.Archivo />} />
          <Route path={Rs+'/Conductores'} element={<routes.Conductores />} />
          <Route path={Rs+'/Convenios'} element={<routes.Convenios />} />
          <Route path={Rs+'/EditorDeFormatos'} element={<routes.EditorDeFormatos />} />
          <Route path={Rs+'/GestorInformes'} element={<routes.GestorInformes />} />
          <Route path={Rs+'/Gruas'} element={<routes.Gruas />} />
          <Route path={Rs+'/LiquidacionExtraordinaria'} element={<routes.LiquidacionExtraordinaria/>}/>
          <Route path={Rs+'/LiquidacionITA'} element={<routes.LiquidacionITA />} />
          <Route path={Rs+'/Pagos'} element={<routes.Pagos />} />
          <Route path={Rs+'/Reportes'} element={<routes.Reportes />} />
          <Route path={Rs+'/MatrizDeSeguimiento'} element={<routes.MatrizDeSeguimiento />} />
          <Route path={Rs+'/TarjetasDeOperacion'} element={<routes.TarjetasDeOperacion />} />
          <Route path={Rs+'/TramitesDeTransito'} element={<routes.TramitesDeTransito />} />
          <Route path={Rs+'/Turnos'} element={<routes.Turnos />} />
          <Route path={Rs+'/Automotor'} element={<routes.Automotor />} />
          <Route path={Rs+'/ZER'} element={<routes.ZER />} />
          {/* Menu Parametros */}
          <Route path={Rs+'/Bancos'} element={<routes.Bancos />} />
          <Route path={Rs+'/Ciudades'} element={<routes.Ciudades />} />
          <Route path={Rs+'/Departamentos'} element={<routes.Departamentos />} />
          <Route path={Rs+'/Festivos'} element={<routes.Festivos />} />
          <Route path={Rs+'/Implementos'} element={<routes.Implementos />} />
          <Route path={Rs+'/Parametros'} element={<routes.Parametros />} />
          <Route path={Rs+'/Personas'} element={<routes.Personas />} />
          <Route path={Rs+'/Salarios'} element={<routes.Salarios />} />
          {/* Menu Servicios */}
          <Route path={Rs+'/Auditorias'} element={<routes.Auditorias/>}/>
          <Route path={Rs+'/Utilidades'} element={<routes.Utilidades/>}/>
          <Route path={Rs+'/IntegracionServicios'} element={<routes.IntegracionServicios/>}/>
          <Route path={Rs+'/Runt'} element={<routes.Runt/>}/>
          <Route path={Rs+'/ServiciosRest'} element={<routes.ServiciosRest/>}/>
          <Route path={Rs+'/Soporte'} element={<routes.Soporte/>}/>
          {/* Digitalizacion */}
          <Route path={Rs+'/Digitalizacion'} element={<routes.Digitalizacion/>}/>
          {/* Mantis */}
          <Route path={Rs+'/Mantis'} element={<routes.Mantis/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
