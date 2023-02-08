import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  //background-color: coral;
  display: flex;
  position: relative;
`;

const HomeWrapper = styled.div`
  display: flex;

  height: 100%;
  width: 100%;
`;

const HomeImgContainer = styled.img`
  flex: 3;
`;

const HomeInfoContainer = styled.div`
  background-color: lightyellow;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  justify-content: center;
  font-size: 80px;
  font-style: oblique;
`;
const Desc = styled.p`
  font-size: 30px;
  font-style: italic;
  font-weight: 700;
  justify-content: center;
  letter-spacing: 3px;
`;
const ShopNow = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
`;

const Slider = () => {
  return (
    <Container>
      <HomeWrapper>
        <HomeImgContainer src="./HomePage_Image_01.jpg" />
        <HomeInfoContainer>
          <Title>WELCOME TO SHOPHOP</Title>
          <Desc>All the best !! for a whole lot less !!</Desc>
          <ShopNow>SHOP Now</ShopNow>
        </HomeInfoContainer>
      </HomeWrapper>
    </Container>
  );
};

export default Slider;
