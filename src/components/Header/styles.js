import styled from 'styled-components';

import { simpleFlex, container } from '../../styles/mixins';

export const HeaderStyles = styled.div`
  ${simpleFlex};
  margin-bottom: 50px;
  padding: 30px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  img {
    display: table;
    margin: 0 auto;
    width: 100px;
  }
`;

export const ContentWrapper = styled.div`
  ${container}
`;
