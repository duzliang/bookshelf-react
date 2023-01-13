import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getBook } from '../../features/book/bookSlice';

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector(state => state.book.detail);

  useEffect(() => {
    dispatch(getBook(id))
  }, [id]);

  return (
    <div>
      <h1>书名: {detail.title}</h1>
      <p>副标题：{detail.sub_title}</p>
    </div>
  );
}
