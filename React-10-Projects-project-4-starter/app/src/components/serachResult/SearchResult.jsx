import React from 'react'
import styled from "styled-components";


const SearchResult = () => {
  return (
    <FoodCardContainer>
    <FoodCard></FoodCard>
  </FoodCardContainer>
  )
}

export default SearchResult

const FoodCardContainer = styled.section`
  height: calc(100vh -210px);
  background-image: url("/bg.png");
  background-size: cover;
`;
const FoodCard = styled.div``;