import { Todo } from "../d";
import styled from "styled-components";
import { useMutation } from "react-query";
import { deleteTodo, changeDone } from "../api";

interface TodoModal extends Todo {
  onClickModal: () => void;
}

const TodoList = (props: TodoModal) => {
  const { id, title, text, isDone, onClickModal } = props;

  const { mutate: delTodo } = useMutation<void, unknown, string, unknown>(
    ["deleteTodo", id],
    (body) => deleteTodo(body),
    {
      onSuccess: () => {
        console.log("삭제성공");
      },
      onError: (err) => {
        console.log("err in delete:", err);
      },
    }
  );

  const { mutate: changeTodo } = useMutation<void, unknown, string, unknown>(
    ["changeDone", id],
    (body) => changeDone(body),
    {
      onSuccess: () => {
        console.log("수정성공");
      },
      onError: (err) => {
        console.log("err in update:", err);
      },
    }
  );

  return (
    <TodoCard key={id}>
      <div>{title}</div>
      <div>{text}</div>
      <TodoBtn onClick={() => delTodo(id)}>삭제</TodoBtn>
      <TodoBtn onClick={() => changeTodo(id)}>
        {isDone === true ? "취소" : "완료"}
      </TodoBtn>
      <TodoBtn onClick={onClickModal}>모달</TodoBtn>
    </TodoCard>
  );
};

export default TodoList;

const TodoCard = styled.div`
  position: relative;
  width: 400px;
  height: 130px;
  border: 1px solid black;
  padding: 10px;
`;

const TodoBtn = styled.button`
  width: 100px;
  height: 40px;
  position: relative;
  left: 50px;
  top: 40px;
  margin-left: 36px;
  color: white;
  background-color: ${(props) =>
    props.children === "삭제"
      ? "#b73e3e"
      : props.children === "완료"
      ? "#009EFF"
      : "#E8AA42"};
`;
