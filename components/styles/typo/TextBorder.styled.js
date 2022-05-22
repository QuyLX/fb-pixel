import styled from "styled-components";
import * as color from '../../abstract/colors';
import * as size from "../../abstract/font"

export const TextBorder = styled.h1`
  color: ${color.blue3};
  font-size: ${size.textBorder};
  font-weight: 900;
  text-transform: uppercase;
  /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;
`;