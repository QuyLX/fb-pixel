import styled from "styled-components";
import * as color from "../../abstract/colors";
import * as size from "../../abstract/font";

export const RecButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: ${size.button};
  color: ${color.main};
  font-weight: 400;
  border-color: ${color.main};
  background-color: transparent;
  box-shadow: none;
  padding: .5rem;
`;
