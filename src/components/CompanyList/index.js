import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Company, CompanyContainer, CompanyItem } from './styles';

export default function CompanyList({ list }) {
  return (
    <CompanyContainer>
      {list.map((item) => (
        <Company key={item['1. symbol']} data-testid={item['1. symbol']}>
          <Link to={{ pathname: `/company/${item['1. symbol']}` }}>
            <CompanyItem>
              <p>
                <strong>{item['2. name']}</strong>
              </p>
              <p>{item['4. region']}</p>
              <p>{item['8. currency']}</p>
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
