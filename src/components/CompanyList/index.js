import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Company, CompanyContainer, CompanyItem } from './styles';

export default function CompanyList({ list }) {
  return (
    <CompanyContainer>
      {list.map((item) => (
        <Company key={item.symbol}>
          <Link to={{ pathname: `/company/${item.symbol}` }}>
            <CompanyItem>
              <p>
                <strong>{item.name}</strong>
              </p>
              <p>{item.region}</p>
              <p>{item.currency}</p>
            </CompanyItem>
          </Link>
        </Company>
      ))}
    </CompanyContainer>
  );
}

CompanyList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

CompanyList.defaultProps = {
  list: [],
};
