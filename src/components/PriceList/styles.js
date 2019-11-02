import styled from 'styled-components';

export const PriceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const Price = styled.div`
  width: 50%;
  padding: 0 10px;
  margin-bottom: 40px;
  cursor: pointer;

  ul {
    background-color: white;
    list-style: none;
    border-radius: 25px;

    li {
      color: #122a4a;
      width: 33.33%;
      display: inline-block;
      padding: 15px;
      font-weight: bold;

      &:first-child {
        background: #88b337;
        color: white;
      }

      span {
        display: block;
        font-weight: initial;
        margin-bottom: 5px;
      }
    }
  }
`;
