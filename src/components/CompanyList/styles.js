import styled from 'styled-components';

export const CompanyContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const Company = styled.div`
  width: 33.33%;
  text-align: center;
  padding: 0 15px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }

  a {
    color: inherit;
  }
`;

export const CompanyItem = styled.div`
  width: 100%;
  background-color: #3d6889;
  border-radius: 8px;
  padding: 15px;
  transition: 0.2s box-shadow ease;
  margin-bottom: 40px;

  &:hover {
    box-shadow: rgba(255, 255, 255, 0.6) 0 0 30px;
  }

  p {
    margin-bottom: 10px;
  }
`;
