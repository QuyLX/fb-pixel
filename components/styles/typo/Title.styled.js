import TitleComponent from "@/components/TitleComponent";
import styled from "styled-components";
import * as color from "../../abstract/colors";
import * as size from "../../abstract/font";

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: ${size.title};
  text-align: center;
  color: ${(props) => (props.primary == true ? color.blue3 : color.main)};
  text-transform: uppercase;
  font-weight: 900;
  position: relative;
  /* border-bottom: 20px solid black; */
  width: fit-content;
  z-index: 1;
  display: flex;
  justify-self: center;
  &:after {
    content: "";
    width: 100%;
    position: absolute;
    height: 20px;
    background-color: ${(props) => (props.primary == true ? color.main : color.blue2)};
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;
