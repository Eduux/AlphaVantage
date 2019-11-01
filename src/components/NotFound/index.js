import React from 'react';
import notFoundImage from '../../images/error-404.svg';

import { NotFoundContainer } from './styles';

export default function NotFound() {
  return (
    <NotFoundContainer>
      <img src={notFoundImage} alt="Not Found" />
      <p>Sorry! Could not find the request!</p>
    </NotFoundContainer>
  );
}
