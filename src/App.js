import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import BillingDetails from './pages/BillingDetails';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Content>
          <Routes>
            <Route path="/billing" element={<BillingDetails/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/" exact element={<Home/>} />
          </Routes>
        </Content>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;

const Content = styled.main`
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;


export default App;
