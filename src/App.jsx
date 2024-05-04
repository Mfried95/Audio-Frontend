import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import("../src/pages/Home"));
const Natigation = lazy(() => import("../src/components/Navigation"));


function App() {

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>  {/* Provide a fallback while the component is loading */}
      <Natigation/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;