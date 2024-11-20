import React, { useContext, useState } from "react";
import TarefaContext from "../context/TarefaContext";
import Tarefa from "./Tarefa";

const ListaDeTarefas = () => {
  const { state, dispatch } = useContext(TarefaContext);
  const [filtro, setFiltro] = useState("TODAS");

  const adicionarTarefa = (e) => {
    e.preventDefault();
    const nomeTarefa = e.target.elements.nomeTarefa.value.trim();
    if (nomeTarefa) {
      dispatch({ type: "ADICIONAR_TAREFA", payload: nomeTarefa });
      e.target.reset();
    }
  };

  const tarefasFiltradas = state.filter((tarefa) =>
    filtro === "CONCLUIDAS"
      ? tarefa.concluida
      : filtro === "PENDENTES"
      ? !tarefa.concluida
      : true
  );

  return (
    <div>
      <form onSubmit={adicionarTarefa}>
        <input type="text" name="nomeTarefa" placeholder="Nova Tarefa" />
        <button type="submit">Adicionar</button>
      </form>

      <div>
        <button onClick={() => setFiltro("TODAS")}>Todas</button>
        <button onClick={() => setFiltro("CONCLUIDAS")}>Concluídas</button>
        <button onClick={() => setFiltro("PENDENTES")}>Pendentes</button>
      </div>

      <ul>
        {tarefasFiltradas.map((tarefa) => (
          <Tarefa key={tarefa.id} tarefa={tarefa} />
        ))}
      </ul>
    </div>
  );
};

export default ListaDeTarefas;
