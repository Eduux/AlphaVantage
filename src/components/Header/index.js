import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/bank.svg';
import { HeaderStyles, ContentWrapper } from './styles';

export default function Header() {
  return (
    <HeaderStyles>
      <ContentWrapper>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </ContentWrapper>
    </HeaderStyles>
  );
}
