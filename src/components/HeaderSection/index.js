import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { HeaderSectionStyles } from './styles';

export default function HeaderSection(props) {
  const { text, back } = props;
  return (
    <HeaderSectionStyles>
      {back && <Link to="/">Back</Link>}
      <h1>{text}</h1>
    </HeaderSectionStyles>
  );
}

HeaderSection.propTypes = {
  text: PropTypes.string,
  back: PropTypes.bool,
};

HeaderSection.defaultProps = {
  text: 'Seção simples',
  back: false,
};
