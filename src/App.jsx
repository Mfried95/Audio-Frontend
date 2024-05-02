import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import("../src/pages/Home"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>  {/* Provide a fallback while the component is loading */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;