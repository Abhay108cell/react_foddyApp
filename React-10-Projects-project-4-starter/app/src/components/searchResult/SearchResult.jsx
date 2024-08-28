import React from 'react'
import styled from "styled-components";


const SearchResult = ({data:foods}) => {
  return (
    <FoodCardContainer>
    <FoodCards>
      {
        foods.map(()=>(
            <Foodcard></Foodcard>
        ))}
    </FoodCards>
  </FoodCardContainer>
  )
}

export default SearchResult

const FoodCardContainer = styled.section`
  height: calc(100vh -210px);
  background-image: url("/bg.png");
  background-size: cover;
`;
const FoodCards = styled.div``;
const FoodCard = styled.div``;