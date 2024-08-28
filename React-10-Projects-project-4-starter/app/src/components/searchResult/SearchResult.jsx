import React from "react";
import styled from "styled-components";
import { BASE_URL } from "../../App";

const SearchResult = ({ data: foods }) => {
  return (
    <FoodCardContainer>
      <FoodCards>
        {foods?.map((food) => (
          <FoodCard key={food.name}>
            <div className="food_image">
              <img src={BASE_URL + food.image} alt={food.name} />
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  height: calc(100vh -210px);
  background-image: url("/bg.png");
  background-size: cover;
`;
const FoodCards = styled.div``;
const FoodCard = styled.div``;
