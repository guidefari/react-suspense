import React, { Suspense } from 'react';
import ProfileDetails from './components/ProfileDetails';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading User😬</h1>}>
        <ProfileDetails />
      </Suspense>
    </div>
  );
}

export default App;
