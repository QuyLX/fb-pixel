import React from 'react';
import { Title } from './styles/typo/Title.styled';

/**How to use
 * 
 * <TitleComponent title="Test Heading" primary/>
*/

const TitleComponent = ({title, primary}) => {
  return (
    <div className="px-header" style={{display: "flex", justifyContent: "center"}}>
      <Title primary={primary}>{title}</Title>
    </div>
  );
};

export default TitleComponent;