import useForm from "../hooks/useForm";
import styled from "styled-components";

const Input = () => {
  const [form, onChangeValue, onSubmitValue] = useForm({
    title: "",
    text: "",
    isDone: false,
  });

  return (
    <InputWrap>
      <InputForm onSubmit={onSubmitValue}>
        <InputTitleText
          type="text"
          name="title"
          placeholder="제목을 입력하세요."
          value={form.title}
          onChange={onChangeValue}
        />
        <InputTitleText
          name="text"
          placeholder="내용을 입력하세요."
          value={form.text}
          onChange={onChangeValue}
        />
        <button>추가</button>
      </InputForm>
    </InputWrap>
  );
};

export default Input;

const InputWrap = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputForm = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 80%;
`;

const InputTitleText = styled.input`
  width: 40%;
  height: 30px;
  font-size: 18px;
`;
