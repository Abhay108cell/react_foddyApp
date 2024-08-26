import { useState } from 'react';
import styled from 'styled-components'

const BASE_URL = "http://localhost:9000/"

const App = () => {
  const [data, setData] = useState(null)
  return (
<Container>
    <TopContainer>
      <div className="logo">
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="search">
        <input type="search" placeholder="Search Food" />
      </div>
    </TopContainer>
    <FilterContainer>
      <Button>All</Button>
      <Button>BreakFast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>
    </FilterContainer>
    <FoodCardContainer>
      <FoodCard></FoodCard>
    </FoodCardContainer>
</Container>

  )
};

export default App;

const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
`
const TopContainer = styled.section`
  min-height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search{
    input{
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height:40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap:12px;
  padding-bottom:40px;
`

const Button = styled.button`
background-color: #ff4343;
border-radius:5px;
padding: 6px 12px;
border: none;
color: white;
`

const FoodCardContainer = styled.section`
height: calc(100vh -210px);
  background-image: url("/bg.png");
background-size: cover;
`
const FoodCard = styled.div`
  
`
