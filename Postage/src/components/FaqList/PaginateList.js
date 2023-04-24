import { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { StyledReactPaginate } from 'shared/styles';
import Accordion from '../Accordion';

function Items({ currentItems }) {
  return (
    currentItems && (
      <ul className="faq-list">
        {currentItems.map((item, i) => (
          <Accordion key={i} question={item.title} answer={item.text} />
        ))}
      </ul>
    )
  );
}

export default function PaginatedItems({ itemsPerPage, faq }) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const reactPaginateRef = useRef(null);
  const [reactPaginateHeight, setReactPaginateHeight] = useState(0);

  useEffect(() => {
    if (reactPaginateRef.current) {
      setReactPaginateHeight(reactPaginateRef.current.clientHeight);
    }
  }, [reactPaginateRef]);

  const currentItems = faq.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(faq.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % faq.length;
    setItemOffset(newOffset);
  };

  return (
    <StyledReactPaginate ref={reactPaginateRef} style={{ minHeight: reactPaginateHeight }}>
      <div className="content-container content-container--pagination">
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          previousLabel={null}
          nextLabel={null}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
        />
      </div>
    </StyledReactPaginate>
  );
}
