import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/searchResult/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [selectedBtn, setSelectedBtn ] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData(json);
        setFilterData(json);
        setLoading(false);
      } catch (error) {
        setError("unable to fetch data");
      }
    };
Container
    fetchFoodData();
  }, []);

  console.log(data);

 const searchFood = (e)=>{
  const searchValue = e.target.value
  console.log(searchValue);
  
if (searchValue === ""){
  setFilterData(null)
}

const filter = data?.filter((food)=> food.name.toLowerCase().includes(searchValue.toLowerCase()))
setFilterData(filter)
 }


 const filterFood = (type) =>{
  if(type === "all"){
    setFilterData(data);
    setSelectedBtn("all");
    return;
  }
  const filter = data?.filter((food)=> food.type.toLowerCase().includes(type.toLowerCase()))
setFilterData(filter)
setSelectedBtn(type)
 }


const filterBtn = [
  {
    name: "All",
    type: "all",
  },
  {
    name: "Breakfast",
    type: "breakfast",
  },
  {
    name: "Lunch",
    type: "lunch",
  },
  {
    name: "Dinner",
    type: "dinner",
  },
]

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading...</div>;

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="search">
            <input onChange={searchFood} type="search" placeholder="Search Food" />
          </div>
        </TopContainer>
        <FilterContainer>
         {filterBtn.map((value) => (
          <Button
          isSelected={selectedBtn === value.type}
          key={value.name}
          onClick={() => filterFood(value.type)}>
          {value.name}
          </Button>
          ))}
        </FilterContainer>
      </Container>
      <SearchResult data={filterData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      &::placeholder{
        color: white;
      }
    }
  }
  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;

  }
`;
const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background: ${({isSelected})=>  (isSelected ?"#ad0000": "#ff4343")} ;
  outline:  1px solid ${({isSelected})=>  (isSelected ?"white": "#ff4343")} ;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #ad0000;
  }
`; 
