import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import API from '../../utils/api';
import server from '../../utils/server';

export default function Detail() {
  const { id } = useParams();

  const [detail, setDetail] = useState({});

  useEffect(() => {
    server.get(API.book.detail(id)).then(res => setDetail(res.detail));
  }, []);

  return (
    <div>
      <h1>书名: {detail.title}</h1>
      <p>副标题：{detail.sub_title}</p>
    </div>
  );
}
