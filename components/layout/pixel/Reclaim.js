import { RecButton } from '@/components/styles/button/RecButton,styled';
import { Description } from '@/components/styles/typo/Description.styled';
import { Heading } from '@/components/styles/typo/Heading.styled';
import { SubTitle } from '@/components/styles/typo/SubTitle.styled';
import { Title } from '@/components/styles/typo/Title.styled';
import { Wrapper } from '@/components/styles/Wrapper.styled';
import TitleComponent from '@/components/TitleComponent';
import React from 'react';

const Reclaim = () => {
  const content = [
    {
      heading: "MISS NO EVENTS",
      description:
        "Give Facebook the full pictures. Feed machine learning with better data from Conversion API",
      button: "Learn about Conversion API",
    },
    {
      heading: "ATTRIBUTE BETTER",
      description:
        "Not knowing which ads got the sales sucks. Omega attribution solves it, fast and accurate.",
      button: "Learn about Attribution",
    },
    {
      heading: "SCALE WITH CONFIDENCE",
      description:
        "Events are packed with useful info for Facebook to optimize right. PII are securedly hashed.",
      button: "Learn about Events",
    },
  ];

  const textMarkup = (data) => (
    <div className="col-md-5">
      <Heading>{data.heading}</Heading>
      <Description>{data.description}</Description>
      <RecButton>{data.button}</RecButton>
    </div>
  )

  const imgMarkup = (img) => (
    <div className='col-md-7'>
      <div>
      </div>
    </div>
  )
  return (
    <Wrapper>
      <div className="pixel-reclaim-wrapp">
        <div className="container">
          <TitleComponent title="RECLAIM WHAT YOU DESERVE" />
          <SubTitle center>Lost events, time, money & sweat.</SubTitle>
          <div className="pixel-reclaim-inner">
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

export default Reclaim;