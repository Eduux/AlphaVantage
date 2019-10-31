import React from 'react';
import PropTypes from 'prop-types';

import { HeaderSectionStyles } from './styles';

export default function HeaderSection(props) {
  const { text } = props;
  return (
    <HeaderSectionStyles>
      <h1>{text}</h1>
    </HeaderSectionStyles>
  );
}

HeaderSection.propTypes = {
  text: PropTypes.string,
};

HeaderSection.defaultProps = {
  text: 'Seção simples',
};
