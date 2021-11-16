import React from "react";
import styled from "styled-components";

const RightBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  position: relative;
  /* z-index: 10; */
  svg {
    width: 100%;
    height: auto;
  }
  @media only Screen and (max-width: 48em) {
    display: none;
  }
`;

const SvgBlock = ({ svg }) => {
  const SvgIcon = require(`../../assets/${svg}`).default;
  //console.log(SvgIcon);
  return (
    <RightBlock>
      <img src={SvgIcon} alt="Services" />
    </RightBlock>
  );
};

export default SvgBlock;