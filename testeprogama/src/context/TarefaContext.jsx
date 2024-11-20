import React, { createContext, useReducer } from "react";

const TarefaContext = createContext();

const tarefaReducer = (state, action) => {
  switch (action.type) {
    case "ADICIONAR_TAREFA":
      return [
        ...state,
        { id: Date.now(), nome: action.payload, concluida: false },
      ];
    case "ALTERAR_STATUS":
      return state.map((tarefa) =>
        tarefa.id === action.payload
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      );
    case "FILTRAR_TAREFAS":
      return { ...state, filtro: action.payload };
    default:
      return state;
  }
};

export const TarefaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tarefaReducer, []);

  return (
    <TarefaContext.Provider value={{ state, dispatch }}>
      {children}
    </TarefaContext.Provider>
  );
};

export default TarefaContext;
