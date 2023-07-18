import React, { useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const TodoList: React.FC = () => {
  const { todo, page, error, loading, limit } = useTypedSelector(
    (state) => state.todo,
  );

  const pages = [1, 2, 3, 4, 5];

  const { fetchTodos, setTodoPage } = useActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h2>Идёт загрузка...</h2>;
  }

  if (error) {
    return <h2>Произошла ошибка: {error}</h2>;
  }
  return (
    <div>
      {todo.map((el) => (
        <div key={el.id}>
          {el.id}. - {el.title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map((p) => (
          <div
            onClick={() => setTodoPage(p)}
            style={{
              border: p === page ? "2px solid green" : "1px solid grey",
              padding: 10,
              cursor: "pointer",
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
