import styled, { keyframes, css } from 'styled-components';

export const container = `
  width: 90%;
  max-width: 1200px;
  margin: 0px auto;
`;

export const simpleFlex = `
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  alt: 'Pesquisar',
  disabled: props.loading,
}))`
  background: #122a4a;
  border: 0;
  padding: 0px 15px;
  margin-left: 10px;
  border-radius: 4px;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  & [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) => props.loading
    && css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
