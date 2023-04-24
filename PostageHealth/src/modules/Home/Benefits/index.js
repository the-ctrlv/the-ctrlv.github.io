import Link from 'next/link';

import MouseFollowProvider from 'components/MouseFollowProvider';

import { StyledBenefits } from './styles';

export default function Benefits({ data }) {
  return (
    <MouseFollowProvider light>
      <StyledBenefits className="benefits mobile-blur">
        <div className="content-container">
          <ul className="benefits__list flex-between">
            {data.children.item.map((item, i) => (
              <li className="fadeIn" data-scroll key={i}>
                <div className="benefits__list__image-wrapper">
                  <div
                    className="benefits__list__image"
                    style={{ background: `url(${item.image.url}) center center/cover no-repeat` }}
                  />
                </div>

                <div className="benefits__list__content">
                  <h6>{item.title}</h6>
                  {item.text.map((text, index) => (
                    <p key={index}>{text.title}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
          <div className="benefits__action-buttons">
            <Link href={data.buttonOne.route} className="btn btn--black  fadeIn" data-scroll>
              <div className="title-wrapper">
                <span>{data.buttonOne.text}</span>
                <span>{data.buttonOne.text}</span>
              </div>
            </Link>
            <Link href={data.buttonTwo.route} className="btn btn--outline FAQ  fadeIn" data-scroll>
              <div className="title-wrapper">
                <span>{data.buttonTwo.text}</span>
                <span>{data.buttonTwo.text}</span>
              </div>
              <span>?</span>
            </Link>
          </div>
        </div>
      </StyledBenefits>
    </MouseFollowProvider>
  );
}
