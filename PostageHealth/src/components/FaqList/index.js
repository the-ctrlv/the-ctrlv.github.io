import { useEffect, useState } from 'react';

import Accordion from 'components/Accordion';

import { useWindowResize } from 'shared';

import PaginatedItems from './PaginateList';

import { StyledFaqList } from './styles';

export default function FaqList({ faq }) {
  const [isTabletMode, setIsTabletMode] = useState(false);
  const { width } = useWindowResize();

  useEffect(() => {
    if (width === 0) return;
    setIsTabletMode(width < 1024);
  }, [width]);

  return (
    <StyledFaqList className="content-container content-container--list fadeIn" data-scroll>
      {isTabletMode ? (
        <PaginatedItems itemsPerPage={4} faq={faq} />
      ) : (
        <ul className="faq-list">
          {faq.map((item, i) => (
            <Accordion key={i} question={item.question} answer={item.answer} />
          ))}
        </ul>
      )}
    </StyledFaqList>
  );
}
