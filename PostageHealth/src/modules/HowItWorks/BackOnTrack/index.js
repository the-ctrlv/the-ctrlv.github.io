/* eslint-disable react/no-danger */
import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';

import MouseFollowProvider from 'components/MouseFollowProvider';

import { StyledBackOnTrack } from './styles';

export default function BackOnTrack({ data }) {
  const clean = DOMPurify.sanitize(data.header.codeHeading);

  return (
    <MouseFollowProvider light>
      <StyledBackOnTrack className="back-on-track mobile-blur">
        <div className="back-on-track__pattern" />
        <div className="content-container">
          <span className="fadeIn" data-scroll>
            {data.subHeading}
          </span>
          <h2 className="fadeIn" data-scroll dangerouslySetInnerHTML={{ __html: clean }} />
          <ul className="steps-list">
            <li>
              <Image
                priority
                src={data.images[0].url}
                width={data.images[0].metadata.dimensions.width}
                height={data.images[0].metadata.dimensions.height}
                alt={data.images[0].alt}
                className="fadeIn"
                data-scroll
              />
              <div className="steps-list__text-content">
                <div className="steps-list__text-content__number fadeIn" data-scroll>
                  <h5>{data.steps.title[0]}</h5>
                  <p>{data.steps.text[0]}</p>
                </div>
                <div className="steps-list__text-content__number fadeIn" data-scroll>
                  <h5>{data.steps.title[1]}</h5>
                  <p>{data.steps.text[1]}</p>
                </div>
              </div>
              <span className="fadeIn" data-scroll>
                <strong>{data.costs[0].item.text[0]}</strong> {data.costs[0].item.text[1]}
              </span>
            </li>

            <li>
              <div className="steps-list__text-content">
                <div className="steps-list__text-content__number fadeIn" data-scroll>
                  <h5>{data.steps.title[2]}</h5>
                  <p>{data.steps.text[2]}</p>
                </div>
                <div className="steps-list__text-content__number fadeIn" data-scroll>
                  <h5>{data.steps.title[3]}</h5>
                  <p>{data.steps.text[3]}</p>
                </div>
              </div>
              <Image
                src={data.images[1].url}
                width={data.images[1].metadata.dimensions.width}
                height={data.images[1].metadata.dimensions.height}
                alt={data.images[1].alt}
              />
              <span className="fadeIn" data-scroll>
                <strong>{data.costs[1].item.text[0]}</strong> {data.costs[1].item.text[1]}
              </span>
            </li>
          </ul>
        </div>
      </StyledBackOnTrack>
    </MouseFollowProvider>
  );
}
