import { RecButton } from '@/components/styles/button/RecButton,styled';
import { Description } from '@/components/styles/typo/Description.styled';
import { Heading } from '@/components/styles/typo/Heading.styled';
import { SubTitle } from '@/components/styles/typo/SubTitle.styled';
import { Wrapper } from '@/components/styles/Wrapper.styled';
import TitleComponent from '@/components/TitleComponent';
import React from 'react';

const Convert = () => {
  const content = [
    {
      heading: "GAME-CHANGING CATALOGS",
      description:
        "Set it and forget it. Link your store products to Facebook in one go. Save 1000x time lost in manual updates",
      button: "Learn about Catalogs",
    },
    {
      heading: "PIXEL-CATALOG PERFECT MATCH",
      description:
        "Omega pixels submit the events, while Omega Catalogs submit the products. Combining both, your Dynamic Product Ads are in good hands.",
      button: "Learn about Dynamic Product Ads",
    }
  ];

  const textMarkup = (data) => (
    <div className="col-md-4">
      <Heading>{data.heading}</Heading>
      <Description>{data.description}</Description>
      <RecButton primary>{data.button}</RecButton>
    </div>
  );

  const imgMarkup = (img) => (
    <div className="col-md-8">
      <div></div>
    </div>
  );
  return (
    <Wrapper primary>
      <div>
        <div className="container">
          <TitleComponent primary title="CONVERT THE RIGHT PEOPLE, AT SCALE" />
          <SubTitle center>
            Build catalog, get synced and retarget smart
          </SubTitle>
          <div className="pixel-convert-inner">
            {content.map((item, index) => (
              <div key={index}>
                {index == 1 ? (
                  <div className="row">
                    {imgMarkup()}
                    {textMarkup(item)}
                  </div>
                ) : (
                  <div className="row">
                    {textMarkup(item)}
                    {imgMarkup()}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Convert;