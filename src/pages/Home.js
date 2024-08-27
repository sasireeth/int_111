import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeContainer>
      <h2>Welcome to Your Affiliate Dashboard</h2>
      <p>This is the home page where you can get an overview of your affiliate marketing activities. Check the latest updates and manage your profile here.</p>
      <RandomContent>
        <h3>Latest News</h3>
      </RandomContent>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    color: #555;
    margin-bottom: 20px;
  }
`;

const RandomContent = styled.div`
  h3 {
    font-size: 22px;
    color: #007bff;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    color: #666;
  }
`;

export default Home;
