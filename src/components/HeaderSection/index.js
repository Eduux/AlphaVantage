import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { HeaderSectionStyles } from './styles';

export default function HeaderSection(props) {
  const { text, pathPage } = props;

  return (
    <HeaderSectionStyles>
      {pathPage && <Link to={pathPage}>Back</Link>}
      <h1>{text}</h1>
    </HeaderSectionStyles>
  );
}

HeaderSection.propTypes = {
  text: PropTypes.string,
  pathPage: PropTypes.any,
};

HeaderSection.defaultProps = {
  text: 'Seção simples',
  pathPage: false,
};
