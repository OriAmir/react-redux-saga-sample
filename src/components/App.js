import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getExampleAction, incremntAction } from '../actions';
import Toast from './Toast';
import Loader from './loader/Loader';
import styled from 'styled-components/macro';

const StyledResultsDiv = styled.div`
  height: 400px;
  display:flex;
  justify-content:center;
`;

const StyledButtonsDiv = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
`;

const StyledButton = styled.button`
  margin-top:20px;
  cursor:pointer;
  padding:20px;
  color:blue;
  border: 1px solid black;
`;

export const App = () => {
  const dispatch = useDispatch();
  const main = useSelector(({ main }) => main);
  return (
    <>
      <Toast />
      <StyledButtonsDiv>
        <StyledButton onClick={() => dispatch(incremntAction())}>
          Simple dispatch call
          </StyledButton>
        {main.counter}
        <StyledButton onClick={() => dispatch(getExampleAction())}>Ajax with saga</StyledButton>
      </StyledButtonsDiv>
      <Loader ids={["GET_EXAMPLE"]}>
        {main.data &&
          <StyledResultsDiv>
            {
              JSON.stringify(main.data)
            }
          </StyledResultsDiv>
        }

      </Loader>
    </>
  );
};

export default App;
