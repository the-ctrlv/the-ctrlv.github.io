import { urlForImage } from 'lib/sanity';

import MouseFollowProvider from 'components/MouseFollowProvider';

import { StyledWhyChoosePostage } from './styles';

export default function WhyChoosePostage({ data }) {
  return (
    <MouseFollowProvider>
      <StyledWhyChoosePostage>
        <section className="why-postage">
          <div className="content-container">
            <h2 className="fadeIn" data-scroll>
              {data.header.heading}
            </h2>
            <ul className="why-postage__reasons-list flex-between">
              {data.children.item.map((item, i) => (
                <li key={i} className="fadeIn" data-scroll>
                  <div className="why-postage__reasons-list__image-wrapper">
                    <div
                      className="why-postage__reasons-list__image"
                      style={{
                        background: `url(${urlForImage(item.image.url).url()}) center center/cover no-repeat`,
                      }}
                    />
                  </div>
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </StyledWhyChoosePostage>
    </MouseFollowProvider>
  );
}
