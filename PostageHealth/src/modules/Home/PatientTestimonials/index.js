import FeedbackSwiper from 'components/FeedbackSwiper';

import MouseFollowProvider from 'components/MouseFollowProvider';

import { StyledPatientTestimonials } from './styles';

export default function PatientTestimonials({ data }) {
  return (
    <MouseFollowProvider light>
      <StyledPatientTestimonials className="testimonials">
        <div className="content-container">
          <span>{data.subHeading}</span>
          <h2 className="section-title">{data.title}</h2>
        </div>

        <FeedbackSwiper testimonials={data.testimonial} />

        <div className="content-container">
          <div className="testimonials__footer flex-between">
            <span className="testimonials__footer__line" />

            <p className="testimonials__footer__title">
              <strong>{data.tagline.text[0]}</strong>
              {data.tagline.text[1]}
            </p>

            <span className="testimonials__footer__line" />
          </div>
        </div>
      </StyledPatientTestimonials>
    </MouseFollowProvider>
  );
}
