import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import routes from './rutes';
import LiquidacionExtraordinaria from './pages/Modulos/LiquidacionExtraordinaria';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<routes.App />}>
            <Route index element={<routes.Home />} />
            {/* Menu Administracion */}
            <Route path='CuentasDeUsuarios' element={<routes.CuentasDeUsuarios />} />
            <Route path='ConstruccionDeMenus' element={<routes.ConstruccionDeMenus/>}/>
            <Route path='PlantillasDePermidos' element={<routes.PlantillasDePermidos/>}/>
            {/* Menu Contravenciones */}
            <Route path='Agentes' element={<routes.Agentes/>}/>
            <Route path='Audiencias' element={<routes.Audiencias/>}/>
            <Route path='Comparendos' element={<routes.Comparendos/>}/>
            <Route path='Consultas' element={<routes.Consultas/>}/>
            <Route path='Dispositivos' element={<routes.Dispositivos/>}/>
            <Route path='FotoMultas' element={<routes.FotoMultas/>}/>
            <Route path='Infraccion' element={<routes.Infraccion/>}/>
            <Route path='Integracion' element={<routes.Integracion/>}/>
            <Route path='Inventarios' element={<routes.Inventarios/>}/>
            <Route path='IPAT' element={<routes.IPAT/>}/>
            <Route path='Patios' element={<routes.Patios/>}/>
            <Route path='Rangos' element={<routes.Rangos/>}/>
            <Route path='Resoluciones' element={<routes.Resoluciones/>}/>
            {/* Menu Modulos */}
            <Route path='ActividadesExternas' element={<routes.ActividadesExternas/>}/>
            <Route path='Archivo' element={<routes.Archivo/>}/>
            <Route path='CursosDeTransito' element={<routes.Archivo/>}/>
            <Route path='Conductores' element={<routes.Conductores/>}/>
            <Route path='Convenios' element={<routes.Convenios/>}/>
            <Route path='EditorDeFormatos' element={<routes.EditorDeFormatos/>}/>
            <Route path='GestorInformes' element={<routes.GestorInformes/>}/>
            <Route path='Gruas' element={<routes.Gruas/>}/>
            <Route path='LiquidacionExtraordinaria' element={<LiquidacionExtraordinaria/>}/>
            <Route path='LiquidacionITA' element={<routes.LiquidacionITA/>}/>
            <Route path='Pagos' element={<routes.Pagos/>}/>
            <Route path='Reportes' element={<routes.Reportes/>}/>
            <Route path='MatrizDeSeguimiento' element={<routes.MatrizDeSeguimiento/>}/>
            <Route path='TarjetasDeOperacion' element={<routes.TarjetasDeOperacion/>}/>
            <Route path='TramitesDeTransito' element={<routes.TramitesDeTransito/>}/>
            <Route path='Turnos' element={<routes.Turnos/>}/>
            <Route path='Automotor' element={<routes.Automotor/>}/>
            <Route path='ZER' element={<routes.ZER/>}/>

        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
