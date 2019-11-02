import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import PriceList from '../PriceList';
import { formatDateFilter } from '../../helpers/FormatDate';

import 'react-datepicker/dist/react-datepicker.css';

import { FilterDateForm } from './styles';
import { SubmitButton, Form, Container } from '../../styles/mixins';

export default function DailyPrices({ prices, symbol }) {
  const [initialDate, setInitialDate] = useState();
  const [finalDate, setFinalDate] = useState();
  const pricesData = Object.entries(prices);
  const [pricesFilter, setPricesFilter] = useState(pricesData);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (initialDate && finalDate) {
        setPricesFilter(
          pricesData.filter(
            (item) => item[0] >= formatDateFilter(initialDate)
              && item[0] <= formatDateFilter(finalDate),
          ),
        );
      }
    },
    [initialDate, finalDate, pricesData],
  );

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <FilterDateForm>
            <p>Time period:</p>
            <DatePicker
              selected={initialDate}
              dateFormat="dd/MM/yyyy"
              onChange={(value) => setInitialDate(value)}
              placeholderText="Start date"
            />
            <DatePicker
              selected={finalDate}
              dateFormat="dd/MM/yyyy"
              onChange={(value) => setFinalDate(value)}
              placeholderText="End Date"
            />
          </FilterDateForm>
          <SubmitButton>Apply</SubmitButton>
        </Form>
      </Container>

      {pricesFilter.length > 0 && (
        <Link to={{ pathname: `/company-plot/${symbol}` }}>
          <PriceList list={pricesFilter} />
        </Link>
      )}
    </>
  );
}

DailyPrices.propTypes = {
  prices: PropTypes.any.isRequired,
  symbol: PropTypes.string.isRequired,
};
