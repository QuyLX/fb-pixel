import { SubTitle } from '@/components/styles/typo/SubTitle.styled';
import { Wrapper } from '@/components/styles/Wrapper.styled';
import TitleComponent from '@/components/TitleComponent';
import React from 'react';

const MeetNew = () => {
  return (
    <Wrapper primary>
      <div className="">
        <div className="container-fluid">
          <TitleComponent primary title="MEET YOUR NEW DASHBOARD FRIEND" />
          <SubTitle center primary>
            Your data, including attribution, is in good hands
          </SubTitle>
        </div>
      </div>
    </Wrapper>
  );
};

export default MeetNew;