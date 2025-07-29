import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Search = styled.input`
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px 20px 10px 25px;
  width: 1000px;
  color: #8e95a9;
  font-size: 16px;

  &:focus {
    border: 1px solid #207dd4;
  }
`;