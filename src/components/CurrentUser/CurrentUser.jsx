import React, { useEffect, useState } from 'react';
import { request } from '../../utils';
import './CurrentUser.scss';

export const CurrentUser = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    request(`/users/${userId}`)
      .then(setUser);
  }, [userId]);

  if (!user) {
    return (
      <p>
        Loading...
      </p>
    );
  }

  return (
    <div className="CurrentUser">
      <h2 className="CurrentUser__title">
        <span>
          Selected user:
          {' '}
          {userId}
        </span>
      </h2>

      <h3 className="CurrentUser__name">{user.name}</h3>
      <p className="CurrentUser__email">{user.email}</p>
      <p className="CurrentUser__phone">{user.phone}</p>
    </div>
  );
};
