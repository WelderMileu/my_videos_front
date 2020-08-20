import styled from 'styled-components';

export const Formulario = styled.form`
  width: 50%;
  display: ${ props => props.block ? "flex" : "none" };
  border: 1px solid var(--color-gray-light);
  flex-direction: column;
  padding: 50px;
  position: absolute;
  z-index: 3000;
  box-shadow: 3px 3px 3px var(--color-black-light);
  border-radius: 3px;
  background: var(--color-white-light);
  align-items: flex-start;
  top: 20%;
  right: 30%;

  svg {
    position: absolute;
    left: 90%;
    top: 15px;
    cursor: pointer;
  }
`;

export const TitleForm = styled.h1`
  margin-bottom: 30px;
`;

export const InputGroupChecked = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const InputError = styled.p`
  width: 50%;
  background-color: var(--color-blue);
  color: var(--color-white);
  padding: 5px;
  margin: 10px 0px;
  border-radius: .25rem;
  text-align: center;
  opacity: .8;

  @media(max-width: 1048px) {
    width: 100%;
  }
`;
