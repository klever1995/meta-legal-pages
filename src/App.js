import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Layout({ title, children }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <div className="content">{children}</div>

      <div className="links">
        <Link to="/privacy">Política de Privacidad</Link>
        <Link to="/terms">Términos y Condiciones</Link>
        <Link to="/delete-data">Eliminación de Datos</Link>
      </div>
    </div>
  );
}

function Home() {
  return (
    <Layout title="Empresa AI Platform">
      <p>
        Plataforma enfocada en automatización, integración con WhatsApp Business,
        generación de campañas y herramientas empresariales impulsadas por IA.
      </p>
    </Layout>
  );
}

function Privacy() {
  return (
    <Layout title="Política de Privacidad">
      <p>
        Empresa AI Platform recopila únicamente la información necesaria para
        ofrecer servicios de automatización, mensajería y gestión empresarial.
      </p>

      <p>
        La información proporcionada por los usuarios se utiliza exclusivamente
        para autenticación, comunicación mediante WhatsApp Business y mejora de
        nuestros servicios.
      </p>

      <p>
        No vendemos información personal a terceros. Los datos se almacenan de
        forma segura y pueden eliminarse previa solicitud del usuario.
      </p>
    </Layout>
  );
}

function Terms() {
  return (
    <Layout title="Términos y Condiciones">
      <p>
        Al utilizar Empresa AI Platform, aceptas el uso responsable de nuestros
        servicios y herramientas.
      </p>

      <p>
        Está prohibido utilizar la plataforma para spam, fraude, actividades
        ilegales o incumplimiento de políticas de Meta y WhatsApp.
      </p>

      <p>
        Nos reservamos el derecho de suspender accesos que incumplan nuestras
        políticas o afecten la seguridad del sistema.
      </p>
    </Layout>
  );
}

function DeleteData() {
  return (
    <Layout title="Eliminación de Datos">
      <p>
        Los usuarios pueden solicitar la eliminación de sus datos personales y
        de integración enviando una solicitud al correo:
      </p>

      <p>
        <strong>klever_mix@hotmail.com</strong>
      </p>

      <p>
        Las solicitudes serán procesadas en un plazo razonable conforme a las
        políticas de privacidad aplicables.
      </p>
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/delete-data" element={<DeleteData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;