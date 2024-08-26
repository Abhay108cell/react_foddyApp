import styled from 'styled-components'
const App = () => {
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
</Container>

  )
};

export default App;

const Container = styled.div`
`
const TopContainer = styled.section`
  
`