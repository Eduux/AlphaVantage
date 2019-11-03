import React from 'react';
import PropTypes from 'prop-types';

import { Line } from 'react-chartjs-2';
import { formatDateTimeRender } from '../../helpers/FormatDate';

import { plotBuilder } from '../../helpers/PlotBuilder';

import { ContainerChart } from './styles';

export default function GraphicPlot({ data }) {
  const dataPlot = {
    labels: Object.keys(data).map((date) => formatDateTimeRender(date)),
    datasets: [
      {
        label: 'Plot (high)',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: plotBuilder(data),
      },
    ],
  };
  return (
    <ContainerChart>
      <Line data={dataPlot} />
    </ContainerChart>
  );
}

GraphicPlot.propTypes = {
  data: PropTypes.any.isRequired,
};
