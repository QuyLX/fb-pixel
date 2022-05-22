import React from 'react';
import { withLayout } from 'HoCs/withLayout';
import PixelBanner from './pixel/PixelBanner';
import Reclaim from './pixel/Reclaim';

const PixelPage = () => {
  return (
    <div>
      <PixelBanner />
      <Reclaim />
    </div>
  );
};

export default (PixelPage);
