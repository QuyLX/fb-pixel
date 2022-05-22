import { Title } from '@/components/styles/typo/Title.styled';
import { Wrapper } from '@/components/styles/Wrapper.styled';
import TitleComponent from '@/components/TitleComponent';
import React from 'react';

const Reclaim = () => {
  return (
    <Wrapper>
      <div className="pixel-reclaim-wrapp">
        <TitleComponent title="RECLAIM WHAT YOU DESERVE" />
      </div>
    </Wrapper>
  );
};

export default Reclaim;