import React from 'react';
import { Routes, Route } from "react-router-dom";
import { About, Home } from 'pages';
import {Layout} from 'features/ui';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </Layout>
  );
};

export default App;