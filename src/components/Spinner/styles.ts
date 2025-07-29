import styled from "styled-components";

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 30vh;
`;

export const LoadingText = styled.p<{theme: string}>`
  color: ${props => props.theme === "dark" ? "#207dd4" : "#0c3d71"};
  margin-top: 25px;
`;