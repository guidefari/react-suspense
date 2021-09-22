import React, { Suspense } from 'react';
import './App.css';
import styled from 'styled-components';
import { fetchData } from './Api';

// instead of just bringing in a promise, look at what fetchData() returns
const resource = fetchData();

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading User😬</h1>}>
        <ProfileDetails />
      </Suspense>
    </div>
  );
}

const ProfileDetails = () => {
  const user = resource.user.read();

  return (
    <Wrapper>
      <Heading>{user.name}</Heading>
      <ul>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
        <li>City: {user.address.city}</li>
      </ul>
    </Wrapper>
  );
};

const Heading = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default App;
