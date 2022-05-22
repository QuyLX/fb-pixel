import styled from 'styled-components';
import * as color from '../../abstract/colors';
import * as size from '../../abstract/font';


export const SubTitle = styled.h2`
  font-size: ${size.subTitle};
  font-family: "Tomorrow", sans-serif;
  color: ${(props) => (props.primary ? color.blue3 : color.blue2)};
  text-align: ${(props)=> (props.center ? 'center' : 'left')};
  font-weight: 400;
`;