import { SubTitle } from '@/components/styles/typo/SubTitle.styled';
import { Wrapper } from '@/components/styles/Wrapper.styled';
import TitleComponent from '@/components/TitleComponent';
import React from 'react';

const Great = () => {
  return (
    <Wrapper primary>
      <div className="pixel-great-wrapper wrapper">
        <div className="container-fluid">
          <TitleComponent primary title="GREAT, ACTUALLY" />
          <SubTitle center primary>Don’t take our words for it</SubTitle>
          <div className="row">
            
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Great;