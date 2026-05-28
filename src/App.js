import { HashRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="container">
      <h1>Empresa AI Platform</h1>

      <p>
        Plataforma enfocada en automatización, integración con WhatsApp
        Business, generación de campañas y herramientas empresariales
        impulsadas por inteligencia artificial.
      </p>

      <div className="links">
        <Link to="/privacy">Política de Privacidad</Link>
        <Link to="/terms">Términos y Condiciones</Link>
        <Link to="/delete-data">Eliminación de Datos</Link>
      </div>
    </div>
  );
}

function Privacy() {
  return (
    <div className="container">
      <h1>Política de Privacidad</h1>

      <p>
        Empresa AI Platform recopila únicamente la información necesaria para
        proporcionar servicios de automatización, integración con WhatsApp
        Business y herramientas empresariales.
      </p>

      <p>
        La información proporcionada por los usuarios se utiliza únicamente
        para autenticación, comunicación y funcionamiento correcto de la
        plataforma.
      </p>

      <p>
        No compartimos ni vendemos datos personales a terceros. Los usuarios
        pueden solicitar la eliminación de sus datos en cualquier momento.
      </p>
    </div>
  );
}

function Terms() {
  return (
    <div className="container">
      <h1>Términos y Condiciones</h1>

      <p>
        Al utilizar Empresa AI Platform, aceptas utilizar la plataforma de
        manera responsable y conforme a las políticas de Meta y WhatsApp.
      </p>

      <p>
        Está prohibido utilizar nuestros servicios para spam, fraude,
        actividades ilegales o cualquier actividad que incumpla las políticas
        de plataformas externas.
      </p>

      <p>
        Nos reservamos el derecho de suspender cuentas o accesos que violen
        estas condiciones.
      </p>
    </div>
  );
}

function DeleteData() {
  return (
    <div className="container">
      <h1>Eliminación de Datos</h1>

      <p>
        Los usuarios pueden solicitar la eliminación de sus datos personales
        enviando una solicitud al correo:
      </p>

      <p>
        <strong>klever_mix@hotmail.com</strong>
      </p>

      <p>
        Las solicitudes serán procesadas dentro de un plazo razonable según
        las políticas aplicables.
      </p>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/delete-data" element={<DeleteData />} />
      </Routes>
    </HashRouter>
  );
}

export default App;