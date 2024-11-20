import React from "react";
import { TarefaProvider } from "../context/TarefaContext";
import ListaDeTarefas from "./ListaDeTarefas";

const App = () => (
  <TarefaProvider>
    <div className="app">
      <h1>Gerenciador de Tarefas</h1>
      <ListaDeTarefas />
    </div>
  </TarefaProvider>
);

export default App;
