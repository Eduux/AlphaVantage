import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ajustKeys } from '../../helpers/ObjectBuilder';
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
      const { data } = await api.get(
        `?function=TIME_SERIES_DAILY&symbol=${match.params.id}`,
      );
      setCompanyDailyPrices(ajustKeys(data));
      setLoading(0);
    };
    fetchData();
  }, [props]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : companyDailyPrices['TimeSeries(Daily)'] ? (
        <>
          <HeaderSection
            text={`${companyDailyPrices.MetaData.Symbol} Daily Prices`}
            pathPage="/"
          />
          <DailyPrices
            symbol={companyDailyPrices.MetaData.Symbol}
            prices={companyDailyPrices['TimeSeries(Daily)']}
          />
        </>
      ) : (
        <>
          <HeaderSection
            text="Daily Prices (open, high, low, close) and Volumes"
            pathPage="/"
          />
          <NotFound />
        </>
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
