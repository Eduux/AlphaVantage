import styled from 'styled-components';

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    flex: 1;
  }
`;

export const FilterDateContainer = styled.div`
  margin-left: 10px;
  padding: 30px;
  color: #122a4a;
  background: #fff;

  p {
    margin-bottom: 10px;
    span {
      font-weight: bold;
      margin-right: 5px;
    }
  }

  input {
  }
`;

export const FilterDateForm = styled.div`
  display: flex;
  > div {
    flex: 1;

    &:first-child {
      margin-right: 5px;
    }
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const Price = styled.div`
  width: 33.33%;
  padding: 0 15px;
  cursor: pointer;

  a {
    color: inherit;
  }
`;

export const PriceItem = styled.div`
  width: 100%;
  background-color: #3d6889;
  border-radius: 8px;
  padding: 15px;
  transition: 0.2s box-shadow ease;
  margin-bottom: 40px;

  &:hover {
    box-shadow: rgba(255, 255, 255, 0.6) 0 0 30px;
  }

  h1 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }
`;
