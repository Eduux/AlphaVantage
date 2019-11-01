import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

import {
  DataContainer,
  FilterDateContainer,
  FilterDateForm,
  PriceContainer,
  Price,
  PriceItem,
} from './styles';

export default function DailyPrices({ metaData, prices }) {
  const [initialDate, setInitialDate] = useState(new Date());
  const [finalDate, setFinalDate] = useState(new Date());
  const pricesData = Object.entries(prices);
  const [pricesFilter, setPricesFilter] = useState(Object.entries(prices));
  useEffect(() => {
    setPricesFilter(
      pricesData.filter((item) => item[0] >= initialDate && item[0] <= finalDate),
    );
  }, [initialDate, finalDate]);

  return (
    <>
      <DataContainer>
        <FilterDateContainer>
          <p>
            <span>Company Symbol:</span>
            {metaData['2. Symbol']}
          </p>
          <p>
            <span>Last Refreshed:</span>
            {moment(metaData['3. Last Refreshed']).format('DD/MM/YYYY HH:mm')}
          </p>
          <p>Filter date:</p>
          <FilterDateForm>
            <DatePicker
              selected={initialDate}
              onChange={(value) => setInitialDate(value)}
            />
            <DatePicker
              selected={finalDate}
              onChange={(value) => setFinalDate(value)}
            />
          </FilterDateForm>
        </FilterDateContainer>
      </DataContainer>

      <PriceContainer>
        {pricesFilter.map(([key, value]) => (
          <Price key={key}>
            <PriceItem>
              <h1>{moment(key).format('DD/MM/YYYY')}</h1>
              <p>
                <span>Open: </span>
                {value['1. open']}
              </p>
              <p>
                <span>High: </span>
                {value['2. high']}
              </p>
              <p>
                <span>Low: </span>
                {value['3. low']}
              </p>
              <p>
                <span>Close: </span>
                {value['4. close']}
              </p>
              <p>
                <span>Volume: </span>
                {value['5. volume']}
              </p>
            </PriceItem>
          </Price>
        ))}
      </PriceContainer>
    </>
  );
}

DailyPrices.propTypes = {
  prices: PropTypes.any.isRequired,
  metaData: PropTypes.any.isRequired,
};
