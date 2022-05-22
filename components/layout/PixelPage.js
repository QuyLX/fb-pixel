import React from 'react';
import { withLayout } from 'HoCs/withLayout';
import PixelBanner from './pixel/PixelBanner';
import Reclaim from './pixel/Reclaim';
import Great from './pixel/Great';
import MeetNew from './pixel/MeetNew';
import Convert from './pixel/Convert';

const PixelPage = () => {
  return (
    <div>
      <PixelBanner />
      <Reclaim />
      <Great />
      <MeetNew />
      <Convert />
    </div>
  );
};

export default (PixelPage);
