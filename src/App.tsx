import { useEffect } from "react";
import { query, collection, onSnapshot, where } from "firebase/firestore";
import { dbService } from "./firebase";
import { useState } from "react";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Input from "./components/Input";
import { Todo } from "./d";
import styled from "styled-components";
import Modal from "./components/Modal";

function App(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([{ id: "", title: "", text: "" }]);
  const [todosDone, setTodosDone] = useState<Todo[]>([
    { id: "", title: "", text: "" },
  ]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onClickModal = () => {
    if (isOpenModal) {
      setIsOpenModal(false);
    } else if (!isOpenModal) {
      setIsOpenModal(true);
    }
  };

  useEffect(() => {
    const q = query(
      collection(dbService, "Todos"),
      where("isDone", "==", false)
    );

    onSnapshot(q, (snapshot) => {
      const newTodos = snapshot.docs.map((doc) => {
        const newTodo: Todo = {
          id: doc.id,
          ...doc.data(),
        };
        return newTodo;
      });
      setTodos(newTodos);
    });

    const p = query(
      collection(dbService, "Todos"),
      where("isDone", "==", true)
    );

    onSnapshot(p, (snapshot) => {
      const newTodos = snapshot.docs.map((doc) => {
        const newTodo: Todo = {
          id: doc.id,
          ...doc.data(),
        };
        return newTodo;
      });
      setTodosDone(newTodos);
    });
  }, []);

  return (
    <>
      <Header />
      <Input />
      <div> 해야됨</div>
      <TodosWrap>
        {todos.map((todo) => {
          return (
            <TodoList
              id={todo.id}
              title={todo.title}
              text={todo.text}
              isDone={todo.isDone}
              onClickModal={onClickModal}
            />
          );
        })}
      </TodosWrap>
      <div> 다했음</div>
      <TodosWrap>
        {todosDone.map((todo) => {
          return (
            <TodoList
              id={todo.id}
              title={todo.title}
              text={todo.text}
              isDone={todo.isDone}
              onClickModal={onClickModal}
            />
          );
        })}
      </TodosWrap>
      {isOpenModal && <Modal onClickModal={onClickModal} />}
    </>
  );
}

export default App;

const TodosWrap = styled.div`
  width: 1000px;
  border: 1px solid black;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
