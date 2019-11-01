import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '../../services/api';

import NotFound from '../../components/NotFound';
import DailyPrices from '../../components/DailyPrices';
import HeaderSection from '../../components/HeaderSection';
import Loading from '../../components/Loading';

export default function CompanyDetails(props) {
  const [loading, setLoading] = useState(1);
  const [companyDailyPrices, setCompanyDailyPrices] = useState([]);

  useEffect(() => {
    const { match } = props;
    const fetchData = async () => {
      const response = await api.get(
        `?function=TIME_SERIES_DAILY&symbol=${match.params.id}`,
      );
      setCompanyDailyPrices(response);
      setLoading(0);
    };
    fetchData();
  }, [props]);

  return (
    <>
      <HeaderSection
        text="Daily Prices (open, high, low, close) and Volumes"
        back
      />
      {loading ? (
        <Loading />
      ) : companyDailyPrices.data['Time Series (Daily)'] ? (
        <DailyPrices
          metaData={companyDailyPrices.data['Meta Data']}
          prices={companyDailyPrices.data['Time Series (Daily)']}
        />
      ) : (
        <NotFound />
      )}
    </>
  );
}

CompanyDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
