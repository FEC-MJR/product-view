import React from 'react';
import Size_Dropdown from './Size_Dropdown.jsx';
import styled from 'styled-components';

const PriceBlockWrapper = styled.div`
  width: 100%;
  height: 600px;
  background: #f4f4f4;
  font-family: sans-serif;
`;

const ContentHeader = styled.div`
  padding-top: 50px;
`;

const Heading = styled.h1`
  font-size: 28px;
  font-weight: 900;
  lett-spacing: 1.68px;
  line-height: 28px;
  margin: 0px;
  text-align: left;
  text-size-adjust: 100%;
  width: 90%;
  padding-left: 5%;
`;

const Gender = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.42px;
  line-height: 30px;
  text-align: left;
  text-size-adjust: 100%;
  width: 90%;
  padding-left: 5%;
`;

const Price = styled.span`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.42;
  line-height: 30px;
  margin-top: 10px;
  text-align: left;
  text-size-adjust: 100%;
  width: 90%;
  padding-left: 5%;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.42px;
  line-height: 21px;
  margin: 0px;
  text-align: left;
  text-size-adjust: 100%;
  width: 90%;
  padding-left: 5%;
`;

const ColorButtonWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.42px;
  line-height: 21px;
  text-align: left;
  text-size-adjust: 100%;
  width: 90%;
  padding-left: 5%;
`;

const Button = styled.button`
  background: #cc1618;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  font-stretch: 100%;
  letter-spacing: 0.42px;
  line-height: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border: 0;
  justify-content: center;
  vertical-align: middle;
  cursor: pointer
  font-weight: 700;
  padding-left: 25px;
  padding-right: 25px;
  paddtin-top: 12px;
  padding-bottom: 12px;
`;

var Price_Block = (props) => {
  return(
    <PriceBlockWrapper>
      <ContentHeader>
        <Heading>{props.product.products[0].name}</Heading>
        <Gender>{props.product.products[0].gender}</Gender>
        <ul className='stars-rating'>{props.product.products[0].userRating}</ul>
        <Price>$110</Price>
      </ContentHeader>
      <Description>{props.product.products[0].description}</Description>
      <ColorButtonWrapper>
        <div className='colors'>Colors</div>
        <div><Size_Dropdown /></div>
        <Button>ADD TO CART</Button>
      </ColorButtonWrapper>
    </PriceBlockWrapper>
  )
}


export default Price_Block;