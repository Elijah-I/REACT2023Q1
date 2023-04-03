import React from 'react';
import './index.scss';
import { useSearchParams } from 'react-router-dom';

interface PaginationProps {
  totalPages: number;
}

const Pagination = ({ totalPages }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';

  const applyPageParams = (page: string) => {
    if (page === '1') searchParams.delete('page');
    else {
      if (searchParams.has('page')) searchParams.set('page', page);
      else searchParams.append('page', page);
    }

    setSearchParams(searchParams);
  };

  const pageLinks = [];
  for (let i = 1; i <= totalPages; i++) {
    const key = i.toString();
    const classNM = ['page'];
    if (page === key) classNM.push('page--selected');

    pageLinks.push(
      <div className={classNM.join(' ')} key={key} onClick={() => applyPageParams(key)}>
        {i}
      </div>
    );
  }

  return <>{pageLinks}</>;
};

export default Pagination;
