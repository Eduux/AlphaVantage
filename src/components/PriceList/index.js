import React from 'react';
import PropTypes from 'prop-types';

import { roundNumbers } from '../../helpers/RoundNumbers';

import { formatDateRender } from '../../helpers/FormatDate';

import { PriceContainer, Price } from './styles';

export default function PriceList({ list }) {
  return (
    <PriceContainer>
      {list.map(([key, value]) => (
        <Price key={key}>
          <ul>
            <li>
              <span>Date</span>
              {formatDateRender(key)}
            </li>
            <li>
              <span>Open</span>
              {roundNumbers(value.open)}
            </li>
            <li>
              <span>High</span>
              {roundNumbers(value.high)}
            </li>
            <li>
              <span>Low</span>
              {roundNumbers(value.low)}
            </li>
            <li>
              <span>Close</span>
              {roundNumbers(value.close)}
            </li>
            <li>
              <span>Volume</span>
              {Number(value.volume).toLocaleString()}
            </li>
          </ul>
        </Price>
      ))}
    </PriceContainer>
  );
}

PriceList.propTypes = {
  list: PropTypes.any.isRequired,
};
