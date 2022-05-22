import styled from "styled-components";
import * as color from '../abstract/colors';

export const Wrapper = styled.section`
  background-color: ${(props) => (props.primary ? color.main : color.blue3)};
  width: 100%;
  font-family: "Poppins";
  color: ${(props) => (props.primary ? color.blue3 : color.main)};
`;