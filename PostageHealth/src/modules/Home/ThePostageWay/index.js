import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';

import MouseFollowProvider from 'components/MouseFollowProvider';

import { StyledThePostageWay } from './styles';

export default function ThePostageWay({ data }) {
  const clean = DOMPurify.sanitize(data.header.codeHeading);

  return (
    <MouseFollowProvider light>
      <StyledThePostageWay>
        <section className="postage-way mobile-blur">
          <div className="content-container">
            <span className="fadeIn" data-scroll>
              {data.title}
            </span>
            <div className="fadeIn" dangerouslySetInnerHTML={{ __html: clean }} data-scroll />
            <ul className="postage-way__benefits flex-between">
              {data.children.item.map((item, index) => (
                <li className="fadeIn" data-scroll key={index}>
                  <div className="postage-way__benefits__image-wrapper">
                    <div
                      className="postage-way__benefits__image"
                      style={{
                        background: `url(${item.image.url}) center center / cover no-repeat`,
                      }}
                    />
                  </div>
                  <div className="postage-way__benefits__content">
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="postage-way__btn-wrapper">
              <Link href={data.button.route} className="btn btn--black fadeIn" data-scroll>
                <div className="title-wrapper">
                  <span>{data.button.text}</span>
                  <span>{data.button.text}</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </StyledThePostageWay>
    </MouseFollowProvider>
  );
}
