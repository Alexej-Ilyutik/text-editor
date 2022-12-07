import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from 'components/header/Header';
import { Main } from 'pages/main/Main';
import { About } from 'pages/about/About';
import { Footer } from 'components/footer/Footer';
import { ErrorPage404 } from 'pages/404ErrorPage/404ErrorPage';

import './App.scss';

export function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-me" element={<About />} />
          <Route path="*" element={<ErrorPage404 />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
