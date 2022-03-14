import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from  "react-query";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";

function App() {

  const queryClient = new QueryClient();

  // Agregamos Provider de react-query para poder usar en toda la app esta instancia de QueryClient con el Hook useQuery
  return (
    <QueryClientProvider client={ queryClient }>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/formularioIngreso" element={<Formulario />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
