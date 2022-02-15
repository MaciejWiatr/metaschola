import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from 'twin.macro';
import { LoginPage } from '$features/auth';
import { HomePage } from '$features/home';

const App = () => (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </React.StrictMode>
  )

export default App;
