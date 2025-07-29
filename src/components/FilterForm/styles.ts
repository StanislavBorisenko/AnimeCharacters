import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Search = styled.input<{theme: string}>`
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px 20px 10px 25px;
  width: 1000px;
  color: ${props => props.theme === "dark" ? "#a0a0a0ff" : "#2c2c2cff"};
  font-size: 16px;
  background-color: ${props => props.theme === "dark" ? "#2c2c2cff" : "#a0a0a0ff"};

  &:focus {
    border: 1px solid #207dd4;
  }
`;