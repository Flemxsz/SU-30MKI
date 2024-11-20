import React, { useContext } from "react";
import TarefaContext from "../context/TarefaContext";

const Tarefa = ({ tarefa }) => {
  const { dispatch } = useContext(TarefaContext);

  const alterarStatus = () => {
    dispatch({ type: "ALTERAR_STATUS", payload: tarefa.id });
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={alterarStatus}
      />
      <span
        style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}
      >
        {tarefa.nome}
      </span>
    </li>
  );
};

export default Tarefa;
