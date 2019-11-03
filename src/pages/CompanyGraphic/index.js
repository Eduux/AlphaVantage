import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HeaderSection from '../../components/HeaderSection';

import api from '../../services/api';
import { ajustKeys } from '../../helpers/ObjectBuilder';

import NotFound from '../../components/NotFound';
import Loading from '../../components/Loading';
import GraphicPlot from '../../components/GraphicPlot';

export default function CompanyGraphic(props) {
  const [loading, setLoading] = useState(1);
  const [compantPlot, setCompantPlot] = useState([]);
  useEffect(() => {
    const { match } = props;
    const fetchData = async () => {
      const { data } = await api.get(
        `?function=TIME_SERIES_INTRADAY&&interval=5min&symbol=${match.params.id}`,
      );
      setLoading(0);
      setCompantPlot(ajustKeys(data));
    };
    fetchData();
  }, [props]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : compantPlot['Time Series (min)'] ? (
        <>
          <HeaderSection
            text={`${compantPlot.MetaData.Symbol} Intraday (5 min) plot`}
            pathPage={`/company/${compantPlot.MetaData.Symbol}`}
          />
          <GraphicPlot data={compantPlot['Time Series (min)']} />
        </>
      ) : (
        <>
          <HeaderSection text="Intraday (5 min) plot" pathPage="/" />
          <NotFound />
        </>
      )}
    </>
  );
}

CompanyGraphic.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
