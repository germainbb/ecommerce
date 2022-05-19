import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: lightseagreen;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

export const Announcements = () => {
  return <Container>SUPER DEAL! FREE SHIPPING ON ORDERS OVER $30</Container>;
};
