import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getUser } from '../../stores/userSlice';

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector(state => state.user.detail);

  useEffect(() => {
    dispatch(getUser(id))
  }, [dispatch, id]);

  return (
    <div>
      <h1>用户名: {detail.username}</h1>
      <p>创建时间：{detail.create_at}</p>
    </div>
  );
}
