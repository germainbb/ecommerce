import React from "react";
import { categories } from "../data";
import { CategoryItem } from "./CategoryItem";
import styled from "styled-components";

const Container = styled.div``;

export const Categories = () => {
  return (
    <Container>
      Categories
      {categories.map((item, id) => (
        <CategoryItem key={id} item={item} />
      ))}
    </Container>
  );
};
