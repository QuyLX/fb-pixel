import { SubTitle } from '@/components/styles/typo/SubTitle.styled';
import { TextBorder } from '@/components/styles/typo/TextBorder.styled';
import { Wrapper } from '@/components/styles/Wrapper.styled';
import React from 'react';

const PixelBanner = () => {
  return (
    <Wrapper primary>
      <div className="pixel-banner-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <TextBorder>
                THE LAST PIXELS YOU’ll NEED TO SCALE SMART
              </TextBorder>
              <SubTitle>
                Enrich events with customer data so Facebook can find you the
                best target. No more stupid spending.
              </SubTitle>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PixelBanner;